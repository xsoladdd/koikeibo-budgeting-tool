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
import { Edit } from "lucide-react";
import React, { useState } from "react";
import useBudgetStore from "./useBudgetStore";

const BudgetTable: React.FC = () => {
  const { record, activeEdit, setActiveEdit } = useBudgetStore();
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
                <TableCell>$ {estimate}</TableCell>
                <TableCell>{row.percentage}%</TableCell>
                <TableCell>$ {actual}</TableCell>
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
      </Table>
    </>
  );
};
export default BudgetTable;
