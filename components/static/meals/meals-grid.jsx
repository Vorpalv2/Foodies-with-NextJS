import MealItem from "./meals-item";
import classes from "@/components/static/meals/meals-grid.module.css";
import React from "react";

const Mealsgrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
};

export default Mealsgrid;
