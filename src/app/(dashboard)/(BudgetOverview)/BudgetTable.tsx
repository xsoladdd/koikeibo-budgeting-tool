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
          <TableRow className="border-custom-blue/30">
            <TableHead className="text-custom-blue font-semibold uppercase">
              Title
            </TableHead>
            <TableHead className="text-custom-blue font-semibold uppercase">
              Percentage
            </TableHead>
            <TableHead className="text-custom-blue font-semibold uppercase">
              Estimated Value
            </TableHead>
            <TableHead className="text-custom-blue font-semibold uppercase">
              Actual
            </TableHead>
            <TableHead className="text-custom-blue font-semibold uppercase">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        {recordLoading && (
          <TableBody>
            <TableRow className="border-custom-blue/30">
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
            <TableRow className="border-custom-blue/30">
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
                <TableRow key={index} className="border-custom-blue/30">
                  <TableCell className="uppercase">{row.type}</TableCell>
                  <TableCell>{row.percentage}%</TableCell>
                  <TableCell>
                    {pesoSign} {estimate}
                  </TableCell>
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
