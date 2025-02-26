import React from "react";
import { NextPage } from "next";
import OrdersTable from "./OrdersTable";
import { Card, CardContent } from "@/components/ui/card";

const page: NextPage<{}> = ({}) => {
  return (
    <>
      {" "}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-6">User Management</h1>
        </div>
        <Card>
          <CardContent>
            <OrdersTable />
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default page;
