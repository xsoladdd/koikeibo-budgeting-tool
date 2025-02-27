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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useBudgetStore from "./useBudgetStore";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUpsertRecordMutation } from "@/graphql/generated";
import { useGlobalContext } from "@/app/useGlobalContext";

const FinalizeBudgetDialog: React.FC = () => {
  const { isReviewDialogOpen, setIsReviewDialogOpen, record, setRecord } =
    useBudgetStore();
  const { user } = useGlobalContext();
  const [useUpsertRecord] = useUpsertRecordMutation({
    onCompleted: () => {
      formik.resetForm();
      setRecord();
      setIsReviewDialogOpen(false);
    },
  });

  const formik = useFormik({
    initialValues: {
      note: "",
      spendWisely: "",
      improve: "",
    },
    validationSchema: Yup.object({
      note: Yup.string().required("Note is required"),
      spendWisely: Yup.string().required("This field is required"),
      improve: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      useUpsertRecord({
        variables: {
          objects: {
            id: record?.id || undefined,
            income: record?.income,
            note: values.note,
            question1: values.spendWisely,
            question2: values.improve,
            isActive: false,
            user_id: user?.id || "",
          },
        },
      });
    },
  });

  const err = (error: string) => (
    <div className="text-red-500 text-xs">{error}</div>
  );

  return (
    <>
      <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Review and Finalize Budget</DialogTitle>
            <DialogDescription>
              Please answer the following questions to complete your budget
              review.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="note">Note:</Label>
                <Textarea
                  id="note"
                  placeholder="Add any general notes here"
                  {...formik.getFieldProps("note")}
                />
                {formik.touched.note && formik.errors.note
                  ? err(formik.errors.note)
                  : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="spend-wisely">Did I spend wisely?</Label>
                <Textarea
                  id="spend-wisely"
                  placeholder="Reflect on your spending habits"
                  {...formik.getFieldProps("spendWisely")}
                />
                {formik.touched.spendWisely && formik.errors.spendWisely
                  ? err(formik.errors.spendWisely)
                  : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="improve">How can I improve next month?</Label>
                <Textarea
                  id="improve"
                  placeholder="List your improvement ideas"
                  {...formik.getFieldProps("improve")}
                />
                {formik.touched.improve && formik.errors.improve
                  ? err(formik.errors.improve)
                  : null}
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Submitting..." : "Save and Close"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FinalizeBudgetDialog;
