"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BookCheck, Settings } from "lucide-react";
import FinalizeBudgetDialog from "./FinalizeBudgetDialog";
import useBudgetStore from "./useBudgetStore";
import { pesoSign } from "@/lib/pesoSign";

const Filter: React.FC = () => {
  const {
    record,
    setEditNewDialogStatus,
    setSettingsForm,
    setIsReviewDialogOpen,
    recordLoading,
  } = useBudgetStore();

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
            <Label>
              Income: {pesoSign}
              {record?.income}
            </Label>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              disabled={recordLoading || (!recordLoading && !record)}
              onClick={handleSettingsButton}
            >
              <Settings className="h-4 w-4" />
              <span className="hidden sm:block"> Settings</span>
            </Button>
            <Button
              className=""
              disabled={recordLoading || (!recordLoading && !record)}
              onClick={() => setIsReviewDialogOpen(true)}
            >
              <BookCheck className="h-4 w-4" />
              <span className="hidden sm:block"> Review Entry</span>
            </Button>
            <FinalizeBudgetDialog />
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
