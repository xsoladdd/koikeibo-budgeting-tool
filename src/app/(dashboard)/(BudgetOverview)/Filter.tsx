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
  const { record, setEditNewDialogStatus, setSettingsForm } = useBudgetStore();
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);

  const handleSettingsButton = () => {
    const culturePercentage = record?.sub_records.find(
      ({ type }) => type === "culture"
    )?.percentage;

    const extraPercentage = record?.sub_records.find(
      ({ type }) => type === "extra"
    )?.percentage;

    const needsPercentage = record?.sub_records.find(
      ({ type }) => type === "needs"
    )?.percentage;

    const savingsPercentage = record?.sub_records.find(
      ({ type }) => type === "savings"
    )?.percentage;

    const wantsPercentage = record?.sub_records.find(
      ({ type }) => type === "wants"
    )?.percentage;

    console.log(
      needsPercentage,
      wantsPercentage,
      culturePercentage,
      extraPercentage,
      savingsPercentage
    );
    setSettingsForm({
      culturePercentage: culturePercentage || 0,
      extraPercentage: extraPercentage || 0,
      monthlyIncome: record?.income || 0,
      needsPercentage: needsPercentage || 0,
      savingsPercentage: savingsPercentage || 0,
      wantsPercentage: wantsPercentage || 0,
    });
    setEditNewDialogStatus(true);
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
              onClick={handleSettingsButton}
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
