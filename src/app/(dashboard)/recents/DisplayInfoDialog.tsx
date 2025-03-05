import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GetPreviousRecordsQuery } from "@/graphql/generated";
import { ChevronRight, ListChecks } from "lucide-react";
import React, { useState } from "react";
import useRecentStore from "./useRecentContext";
import { pesoSign } from "@/lib/pesoSign";
import { renderType } from "@/lib/renderType";

interface DisplayInfoDialogProps {
  subEntryId: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DisplayInfoDialog: React.FC<DisplayInfoDialogProps> = ({
  subEntryId,
  open,
  setOpen,
}) => {
  const arrangement = [
    "insights",
    "needs",
    "savings",
    "wants",
    "culture",
    "extra",
  ];
  const { records } = useRecentStore();
  const activeRecord = records?.find((r) => r.id === subEntryId);
  if (!activeRecord) {
    return;
  }
  return (
    <>
      {" "}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px] bg-custom-blue border-transparent">
          <DialogHeader>
            <DialogTitle className="text-[#ebdaaf]">
              Record #{activeRecord.inc_id}
            </DialogTitle>
            <DialogDescription className="text-[#ebdaaf]/80">
              Transaction detailed summary
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue={arrangement[0]} className="mt-4">
            <TabsList className="grid w-full grid-cols-2 min-h-[100px] md:grid-cols-6 md:min-h-[unset]">
              {arrangement.map((f) => (
                <TabsTrigger value={f} key={f} className="capitalize">
                  {renderType(f)}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollArea className="h-[300px] mt-4 rounded-md border p-4 bg-white">
              {arrangement.map((f, idx) => {
                if (f === "insights") {
                  const percentageDisplay = activeRecord.sub_records
                    .map(({ type, percentage }) => `${type}: ${percentage}%`)
                    .join(", ");
                  return (
                    <TabsContent value={f} key={idx} className="mt-0">
                      <p className="pb-2">
                        Monthly Income: {pesoSign} {activeRecord.income}
                      </p>
                      <p className="text-sm">Percentile: {percentageDisplay}</p>
                      <p className="text-sm">
                        General Note: {activeRecord.note}
                      </p>
                      <p className="text-sm">
                        Speding Notes: {activeRecord.question1}
                      </p>
                      <p className="text-sm">
                        Improvement Notes: {activeRecord.question2}
                      </p>
                    </TabsContent>
                  );
                }
                const getSubRecord = (type: string) =>
                  activeRecord.sub_records.find(
                    (subRecord) => subRecord.type === type
                  );
                const subRecord = getSubRecord(f);

                const deets = subRecord?.entries;
                const estimate =
                  ((subRecord?.percentage || 0) / 100) *
                  (activeRecord?.income || 0);

                const total = (deets || []).reduce(
                  (acc, entry) => acc + entry.value,
                  0
                );
                return (
                  <TabsContent value={f} key={idx} className="mt-0">
                    <p className="pb-2">
                      <span className="capitalize pr-1">
                        {renderType(subRecord?.type)}
                      </span>
                      <span>({subRecord?.percentage}%)</span>
                    </p>
                    <div className="pb-2">
                      <p className="text-sm">
                        Estimated value: {pesoSign} {estimate}
                      </p>
                      <p className="text-sm">
                        Total value : {pesoSign}
                        {total}
                      </p>
                    </div>
                    <ol className="list-decimal pl-5 space-y-1">
                      {deets?.map((deet, idx) => (
                        <li key={idx} className="font-medium text-sm">
                          {" "}
                          {deet.title} - {pesoSign}
                          {deet.value}
                        </li>
                      ))}
                    </ol>
                    {deets?.length === 0 && (
                      <span className="font-medium text-sm">
                        Nothing in the list
                      </span>
                    )}
                  </TabsContent>
                );
              })}
            </ScrollArea>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default DisplayInfoDialog;
