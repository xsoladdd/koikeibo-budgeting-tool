"use client";
import { NextPage } from "next";
// import { useFoodStore } from "./context/useFoodContext";
// import { useGetCategorizedMealQuery } from "@/graphql/generated";
import PageLoading from "../Components/PageLoading";
// import MealList from "./Components/MealList";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Settings } from "lucide-react";
import { useState } from "react";
import BudgetTable from "./BudgetTable";
import EmptyState from "./EmptyState";
import { initialData } from "./helper";
import useBudgetStore from "./useBudgetStore";

const hasData = true;
const isLoading = false;

const Filter: React.FC = () => {
  const { record } = useBudgetStore();
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [data, setData] = useState(initialData);
  const [newItem, setNewItem] = useState({ title: "", amount: "" });
  const [editItems, setEditItems] = useState<
    { title: string; amount: string }[]
  >([]);
  const [settings, setSettings] = useState({
    monthlyIncome: 1000,
    needsPercentage: 50,
    wantsPercentage: 30,
    culturePercentage: 10,
    extraPercentage: 5,
    savingsPercentage: 5,
  });

  const handleAddItem = () => {
    if (newItem.title && newItem.amount) {
      setEditItems([...editItems, newItem]);
      setNewItem({ title: "", amount: "" });
    }
  };

  const handleSaveEdit = () => {
    const updatedData = [...data];
    const totalAmount = editItems.reduce(
      (sum, item) => sum + Number.parseFloat(item.amount),
      0
    );
    updatedData[editingIndex] = {
      ...updatedData[editingIndex],
      title: editItems[0].title,
      estimatedValue: totalAmount.toString(),
      percentage: ((totalAmount / settings.monthlyIncome) * 100).toFixed(2),
    };
    setData(updatedData);
    setIsEditDialogOpen(false);
  };

  const handleSaveSettings = () => {
    setIsSettingsDialogOpen(false);
    // Here you would typically update the data based on new settings
    // For this example, we'll just close the dialog
  };

  return (
    <>
      {" "}
      <div className="w-full flex justify-between items-center pb-4">
        <div className="flex items-center space-x-4 justify-between w-full">
          <div className="flex gap-4 place-items-center">
            <Label>Income: ${record?.income}</Label>
          </div>
          <div className="flex gap-4">
            {" "}
            <Button
              variant="outline"
              disabled={isLoading || (!isLoading && !hasData)}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Dialog
              open={isReviewDialogOpen}
              onOpenChange={setIsReviewDialogOpen}
            >
              <DialogTrigger
                asChild
                disabled={isLoading || (!isLoading && !hasData)}
              >
                <Button>Review and Finalize Budget</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Review and Finalize Budget</DialogTitle>
                  <DialogDescription>
                    Please answer the following questions to complete your
                    budget review.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="note">Note:</Label>
                    <Textarea
                      id="note"
                      placeholder="Add any general notes here"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="spend-wisely">Did I spend wisely?</Label>
                    <Textarea
                      id="spend-wisely"
                      placeholder="Reflect on your spending habits"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="improve">
                      How can I improve next month?
                    </Label>
                    <Textarea
                      id="improve"
                      placeholder="List your improvement ideas"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    onClick={() => setIsReviewDialogOpen(false)}
                  >
                    Save and Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
