import { db } from "@/db";
import { TweetModel, tweets } from "@/db/schemas/tweet.schema";
import { ilike } from "drizzle-orm";

export const find = async (
  searchTerm: string | null
): Promise<TweetModel[]> => {
  try {
    return db.query.tweets.findMany({
      where: ilike(tweets.text, `%${searchTerm}%`),
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};
