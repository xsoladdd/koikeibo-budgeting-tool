"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  GetMealListQuery,
  useGetCategoriesQuery,
  useGetMealListQuery,
  useUpdateMealMutation,
  useUpsertMealMutation,
} from "@/graphql/generated";
import { Skeleton } from "@/components/ui/skeleton";
import EditMealDialog from "./MenuDialog";
import { dialogType } from "../accounts/AddEditUserDialog";
import { Separator } from "@radix-ui/react-dropdown-menu";
import TablePagination from "../Components/TablePagination";

export type Meal = GetMealListQuery["meals"][0];

const page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dialogType, setDialogType] = useState<dialogType>("edit");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isActive, setIsActive] = useState("all");
  const [editingProduct, setEditingProduct] = useState<Partial<Meal> | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [activePage, setActivePage] = useState(1);
  const perPageCount = 10;

  const [upsertMealMutation, { loading: upsertMealLoading }] =
    useUpsertMealMutation({
      onCompleted: () => {
        setIsDialogOpen(false);
      },
    });

  const { loading: categoryLoading, data: categoryData } =
    useGetCategoriesQuery();

  const { loading: mealLoading, data: mealData } = useGetMealListQuery({
    variables: {
      where: {
        category_id: {
          _eq: categoryFilter === "all" ? undefined : parseInt(categoryFilter),
        },
        name: {
          _ilike: `%${searchTerm}%`,
        },
        isActive: {
          _eq: isActive === "all" ? undefined : isActive === "true",
        },
      },
      limit: perPageCount,
      offset: (activePage - 1) * perPageCount,
    },
  });

  const categories: { label: string; value: string }[] = [
    { label: "All Categories", value: "all" },
    ...(categoryData?.categories.map((category) => ({
      label: category.name,
      value: `${category.id}`,
    })) || []),
  ];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryFilter = (category: string) => {
    setCategoryFilter(category);
  };

  const handleEdit = (product: Meal) => {
    setEditingProduct({ ...product });
    setDialogType("edit");
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (editingProduct) {
      upsertMealMutation({
        variables: {
          objects: {
            category_id: editingProduct.category_id,
            description: editingProduct.description,
            name: editingProduct.name,
            price: editingProduct.price,
            isActive: editingProduct.isActive,
            image: editingProduct.image,
            id: editingProduct.id,
          },
        },
        refetchQueries: ["getCategorizedMeal", "getMealList"],
      });
    }
  };

  const handleNewMenu = () => {
    setDialogType("add");
    setIsDialogOpen(true);
    setEditingProduct({
      isActive: true,
      image: "",
      name: "",
    });
  };
  const totalPage = Math.ceil(
    (mealData?.meals_aggregate.aggregate?.count || 0) / perPageCount
  );

  return (
    <>
      <div className="container mx-auto px-4 py-8 ">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-6">Menu Management</h1>
        </div>

        <Card>
          <CardContent>
            <div className="flex mb-4 justify-between pt-4 ">
              <div className="flex gap-4 flex-col lg:flex-row">
                <Input
                  placeholder="Search meal name..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="max-w-sm min-w-[240px]"
                />
                <Select
                  value={categoryFilter}
                  onValueChange={handleCategoryFilter}
                  disabled={categoryLoading}
                >
                  <SelectTrigger className="capitalize min-w-[180px]">
                    <SelectValue
                      placeholder="Select category"
                      className="capitalize"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(({ label, value }, idx) => (
                      <SelectItem
                        key={idx}
                        value={value}
                        className="capitalize"
                      >
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={isActive}
                  onValueChange={(value) => setIsActive(value)}
                  disabled={categoryLoading}
                >
                  <SelectTrigger className=" capitalize min-w-[180px]">
                    <SelectValue
                      placeholder="Select category"
                      className="capitalize"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="true">Active</SelectItem>
                    <SelectItem value="false">Not-Active</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setCategoryFilter("all");
                    setIsActive("all");
                    setSearchTerm("");
                  }}
                >
                  Reset
                </Button>
                <Button variant="default" onClick={handleNewMenu}>
                  New Menu
                </Button>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Active</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mealLoading
                  ? Array.from({ length: 5 }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Skeleton className="h-4 w-[250px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-[80px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-[300px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-[100px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-[40px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-8 w-[60px]" />
                        </TableCell>
                      </TableRow>
                    ))
                  : mealData?.meals.map((meal) => (
                      <TableRow key={meal.id}>
                        <TableCell>{meal.name}</TableCell>
                        <TableCell>₱{meal.price.toFixed(2)}</TableCell>
                        <TableCell>{meal.description}</TableCell>
                        <TableCell className="capitalize">
                          {meal.category?.name}
                        </TableCell>
                        <TableCell>{meal.isActive ? "Yes" : "No"}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(meal)}
                          >
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>{" "}
            <Separator className="my-4" />
            <TablePagination
              totalPages={totalPage}
              setActivePage={setActivePage}
              initialPage={activePage}
            />
          </CardContent>
        </Card>

        <EditMealDialog
          isOpen={isDialogOpen}
          dialogType={dialogType}
          onClose={() => setIsDialogOpen(false)}
          meal={editingProduct}
          categories={categories}
          onSave={handleSave}
          onMealChange={setEditingProduct}
          loading={upsertMealLoading}
        />
      </div>
    </>
  );
};

export default page;
