import { GetRecordQuery, RecordFragmentFragment } from "@/graphql/generated";

export const initialData = [
  {
    title: "Needs",
    estimatedValue: "500",
    percentage: "50",
    actual: "500",
    action: "edit",
  },
  {
    title: "Wants",
    estimatedValue: "300",
    percentage: "30",
    actual: "350",
    action: "edit",
  },
  {
    title: "Culture",
    estimatedValue: "100",
    percentage: "10",
    actual: "80",
    action: "edit",
  },
  {
    title: "Unexpected/Extra",
    estimatedValue: "50",
    percentage: "5",
    actual: "30",
    action: "edit",
  },
  {
    title: "Savings",
    estimatedValue: "50",
    percentage: "5",
    actual: "40",
    action: "empty",
  },
];

export type recordType = RecordFragmentFragment;
