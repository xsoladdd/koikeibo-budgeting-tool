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
import React, { useState, useEffect } from "react";
import DisplayInfoDialog from "./DisplayInfoDialog";
import useRecentStore from "./useRecentContext";
import TablePagination from "../Components/TablePagination";
import { usePathname } from "next/navigation";

const page: React.FC = () => {
  const { user } = useGlobalContext();
  const pathname = usePathname();
  const [viewId, setViewId] = useState("");
  const perPageCount = 10;
  const { isRecordsLoading, setRecords, setRecordsLoading, records } =
    useRecentStore();
  const [activePage, setActivePage] = useState(1);
  const { data, refetch } = useGetPreviousRecordsQuery({
    skip: !user,
    variables: {
      user_id: user?.id,
      limit: perPageCount,
      offset: (activePage - 1) * perPageCount,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      if (data.records) {
        setRecords(data.records);
      }
      setRecordsLoading(false);
    },
  });

  useEffect(() => {
    if (pathname === "/recents") {
      console.log(`refetch`);
      refetch();
    }
  }, [pathname]);

  const loading = isRecordsLoading;
  const totalPage = Math.ceil(
    (data?.records_aggregate.aggregate?.count || 0) / perPageCount
  );
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <h1 className="text-2xl font-bold mb-6">Recent Entries</h1>
      <Card className="w-full pt-4 min-h-[530px] bg-custom-yellow border-transparent">
        <CardContent>
          {loading && (
            <div className="w-full h-full flex place-content-center place-items-center py-24">
              <LoaderCircle className="animate-spin" width={50} height={50} />
            </div>
          )}
          {!loading && records && (
            <Table>
              <TableHeader>
                <TableRow className="border-custom-blue/30">
                  <TableHead className="text-custom-blue font-semibold uppercase">
                    Record ID
                  </TableHead>
                  <TableHead className="text-custom-blue font-semibold uppercase">
                    Income
                  </TableHead>
                  <TableHead className="text-custom-blue font-semibold uppercase">
                    Note
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-custom-blue font-semibold uppercase">
                    T.Savings
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-custom-blue font-semibold uppercase">
                    T.Needs
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-custom-blue font-semibold uppercase">
                    T.Culture
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-custom-blue font-semibold uppercase">
                    T.Wants
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-custom-blue font-semibold uppercase">
                    T.Unplanned
                  </TableHead>
                  <TableHead className="text-right text-custom-blue font-semibold uppercase">
                    Actions
                  </TableHead>
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
                    <TableRow key={record.id} className="border-custom-blue/30">
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
