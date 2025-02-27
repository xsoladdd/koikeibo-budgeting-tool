"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GetUserListQuery } from "@/graphql/generated";
import React, { useState } from "react";
import AccountTable from "./AccountTable";
import AddEditUserDialog, { dialogType } from "./AddEditUserDialog";

export type User = GetUserListQuery["users"][0];

const page: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <h1 className="text-2xl font-bold mb-6">Account Management</h1>
      <Card>
        <CardContent>
          <AccountTable />
        </CardContent>
      </Card>
    </main>
  );
};
export default page;
