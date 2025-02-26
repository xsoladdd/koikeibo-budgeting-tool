"use client";
import { NextPage } from "next";
import { useFoodStore } from "./context/useFoodContext";
import { useGetCategorizedMealQuery } from "@/graphql/generated";
import PageLoading from "./Components/PageLoading";
import MealList from "./Components/MealList";
import React from "react";
import dynamic from "next/dynamic";

// const DynamicMeaLList = dynamic(() => import("./Components/MealList"), {
//   loading: () => <p>Loading...</p>,
// });
// Mock data for food items

const page: NextPage<{}> = ({}) => {
  const { categorizedMeals, setCategorizedMeals } = useFoodStore();
  const { loading } = useGetCategorizedMealQuery({
    ssr: false,
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      setCategorizedMeals(
        data.categories.map(({ id, meals, name }) => ({
          category: name,
          meals: [...meals],
        }))
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-rose-600">
        Our Menu
      </h1>
      {loading && <PageLoading />}
      {!loading && categorizedMeals.length === 0 && (
        <p>No meals available for the mean time</p>
      )}
      {!loading &&
        [...categorizedMeals].map(({ category, meals }) => (
          <section key={category} className="mb-8 ">
            <h2 className="text-2xl font-semibold mb-4 capitalize text-rose-600 ">
              {category}
            </h2>
            <div className="flex gap-4 overflow-x-auto flex-wrap justify-center md:justify-start">
              <React.Suspense fallback={<div>Loading meals...</div>}>
                <MealList meals={meals} />
              </React.Suspense>
            </div>
          </section>
        ))}
    </div>
  );
};
export default page;
