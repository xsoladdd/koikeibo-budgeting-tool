"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import useBudgetStore from "./useBudgetStore";
import { pesoSign } from "@/lib/pesoSign";

const BudgetTable: React.FC = () => {
  const {
    record,
    activeEdit,
    setActiveEdit,
    recordLoading,
    setEditNewDialogStatus,
  } = useBudgetStore();
  // const [activeEdit, setActiveEdit] = useState({
  //   type: "",
  //   id: 0,
  // });

  const data = record?.sub_records || [];

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Estimated Value</TableHead>
            <TableHead>Percentage</TableHead>
            <TableHead>Actual</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        {recordLoading && (
          <TableBody>
            <TableRow>
              <TableCell colSpan={5}>
                <div className="w-full h-full flex place-content-center place-items-center py-24">
                  <LoaderCircle
                    className="animate-spin"
                    width={50}
                    height={50}
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        )}
        {!recordLoading && !record && (
          <TableBody>
            <TableRow>
              <TableCell colSpan={5}>
                <div className="flex place-content-center">
                  {" "}
                  <Button
                    variant={"link"}
                    onClick={() => setEditNewDialogStatus(true)}
                  >
                    No active data found,click here to add a new record.
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        )}
        {!recordLoading && record && (
          <TableBody>
            {data.map((row, index) => {
              const estimate = (row.percentage / 100) * (record?.income || 0);
              const actual = row.entries.reduce(
                (acc, entry) => acc + entry.value,
                0
              );
              return (
                <TableRow key={index}>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>
                    {pesoSign} {estimate}
                  </TableCell>
                  <TableCell>{row.percentage}%</TableCell>
                  <TableCell>
                    {pesoSign} {actual}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setActiveEdit(row.type, row.id);
                        // setActiveEdit({ type: row.type, id: row.id });
                      }}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        )}
      </Table>
    </>
  );
};
export default BudgetTable;
