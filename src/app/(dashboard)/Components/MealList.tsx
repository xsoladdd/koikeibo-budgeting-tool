import React from "react";
import { mealType } from "../context/useFoodContext";
import MealCard from "./MealCard";

interface IMealListProps {
  meals: mealType[];
}

const MealList: React.FC<IMealListProps> = ({ meals }) => {
  return (
    <>
      {meals.map((item, idx) => (
        <MealCard item={item} key={idx} />
      ))}
    </>
  );
};
export default MealList;
