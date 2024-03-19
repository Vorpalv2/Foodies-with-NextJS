import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  // throw new Error("something went wrong");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(id) {
  return db.prepare("SELECT * FROM meals WHERE slug == ?").get(id);
}
