"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Order_By, useGetUserListQuery } from "@/graphql/generated";
import { renderRole } from "@/lib/renderRole";
import React, { useState } from "react";
import AddEditUserDialog, { dialogType } from "./AddEditUserDialog";
import { EmptyState, LoadingState } from "./helper";
import { User } from "./page";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GRADE_LEVEL, SECTION, STRANDS } from "@/var";
import { Input } from "@/components/ui/input";
import TablePagination from "../Components/TablePagination";
import { Edit } from "lucide-react";

const AccountTable: React.FC = ({}) => {
  const [filter, setFilter] = useState({
    section: "all",
    grade: "all",
    strand: "all",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const [editingUser, setEditingUser] = useState<Partial<User> | null>(null);
  const [dialogType, setDialogType] = useState<dialogType>("edit");
  const [activePage, setActivePage] = useState(1);
  const perPageCount = 10;
  const { loading, data } = useGetUserListQuery({
    variables: {
      where: {
        section: {
          _eq: filter.section !== "all" ? filter.section : undefined,
        },
        grade: {
          _eq: filter.grade !== "all" ? filter.grade : undefined,
        },
        strand: {
          _eq: filter.strand !== "all" ? filter.strand : undefined,
        },
        _or: [
          {
            firstname: {
              _ilike: `%${searchTerm}%`,
            },
          },
          {
            lastname: {
              _ilike: `%${searchTerm}%`,
            },
          },
          {
            email: {
              _ilike: `%${searchTerm}%`,
            },
          },
        ],
      },
      orderBy: {
        created_at: Order_By.Desc,
      },
      limit: perPageCount,
      offset: (activePage - 1) * perPageCount,
    },
    notifyOnNetworkStatusChange: true,
  });

  const totalPage = Math.ceil(
    (data?.users_aggregate.aggregate?.count || 0) / perPageCount
  );

  const handleEditUser = (user: User) => {
    setDialogType("edit");
    setEditingUser({ ...user });
  };

  const handleFilter = (key: keyof typeof filter, value: string) => {
    console.log({ ...filter, [key]: value });
    setFilter({
      ...filter,
      [key]: value,
    });
  };
  const handleAddUser = () => {
    setDialogType("add");
    setEditingUser({
      email: "",
      role: "USER",
    });
  };
  return (
    <>
      <AddEditUserDialog
        editingUser={editingUser}
        setEditingUser={setEditingUser}
        dialogType={dialogType}
      />

      <div className="flex  mb-4 justify-between pt-4">
        <div className="flex gap-4 flex-col lg:flex-row">
          <Input
            placeholder="Search meal name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm min-w-[240px]"
          />
          <Select
            value={filter.strand}
            onValueChange={(v) => handleFilter("strand", v)}
            // disabled={categoryLoading}
          >
            <SelectTrigger className="capitalize min-w-[180px]">
              <SelectValue
                placeholder="Select category"
                className="capitalize"
              />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value={"all"} className="capitalize">
                All Strand
              </SelectItem>
              {STRANDS.map((label, idx) => (
                <SelectItem key={idx} value={label} className="capitalize">
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={filter.grade}
            onValueChange={(v) => handleFilter("grade", v)}
          >
            <SelectTrigger className="capitalize min-w-[180px]">
              <SelectValue placeholder="Select grade" className="capitalize" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"all"} className="capitalize">
                All Grade
              </SelectItem>
              {GRADE_LEVEL.map((label, idx) => (
                <SelectItem key={idx} value={label} className="capitalize">
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filter.section}
            onValueChange={(v) => handleFilter("section", v)}
            // disabled={categoryLoading}
          >
            <SelectTrigger className="capitalize min-w-[180px]">
              <SelectValue
                placeholder="Select Section"
                className="capitalize"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"all"} className="capitalize">
                All Section
              </SelectItem>
              {SECTION.find(
                ({ grade_level, strand }) =>
                  grade_level === filter.grade && strand === filter.strand
              )?.sections?.map((label, idx) => (
                <SelectItem key={idx} value={label} className="capitalize">
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={() => {
              setFilter({
                grade: "all",
                section: "all",
                strand: "all",
              });
            }}
          >
            Reset
          </Button>
          <Button variant="default" onClick={handleAddUser}>
            New User
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Locked</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Strand</TableHead>
            <TableHead>Section</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{`${user.firstname} ${user.lastname}`}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="capitalize">
                {renderRole(user.role)}
              </TableCell>
              <TableCell>{user.isLocked ? "Yes" : "No"}</TableCell>
              <TableCell>{user.grade || "N/A"}</TableCell>
              <TableCell>{user.strand || "N/A"}</TableCell>
              <TableCell>{user.section || "N/A"}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="link"
                  size="icon"
                  onClick={() => {
                    handleEditUser(user);
                  }}
                >
                  <Edit />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {loading && <LoadingState />}
      {!loading && data?.users.length === 0 && <EmptyState />}
      <Separator className="my-4" />
      <TablePagination
        totalPages={totalPage}
        setActivePage={setActivePage}
        initialPage={activePage}
      />
    </>
  );
};
export default AccountTable;
