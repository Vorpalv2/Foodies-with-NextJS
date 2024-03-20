"use server";

import { saveData } from "../meals";

export const handleMealsForm = async (formdata) => {
  console.log("running through handlemealsform server action");
  const mealFormData = {
    creator: formdata.get("name"),
    creator_email: formdata.get("email"),
    title: formdata.get("title"),
    summary: formdata.get("summary"),
    instructions: formdata.get("instructions"),
    image: formdata.get("image"),
  };
  await saveData(mealFormData);
};
