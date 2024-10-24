import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: [
    "./src/db/schemas/tweet.schema.ts",
    "./src/db/schemas/user.schema.ts",
    "./src/db/schemas/users_follows.schema.ts",
    "./src/db/schemas/users_liked_tweets.ts",
    "./src/db/schemas/conversations.schema.ts",
    "./src/db/schemas/messages.schema.ts",
  ],
  out: "",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.twitter_DB_HOST!,
    user: process.env.twitter_DB_USER!,
    password: process.env.twitter_DB_PASSWORD!,
    database: process.env.twitter_DB_DATABASE!,
    port: parseInt(process.env.twitter_DB_PORT!),
    ssl: true,
  },
  verbose: true,
  tablesFilter: [`${process.env.twitter_DB_PREFIX!}_.*`],
  strict: true,
});
