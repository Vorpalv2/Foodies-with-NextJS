import classes from "@/app/(root)/meals/[slug]/mealShare.module.css";
import React from "react";
import Image from "next/image";
import { getMeal } from "@/lib/meals";

const CustomIDPage = ({ params }) => {
  const meal = getMeal(params.slug);

  meal.instructions = meal.instructions.replace(/\n/g, `<br />`);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={params.slug} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal?.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default CustomIDPage;
