import { GetCategorizedMealQuery } from "@/graphql/generated";
import generateRandomId from "@/lib/randomId";
import Cookies from "js-cookie";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type mealType = GetCategorizedMealQuery["categories"][0]["meals"][0] & {
  isFavorite?: boolean;
};

export interface cartItemType {
  id: string;
  meal: mealType;
  quantity: number;
}
export interface categorizedMeals {
  category: string;
  meals: mealType[];
}

interface FoodState {
  categorizedMeals: categorizedMeals[];
  cart: cartItemType[];
  setCategorizedMeals: (meals: categorizedMeals[]) => void;
  addToCart: (meal: mealType) => void;
  removeFromCart: (id: string) => void;
  emptyCart: () => void;
  changeQuantity: (id: string, quantity: number) => void;
  toggleFavorite: (mealTypeId: number) => void;
}

// Use the combined interface in the create function
// const cookieStorage = {
//   getItem: (name: string) => {
//     const value = Cookies.get(name);
//     return value ? JSON.parse(value) : null;
//   },
//   setItem: (name: string, value: any) => {
//     const now = new Date();
//     const expires = new Date();
//     expires.setHours(23, 0, 0, 0); // Set expiration to 11 PM today
//     if (now.getHours() >= 23) {
//       expires.setDate(expires.getDate() + 1); // If it's already past 11 PM, set expiration to 11 PM tomorrow
//     }
//     Cookies.set(name, JSON.stringify(value), { expires });
//   },
//   removeItem: (name: string) => {
//     Cookies.remove(name);
//   },
// };

export const useFoodStore = create<FoodState>()(
  persist(
    (set) => ({
      categorizedMeals: [],
      cart: [],
      emptyCart: () =>
        set((state) => {
          return {
            ...state,
            cart: [],
          };
        }),
      addToCart: (meal) =>
        set((state) => {
          const randomid = generateRandomId();
          return {
            ...state,
            cart: [...state.cart, { id: randomid, meal, quantity: 1 }],
          };
        }),
      setCategorizedMeals: (meals) => set({ categorizedMeals: meals }),
      removeFromCart: (id) =>
        set((state) => ({
          ...state,
          cart: state.cart.filter((item) => item.id !== id),
        })),
      changeQuantity: (id, quantity) =>
        set((state) => ({
          ...state,
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),
      toggleFavorite(mealTypeId) {
        set((state) => {
          const updatedMeals = state.categorizedMeals.map((category) => {
            return {
              category: category.category,
              meals: category.meals.map((meal) =>
                meal.id === mealTypeId
                  ? { ...meal, isFavorite: !meal.isFavorite }
                  : meal
              ),
            };
          });
          return {
            ...state,
            categorizedMeals: updatedMeals,
          };
        });
      },
    }),
    {
      name: "food-context",
      partialize: (state) => ({ cart: state.cart }),
      // storage: cookieStorawwwge,
    }
  )
);
export default useFoodStore;
