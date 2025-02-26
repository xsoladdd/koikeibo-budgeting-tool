"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useFoodStore } from "../context/useFoodContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCloudinaryImage from "@/app/hooks/useCloudinaryImage";
import { calculateTotal, generateTimeSlots } from "./helper";
import { useUpsertOrderMutation } from "@/graphql/generated";
import { useGlobalContext } from "@/app/useGlobalContext";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

const page: React.FC = () => {
  const { cart, changeQuantity, removeFromCart, emptyCart } = useFoodStore();
  const [note, setNote] = useState("");
  const maxLength = 200;
  const { user } = useGlobalContext();
  const { push } = useRouter();
  const [isLaterCheckout, setIsLaterCheckout] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const { generateUrl } = useCloudinaryImage();
  const timeSlots = generateTimeSlots("8:15", "16:00");
  const total = calculateTotal(cart);
  const { toast } = useToast();

  const [createOrder, { data, loading }] = useUpsertOrderMutation({
    onCompleted: () => {
      toast({
        title: "Checkout successful",
        description: "Your order has been placed successfully",
        variant: "default",
      });
      emptyCart();
      setIsLaterCheckout(false);
      setSelectedTime("");
      setNote("");
      console.log("Checkout successful");
    },
  });

  const handleCheckoutTypeChange = () => {
    setIsLaterCheckout(!isLaterCheckout);
    setSelectedTime("");
  };

  const handleCheckout = () => {
    if (user?.id) {
      const [time, period] = selectedTime.split(" ");
      const [hours, minutes] = time.split(":").map(Number);
      const adjustedHours =
        period === "PM" && hours !== 12 ? hours + 12 : hours;
      const laterTimestamp = isLaterCheckout
        ? new Date(new Date().setHours(adjustedHours, minutes)).toISOString()
        : "";

      const nowPlus15Minutes = new Date(
        new Date().getTime() + 15 * 60000
      ).toISOString();

      createOrder({
        variables: {
          objects: {
            pickupTime: isLaterCheckout ? laterTimestamp : nowPlus15Minutes,
            userId: user?.id,
            total: total,
            note: note,
            order_meals: {
              data: [
                ...cart.map(({ meal, quantity }) => ({
                  mealId: meal.id,
                  quantity: quantity,
                })),
              ],
            },
          },
        },
      });
    } else {
      push("/login");
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto  ">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <ShoppingCart className="w-6 h-6" />
          Your Cart
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2 md:p-6">
        {cart.length === 0 && <p className="text-center">Your cart is empty</p>}
        <ul className="space-y-4">
          {cart.map(({ id, meal, quantity }) => (
            <li
              key={id}
              className="flex items-center space-x-4 py-2 pr-2 md:pr-0"
            >
              <img
                src={generateUrl(meal.image, {
                  transformations: {
                    crop: "fit",
                  },
                })}
                alt={meal.name}
                className="hidden md:block w-32 h-20 rounded-md object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{meal.name}</h3>
                <p className="text-sm text-gray-500">
                  ₱{meal.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => changeQuantity(id, quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => changeQuantity(id, quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
              <Button
                variant="destructive"
                size="icon"
                className="h-8 w-8"
                onClick={() => removeFromCart(id)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Remove item</span>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="checkout-later"
            checked={isLaterCheckout}
            onCheckedChange={handleCheckoutTypeChange}
            disabled={cart.length === 0}
          />
          <Label htmlFor="checkout-later">Order for later</Label>
        </div>

        <Textarea
          placeholder="Type your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxLength={maxLength}
          className="min-h-[100px]"
        />

        {isLaterCheckout && (
          <div className="w-full flex place-items-center gap-2">
            <Select
              value={selectedTime}
              onValueChange={setSelectedTime}
              disabled={cart.length === 0}
            >
              <SelectTrigger id="pickup-time" className="w-full">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px] overflow-y-auto">
                {timeSlots.length !== 0 &&
                  timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                {timeSlots.length === 0 && (
                  <SelectItem value={"invalid"}>
                    {"No available time slots"}
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>
        )}
        <div className="w-full flex justify-between items-center">
          <div className="text-lg font-semibold">
            Total: ₱{total.toFixed(2)}
          </div>
          <Button
            className="w-1/3"
            disabled={
              (isLaterCheckout && !selectedTime) ||
              cart.length === 0 ||
              selectedTime === "invalid" ||
              loading
            }
            onClick={handleCheckout}
          >
            {loading
              ? "Loading"
              : isLaterCheckout
              ? "Schedule Order"
              : "Checkout Now"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default page;
