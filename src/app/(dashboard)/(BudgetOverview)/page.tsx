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
import Filter from "./Filter";
import { useGetRecordQuery } from "@/graphql/generated";
import { useGlobalContext } from "@/app/useGlobalContext";
import useBudgetStore from "./useBudgetStore";
import SettingsDialog from "./SettingsDialog";
import EditSubDialog from "./EditSubDialog";

const page: NextPage<{}> = ({}) => {
  const { user } = useGlobalContext();
  const { setRecord, record, recordLoading, setRecordLoading } =
    useBudgetStore();
  useGetRecordQuery({
    skip: !user,
    variables: {
      user_id: user?.id,
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (data.records[0]) {
        setRecord(data.records[0]);
        setRecordLoading(false);
      }
    },
  });

  const isLoading = recordLoading;
  const hasData = record !== undefined;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold mb-6">Budget Overview</h1>
      <Filter />
      <SettingsDialog />
      <EditSubDialog />
      {isLoading && <PageLoading />}
      {!isLoading && !hasData && <EmptyState />}
      {!isLoading && hasData && <BudgetTable />}
    </main>
  );
};
export default page;
