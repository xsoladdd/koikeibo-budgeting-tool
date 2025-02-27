"use client";
import { NextPage } from "next";
// import { useFoodStore } from "./context/useFoodContext";
// import { useGetCategorizedMealQuery } from "@/graphql/generated";
// import MealList from "./Components/MealList";
import { useGlobalContext } from "@/app/useGlobalContext";
import { Card, CardContent } from "@/components/ui/card";
import { useGetRecordQuery } from "@/graphql/generated";
import BudgetTable from "./BudgetTable";
import EditSubDialog from "./EditSubDialog";
import Filter from "./Filter";
import SettingsDialog from "./SettingsDialog";
import useBudgetStore from "./useBudgetStore";

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
      }
      setRecordLoading(false);
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <h1 className="text-2xl font-bold mb-6">Budget Overview</h1>
      <Card className="w-full pt-4 min-h-[500px]">
        <CardContent>
          <Filter />
          <SettingsDialog />
          <EditSubDialog />
          <BudgetTable />
        </CardContent>
      </Card>
    </main>
  );
};
export default page;
