"use client";
import { useGlobalContext } from "@/app/useGlobalContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetPreviousRecordsQuery } from "@/graphql/generated";
import { pesoSign } from "@/lib/pesoSign";
import { BookOpen, Edit, LoaderCircle, View } from "lucide-react";
import React, { useState } from "react";
import DisplayInfoDialog from "./DisplayInfoDialog";
import useRecentStore from "./useRecentContext";
import TablePagination from "../Components/TablePagination";

const page: React.FC = () => {
  const { user } = useGlobalContext();
  const [viewId, setViewId] = useState("");
  const perPageCount = 10;
  const { isRecordsLoading, setRecords, setRecordsLoading, records } =
    useRecentStore();
  const [activePage, setActivePage] = useState(1);
  const { data } = useGetPreviousRecordsQuery({
    skip: !user,
    variables: {
      user_id: user?.id,
      limit: perPageCount,
      offset: (activePage - 1) * perPageCount,
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (data.records) {
        setRecords(data.records);
      }
      setRecordsLoading(false);
    },
  });
  const loading = isRecordsLoading;
  const totalPage = Math.ceil(
    (data?.records_aggregate.aggregate?.count || 0) / perPageCount
  );
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <h1 className="text-2xl font-bold mb-6">Recent Entries</h1>
      <Card className="w-full pt-4 min-h-[530px]">
        <CardContent>
          {loading && (
            <div className="w-full h-full flex place-content-center place-items-center py-24">
              <LoaderCircle className="animate-spin" width={50} height={50} />
            </div>
          )}
          {!loading && records && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>RecordID</TableHead>
                  <TableHead>Income</TableHead>
                  <TableHead>Note</TableHead>
                  <TableHead className="hidden md:table-cell">
                    T.Savings
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    T.Needs
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    T.Culture
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    T.Wants
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    T.Extra
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {records.map((record) => {
                  const getTotal = (type: string) =>
                    record.sub_records
                      .find((subRecord) => subRecord.type === type)
                      ?.entries.reduce((acc, entry) => acc + entry.value, 0);

                  const totalSavigns = getTotal("savings");
                  const totalNeeds = getTotal("needs");
                  const totalCulture = getTotal("culture");
                  const totalWants = getTotal("wants");
                  const totalExtra = getTotal("extra");
                  return (
                    <TableRow key={record.id}>
                      <TableCell>{record.inc_id}</TableCell>
                      <TableCell>
                        {" "}
                        {pesoSign}
                        {record.income}
                      </TableCell>
                      <TableCell>{record.note}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {pesoSign}
                        {totalSavigns}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {pesoSign}
                        {totalNeeds}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {pesoSign}
                        {totalCulture}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {pesoSign}
                        {totalWants}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {pesoSign}
                        {totalExtra}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="link"
                          size="icon"
                          onClick={() => {
                            setViewId(record.id);
                          }}
                        >
                          <BookOpen />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
          <div className="py-4">
            <TablePagination
              totalPages={totalPage}
              setActivePage={setActivePage}
              initialPage={activePage}
            />
          </div>
          <DisplayInfoDialog
            subEntryId={viewId}
            open={viewId !== ""}
            setOpen={() => setViewId("")}
          />
        </CardContent>
      </Card>
    </main>
  );
};
export default page;
