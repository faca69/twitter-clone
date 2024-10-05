import { db } from "@/db";

export const find = () => {
  return db.query.tweets.findMany();
};
