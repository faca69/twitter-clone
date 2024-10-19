import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: [
    "./src/db/schemas/tweet.schema.ts",
    "./src/db/schemas/user.schema.ts",
    "./src/db/schemas/users_follows.schema.ts",
    "./src/db/schemas/users_liked_tweets.ts",
  ],
  out: "",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.X_DB_HOST!,
    user: process.env.X_DB_USER!,
    password: process.env.X_DB_PASSWORD!,
    database: process.env.X_DB_DATABASE!,
    port: parseInt(process.env.X_dB_PORT!),
    ssl: true,
  },
  verbose: true,
  tablesFilter: [`${process.env.X_DB_PREFIX!}_.*`],
  strict: true,
});
