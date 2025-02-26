"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  GetOrdersQuery,
  InputMaybe,
  Order_By,
  Orders_Bool_Exp,
  useGetOrdersQuery,
  useSubOrdersSubscription,
} from "@/graphql/generated";
import { NextPage } from "next";
import { useState } from "react";
import OrderItem from "./OrderItem";
import OrderItemSkeleton from "./OrderItemSkeleton";

export type orderType = GetOrdersQuery["orders"][0];
const page: NextPage<{}> = ({}) => {
  const [selected, setSelected] = useState("default");

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

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
    pickupTime: {
      _gte: today.toISOString(),
      _lt: tomorrow.toISOString(),
    },
  };

  const { data, loading } = useSubOrdersSubscription({
    variables: {
      orderBy: {
        created_at: Order_By.Asc,
      },
      where: whereVar,
    },

    onData(options) {
      // refetch();
      console.log(options);
    },
  });

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col  pb-4">
        <h1 className="text-3xl font-bold mb-4">Orders</h1>
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
              <SelectItem value="ready-for-pickup">Ready For Pickup</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => setSelected("default")}>Reset</Button>
        </div>
      </div>

      <div className="flex gap-5 flex-wrap">
        {loading && [1, 2, 3].map((index) => <OrderItemSkeleton key={index} />)}
        {data?.orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};
export default page;
