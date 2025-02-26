import React from "react";
import { orderType } from "./page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { formatReadableDate, formatReadableTime } from "./helper";

const OrderItemDisplay: React.FC<{ order: orderType }> = ({ order }) => {
  const createdAt = formatReadableDate(order.created_at);
  const pickupTime = formatReadableTime(order.pickupTime);
  const fullName = `${order.user?.firstname} ${order.user?.lastname}`;
  const ff = `${order.user?.grade} -  ${order.user?.strand} - ${order.user?.section} `;
  return (
    <>
      <Card className="bg-transparent">
        <CardHeader>
          <CardTitle className="flex justify-between items-center ">
            <span>Order #{order.shortId}</span>

            <Badge
              variant={"default"}
              className={clsx(
                `text-sm px-4 py-2 capitalize border-pink-500 bg-pink-500 `,
                order.status === "preparing" &&
                  `border-yellow-500 bg-yellow-500 hover:border-yellow-500 hover:bg-yellow-500`,
                order.status === "ready-for-pickup" &&
                  `border-green-500 bg-green-500 hover:border-green-500 hover:bg-green-500`,
                order.status === "completed" &&
                  `border-blue-500 bg-blue-500 hover:border-blue-500 hover:bg-blue-500`
              )}
            >
              {order.status}
            </Badge>
          </CardTitle>
          <CardDescription className="text-left text-lg text-black ">
            Estimated Pickup: <span className="font-bold">{pickupTime}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-semibold text-left">
            {fullName} {ff}
          </p>
          <p className="text-left">Notes: {order.note || "N/A"}</p>
          <p>{}</p>
          <ul className="mt-2">
            {order.order_meals.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>
                  {item.quantity}x {item.meal.name}
                </span>
                <span>₱{item.meal.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between font-bold">
            <span>Total:</span>
            <span>₱{order.total?.toFixed(2)}</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">Ordered at: {createdAt}</p>
        </CardContent>
      </Card>
    </>
  );
};
export default OrderItemDisplay;
