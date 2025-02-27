"use client";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as Yup from "yup";

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
import useBudgetStore from "./useBudgetStore";
import {
  Sub_Record_Constraint,
  Sub_Record_Update_Column,
  Users_Constraint,
  useUpsertRecordMutation,
} from "@/graphql/generated";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/useGlobalContext";

const SettingsDialog: React.FC = () => {
  const {
    editNewDialogStatus,
    setEditNewDialogStatus,
    setSettingInput,
    settingsForm,
    resetSettingForm,
    record,
    setRecord,
  } = useBudgetStore();
  const { user } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [useUpsertRecord] = useUpsertRecordMutation({
    onCompleted: (data) => {
      setIsSubmitting(false);
      if (data.insert_records?.returning[0]) {
        setRecord(data.insert_records.returning[0]);
        setEditNewDialogStatus(false);
      }
    },
    onError: (error) => {
      setIsSubmitting(false);
    },
  });
  useEffect(() => {
    formik.setValues({
      monthlyIncome: settingsForm.monthlyIncome,
      needsPercentage: settingsForm.needsPercentage,
      wantsPercentage: settingsForm.wantsPercentage,
      culturePercentage: settingsForm.culturePercentage,
      extraPercentage: settingsForm.extraPercentage,
      savingsPercentage: settingsForm.savingsPercentage,
    });

    return () => {};
  }, [settingsForm]);

  const formik = useFormik({
    initialValues: {
      monthlyIncome: settingsForm.monthlyIncome,
      needsPercentage: settingsForm.needsPercentage,
      wantsPercentage: settingsForm.wantsPercentage,
      culturePercentage: settingsForm.culturePercentage,
      extraPercentage: settingsForm.extraPercentage,
      savingsPercentage: settingsForm.savingsPercentage,
    },
    validationSchema: Yup.object({
      monthlyIncome: Yup.number().required("Required"),
      needsPercentage: Yup.number().required("Required"),
      wantsPercentage: Yup.number().required("Required"),
      culturePercentage: Yup.number().required("Required"),
      extraPercentage: Yup.number().required("Required"),
      savingsPercentage: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      setIsSubmitting(true);
      if (values && user) {
        const recordWantsId = record?.sub_records.find(
          ({ type }) => type === "wants"
        )?.id;
        const recordNeedsId = record?.sub_records.find(
          ({ type }) => type === "needs"
        )?.id;
        const recordCultureId = record?.sub_records.find(
          ({ type }) => type === "culture"
        )?.id;
        const recordExtraId = record?.sub_records.find(
          ({ type }) => type === "extra"
        )?.id;
        const recordSavingsId = record?.sub_records.find(
          ({ type }) => type === "savings"
        )?.id;

        useUpsertRecord({
          variables: {
            objects: {
              id: record?.id || undefined,
              income: values.monthlyIncome,
              note: "",
              question1: "",
              question2: "",
              isActive: true,
              sub_records: {
                data: [
                  {
                    percentage: values.needsPercentage,
                    type: "needs",
                    id: recordNeedsId || undefined,
                  },
                  {
                    percentage: values.wantsPercentage,
                    type: "wants",
                    id: recordWantsId || undefined,
                  },
                  {
                    percentage: values.culturePercentage,
                    type: "culture",
                    id: recordCultureId || undefined,
                  },
                  {
                    percentage: values.extraPercentage,
                    type: "extra",
                    id: recordExtraId || undefined,
                  },
                  {
                    percentage: values.savingsPercentage,
                    type: "savings",
                    id: recordSavingsId || undefined,
                  },
                ],
                on_conflict: {
                  constraint: Sub_Record_Constraint.SubRecordPkey,
                  update_columns: [Sub_Record_Update_Column.Percentage],
                },
              },
              user_id: user?.id || "",
            },
          },
        });
      }
    },
  });

  const totalPercentage =
    formik.values.needsPercentage +
    formik.values.wantsPercentage +
    formik.values.culturePercentage +
    formik.values.extraPercentage +
    formik.values.savingsPercentage;

  const isNot100 = totalPercentage !== 100;

  return (
    <>
      <Dialog
        open={editNewDialogStatus}
        onOpenChange={(b) => {
          if (b === false) {
            resetSettingForm();
          }
          setEditNewDialogStatus(b);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Budget Settings</DialogTitle>
            <DialogDescription>
              Note: Make sure total percentage is equal to 100 %
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="monthlyIncome" className="text-right">
                  Monthly Income
                </Label>
                <Input
                  id="monthlyIncome"
                  type="number"
                  value={formik.values.monthlyIncome}
                  onChange={formik.handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="needsPercentage" className="text-right">
                  Needs %
                </Label>
                <Input
                  id="needsPercentage"
                  type="number"
                  value={formik.values.needsPercentage}
                  onChange={formik.handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="wantsPercentage" className="text-right">
                  Wants %
                </Label>
                <Input
                  id="wantsPercentage"
                  type="number"
                  value={formik.values.wantsPercentage}
                  onChange={formik.handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="culturePercentage" className="text-right">
                  Culture %
                </Label>
                <Input
                  id="culturePercentage"
                  type="number"
                  value={formik.values.culturePercentage}
                  onChange={formik.handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="extraPercentage" className="text-right">
                  Extra %
                </Label>
                <Input
                  id="extraPercentage"
                  type="number"
                  value={formik.values.extraPercentage}
                  onChange={formik.handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="savingsPercentage" className="text-right">
                  Savings %
                </Label>
                <Input
                  id="savingsPercentage"
                  type="number"
                  value={formik.values.savingsPercentage}
                  onChange={formik.handleChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter className="flex !justify-between w-full place-content-center place-items-center">
              <p className="text-xs ">{`Total: ${totalPercentage}%`}</p>
              <Button type="submit" disabled={isNot100 || isSubmitting}>
                {isSubmitting ? `Loading...` : `Save Changes`}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SettingsDialog;
