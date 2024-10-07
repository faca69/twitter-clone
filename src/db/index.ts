import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { tweets, tweetsRelations } from "./schemas/tweet.schema";
import { users } from "./schemas/user.schema";

const client = postgres({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "twitter_clone",
  port: 5432,
});

export const db = drizzle<{
  tweets: typeof tweets;
  users: typeof users;
  tweetsRelations: typeof tweetsRelations;
}>(client, {
  schema: {
    tweets,
    users,
    tweetsRelations,
  },
  logger: true,
});

export type Db = typeof db;
