"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Entry_Constraint,
  Entry_Update_Column,
  useDeleteEntryMutation,
  useUpsertEntryMutation,
} from "@/graphql/generated";
import { Plus, Save } from "lucide-react";
import React, { useState } from "react";
import useBudgetStore from "./useBudgetStore";
import { ConfirmationDialog } from "@/components/WarningDialog";
import { toast } from "sonner";

const EditSubDialog: React.FC = () => {
  const [item, setItem] = useState<{
    id: string;
    title: string;
    amount: string;
    editingIndex: number | null;
  }>({
    id: "",
    title: "",
    amount: "",
    editingIndex: null,
  });
  const { record, activeEdit, resetActiveEdit } = useBudgetStore();

  const selectedRecord =
    record?.sub_records.find(({ type }) => type === activeEdit.type)?.entries ||
    [];

  const [useUpsertEntry, { loading }] = useUpsertEntryMutation({
    refetchQueries: ["getRecord"],
    onCompleted: (data) => {
      setItem({
        id: "",
        title: "",
        amount: "",
        editingIndex: null,
      });
    },
  });

  const handleSaveNew = () => {
    if (record) {
      useUpsertEntry({
        variables: {
          objects: {
            id: item.id || undefined,
            title: item.title,
            value: parseFloat(item.amount),
            sub_record_id: activeEdit.id,
          },
          on_conflict: {
            constraint: Entry_Constraint.EntryPkey,
            update_columns: ["title", "value"] as Entry_Update_Column[],
          },
        },
      });
    }
  };

  const [deleteId, setDeleteId] = useState<string | null>(null);

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [useDeleteEntry] = useDeleteEntryMutation({
    onCompleted: (data) => {
      if (
        data &&
        data?.delete_entry?.affected_rows &&
        data?.delete_entry?.affected_rows >= 1
      ) {
        toast("Record Deleted", {
          // description: "Sunday, December 03, 2023 at 9:00 AM",
          duration: 5000,
          style: {
            backgroundColor: "black",
            color: `white`,
          },
        });
        setDeleteId(null);
        setDeleteLoading(false);
      }
    },
  });
  const handleDelete = () => {
    setDeleteLoading(true);
    setTimeout(() => {
      useDeleteEntry({
        variables: {
          id: {
            _eq: deleteId,
          },
        },
        refetchQueries: ["getRecord"],
      });
    }, 1000);
  };

  return (
    <>
      <ConfirmationDialog
        disabled={deleteLoading}
        isOpen={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        cancelLabel="Close"
        confirmLabel={deleteLoading ? "Deleting..." : "Delete"}
        description="Are you sure you want to delete this item?"
        title="Delete Item"
      />
      <Dialog
        open={activeEdit.id !== 0}
        onOpenChange={() => {
          if (!loading) {
            resetActiveEdit();
          }
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="capitalize">
              Edit {activeEdit.type}
            </DialogTitle>
            <DialogDescription>
              Add or modify items for this category.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <h3 className="mb-2 font-semibold">Current Items:</h3>
              <ol className="list-decimal list-inside">
                {selectedRecord.length === 0 && (
                  <span className="text-sm">No record found</span>
                )}
                {selectedRecord.map((item, index) => (
                  <li key={index}>
                    {item.title} - ${item.value} -{" "}
                    <Button
                      variant="link"
                      size="icon"
                      className="!h-8"
                      onClick={() => {
                        setItem({
                          amount: `${item.value}`,
                          title: item.title,
                          id: item.id,
                          editingIndex: index + 1,
                        });
                      }}
                    >
                      Edit
                    </Button>{" "}
                    {" | "}{" "}
                    <Button
                      variant="link"
                      size="icon"
                      className="!h-8"
                      onClick={() => {
                        setDeleteId(item.id);
                      }}
                    >
                      Delete
                    </Button>
                  </li>
                ))}
              </ol>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-title">Item Title</Label>
              <Input
                id="new-title"
                value={item.title}
                disabled={loading}
                onChange={(e) => setItem({ ...item, title: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-amount">Item Amount</Label>
              <Input
                id="new-amount"
                type="number"
                value={item.amount}
                disabled={loading}
                onChange={(e) => setItem({ ...item, amount: e.target.value })}
              />
            </div>
            <Button
              onClick={handleSaveNew}
              className="w-full"
              disabled={loading}
            >
              {item.editingIndex === null ? (
                <>
                  <Plus className="mr-2 h-4 w-4" /> Add Item
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" /> Save
                </>
              )}
            </Button>
          </div>
          <DialogFooter>
            <Button onClick={() => resetActiveEdit()} disabled={loading}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default EditSubDialog;
