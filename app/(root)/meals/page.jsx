import React from "react";
import Link from "next/link";
import Mealsgrid from "@/components/static/meals/meals-grid";
import classes from "@/app/(root)/meals/page.module.css";

const MealsPage = () => {
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
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share Your Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Mealsgrid meals={[]} />
      </main>
    </>
  );
};

export default MealsPage;
