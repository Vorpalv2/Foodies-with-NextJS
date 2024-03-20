"use server";

import { redirect } from "next/navigation";
import { saveData } from "../meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export const handleMealsForm = async (formdata) => {
  const mealFormData = {
    creator: formdata.get("name"),
    creator_email: formdata.get("email"),
    title: formdata.get("title"),
    summary: formdata.get("summary"),
    instructions: formdata.get("instructions"),
    image: formdata.get("image"),
  };

  if (
    isInvalidText(formdata.title) ||
    isInvalidText(formdata.summary) ||
    isInvalidText(formdata.instructions) ||
    isInvalidText(formdata.creator) ||
    isInvalidText(formdata.creator_email) ||
    !formdata.creator_email.includes("@") ||
    !formdata.image ||
    formdata.image.size == 0
  ) {
    throw new Error("invalid input");
  }
  await saveData(mealFormData);
  redirect("/meals");
};
