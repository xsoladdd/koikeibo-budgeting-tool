import { Button } from "@/components/ui/button";
import React from "react";
import useBudgetStore from "./useBudgetStore";

const EmptyState: React.FC = () => {
  const { setEditNewDialogStatus } = useBudgetStore();
  return (
    <>
      <div className="text-center py-10">
        <p className="text-lg mb-4">No active record found</p>
        <Button onClick={() => setEditNewDialogStatus(true)}>
          Click here to generate one
        </Button>
      </div>
    </>
  );
};
export default EmptyState;
