"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useUpdateOrderStatusMutation } from "@/graphql/generated";
import clsx from "clsx";
import { useState } from "react";
import { formatReadableDate, formatReadableTime } from "./helper";
import { orderType } from "./page";
import OrderItemDisplay from "./OrderItemDisplay";

const OrderItem: React.FC<{ order: orderType; isStudent?: boolean }> = ({
  order,
  isStudent = false,
}) => {
  const fullName = `${order.user?.firstname} ${order.user?.lastname}`;
  const [modalStatus, setModalStatus] = useState(false);
  const [updateOrderStatus, { loading }] = useUpdateOrderStatusMutation({
    onCompleted: () => {
      setModalStatus(false);
    },
  });
  const handleUpdateStatus = (status: string) => {
    updateOrderStatus({
      variables: {
        id: order.id,
        status: status,
      },
    });
  };
  const dialogFragment = (
    <Dialog open={modalStatus} modal>
      <DialogContent className="" closeButton={false}>
        <DialogTitle>
          {!isStudent
            ? ` Order #${order.shortId}`
            : ` Order #${order.shortId} for ${fullName}`}
        </DialogTitle>
        <div className="flex gap-4 flex-wrap w-full place-content-center">
          <Button
            className="w-[100px] h-[100px] bg-red-500 text-xl"
            disabled={loading || order.status === "cancelled"}
            onClick={() => handleUpdateStatus("cancelled")}
          >
            Cancel
          </Button>
          {!isStudent && (
            <>
              <Button
                className="w-[100px] h-[100px] bg-green-500 text-xl text-wrap"
                disabled={loading || order.status === "ready-for-pickup"}
                onClick={() => handleUpdateStatus("ready-for-pickup")}
              >
                Ready for Pickup
              </Button>
              <Button
                className="w-[100px] h-[100px] bg-blue-500 text-lg text-wrap"
                disabled={loading || order.status === "completed"}
                onClick={() => handleUpdateStatus("completed")}
              >
                Completed (paid)
              </Button>
            </>
          )}
          <Button
            className="w-[100px] h-[100px] border-black text-xl text-wrap"
            disabled={loading}
            variant="outline"
            onClick={() => setModalStatus(false)}
          >
            Close Modal
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
  return (
    <>
      {dialogFragment}
      <button
        onClick={() => setModalStatus(true)}
        className="w-full max-w-[400px] cursor-pointer hover:bg-gray-100 bg-white transition duration-300 ease-in-out"
      >
        <OrderItemDisplay order={order} />
      </button>
    </>
  );
};

export default OrderItem;
