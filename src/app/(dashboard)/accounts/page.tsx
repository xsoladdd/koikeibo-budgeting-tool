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
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-6">User Management</h1>
      </div>

      <Card>
        <CardContent>
          <AccountTable />
        </CardContent>
      </Card>
    </div>
  );
};
export default page;
