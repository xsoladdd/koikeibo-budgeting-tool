import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, ShoppingCart } from "lucide-react";
import React from "react";
import useFoodStore, { mealType } from "../context/useFoodContext";
import { useRouter } from "next/navigation";
import useCloudinaryImage from "@/app/hooks/useCloudinaryImage";

type MealDialogProps = {
  item: mealType;
};

const MealDialog: React.FC<MealDialogProps> = ({ item }) => {
  const { cart, addToCart, removeFromCart } = useFoodStore();
  const { generateUrl } = useCloudinaryImage();
  const { push } = useRouter();
  const inCart = cart.find((cartItem) => cartItem.meal.id === item.id);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-xs w-full">
          <Eye className="w-3 h-3 mr-1" />
          View
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>{item.name}</DialogTitle>
          </div>
        </DialogHeader>
        <div className="space-y-6">
          <img
            src={generateUrl(item?.image, {
              transformations: {
                crop: "fit",
                quality: 1000,
              },
            })}
            alt={item.name}
            className="w-full rounded-lg object-cover max-h-[200px]"
          />
          <DialogDescription>{item.description}</DialogDescription>
          <div className="text-lg font-bold">₱{item.price}</div>

          <div className="flex gap-2 flex-col md:flex-row">
            {inCart ? (
              <>
                <Button
                  variant={"destructive"}
                  className="text-xs w-full"
                  onClick={() => removeFromCart(inCart.id)}
                >
                  Remove to cart
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="w-full"
                  onClick={() => {
                    addToCart(item);
                    push("/cart");
                  }}
                >
                  Order Now
                </Button>

                <Button
                  className="w-full"
                  variant={"outline"}
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default MealDialog;
