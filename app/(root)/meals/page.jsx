import React, { Suspense } from "react";
import Mealsgrid from "@/components/static/meals/meals-grid";
import classes from "@/app/(root)/meals/page.module.css";
import { getMeals } from "@/lib/meals";
import susclasses from "@/app/(root)/meals/loading.module.css";

const MealsthroughDB = async () => {
  const data = await getMeals();
  return <Mealsgrid meals={data} />;
};

const LoadMeals = () => (
  <h2 className={susclasses.loading}>Loading Meals...</h2>
);

const MealsPage = async () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals,created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
      </header>
      <Suspense fallback={<LoadMeals />}>
        <main className={classes.main}>
          <MealsthroughDB />
        </main>
      </Suspense>
    </>
  );
};

export default MealsPage;
