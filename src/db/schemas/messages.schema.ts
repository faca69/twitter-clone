import { pgTableCreator, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { users } from "./user.schema";
import { relations } from "drizzle-orm";

const createTable = pgTableCreator(
  (name) => `${process.env.X_DB_PREFIX!}_${name}`
);

const messages = createTable("messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  text: varchar("text", { length: 280 }).notNull(),
  authorId: uuid("author_id")
    .notNull()
    .references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true }),
});
