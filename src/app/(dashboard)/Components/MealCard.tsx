"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, ShoppingCart, Trash2Icon } from "lucide-react";
import React from "react";
import { mealType, useFoodStore } from "../context/useFoodContext";
import MealDialog from "./MealDialog";
import { useGlobalContext } from "@/app/useGlobalContext";
import { useRouter } from "next/navigation";
import useCloudinaryImage from "@/app/hooks/useCloudinaryImage";

interface MealCardProps {
  item: mealType;
}

const MealCard: React.FC<MealCardProps> = ({ item }) => {
  const { replace } = useRouter();
  const { addToCart, cart, removeFromCart } = useFoodStore();
  const { user } = useGlobalContext();
  const { generateUrl } = useCloudinaryImage();

  const hasUser = !!user?.id;
  const inCart = cart.find((cartItem) => cartItem.meal.id === item.id);
  const addMealToCart = () => {
    if (hasUser) {
      addToCart(item);
    } else {
      replace("/login");
    }
    // console.log("hasUser", hasUser);
  };
  return (
    <Card className="overflow-hidden relative min-w-[250px] w-full max-w-[350px] md:max-w-[250px] ">
      <CardHeader className="p-0 min-h-[130px]">
        <img
          src={generateUrl(item?.image, {
            transformations: {
              crop: "fit",
              height: 300,
              quality: 1500,
              // width: 500,
            },
          })}
          alt={item.name}
          className="w-full max-h-[130px] object-cover"
        />
      </CardHeader>
      <CardContent className="p-2 min-h-[80px]">
        <CardTitle className="text-sm">{item.name}</CardTitle>
        <CardDescription className="mt-1 text-xs line-clamp-2">
          {item.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-2 bg-muted">
        <div className="flex justify-between items-center w-full">
          <Badge variant="secondary" className="text-xs capitalize">
            {item.category?.name}
          </Badge>
          <span className="text-sm font-bold">₱ {item.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center w-full flex-col gap-2 lg:flex-row">
          {<MealDialog item={item} />}
          {hasUser && inCart ? (
            <>
              <Button
                size="sm"
                variant={"destructive"}
                className="text-xs w-full"
                onClick={() => removeFromCart(inCart.id)}
              >
                <Trash2Icon className="w-3 h-3 mr-1" />
                Remove to cart
              </Button>
            </>
          ) : (
            <>
              <Button
                size="sm"
                className="text-xs w-full"
                onClick={addMealToCart}
              >
                <ShoppingCart className="w-3 h-3 mr-1" />
                Add to cart
              </Button>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
export default MealCard;
