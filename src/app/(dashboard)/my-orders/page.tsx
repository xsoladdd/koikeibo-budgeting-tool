"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import {
  InputMaybe,
  Order_By,
  Orders_Bool_Exp,
  useSubOrdersSubscription,
} from "@/graphql/generated";
import { useGlobalContext } from "@/app/useGlobalContext";
import OrderItemSkeleton from "../manage-orders/OrderItemSkeleton";
import OrderItemDisplay from "../manage-orders/OrderItemDisplay";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import OrderItem from "../manage-orders/OrderItem";
const page: NextPage<{}> = ({}) => {
  const [selected, setSelected] = useState("default");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const { user } = useGlobalContext();

  const whereVar: InputMaybe<Orders_Bool_Exp> = {
    status:
      selected !== ""
        ? selected === "default"
          ? { _in: ["ready-for-pickup", "preparing"] }
          : selected === "all"
          ? {
              _is_null: false,
            }
          : {
              _eq: selected,
            }
        : undefined,
    userId: {
      _eq: user?.id,
    },
    pickupTime: {
      _gte: today.toISOString(),
      _lt: tomorrow.toISOString(),
    },
  };
  const { data, loading } = useSubOrdersSubscription({
    variables: {
      orderBy: {
        status: Order_By.Asc,
      },
      where: whereVar,
    },
    skip: !user,
    onData(options) {
      // refetch();
      console.log(options);
    },
  });

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col  pb-4">
          <h1 className="text-3xl font-bold mb-4">My Orders</h1>
          <div className="flex gap-2 place-items-center">
            <Select value={selected} onValueChange={(v) => setSelected(v)}>
              <SelectTrigger className="w-[350px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">
                  Show Default (Pending and For Pickup)
                </SelectItem>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="preparing">Preparing</SelectItem>
                <SelectItem value="ready-for-pickup">
                  Ready For Pickup
                </SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={() => setSelected("default")}>Reset</Button>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap">
          {loading &&
            [1, 2, 3].map((index) => <OrderItemSkeleton key={index} />)}
          {data?.orders.map((order) => (
            <OrderItem key={order.id} order={order} isStudent />
          ))}
        </div>
      </div>
    </>
  );
};
export default page;
