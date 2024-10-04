import { TweetType } from "@/types/tweet-type.enum";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const tweets = pgTable("tweets", {
  id: uuid("id").primaryKey().defaultRandom(),
  text: varchar("text", { length: 280 }).notNull(),
  type: varchar("type", {
    enum: [TweetType.Tweet, TweetType.Repost, TweetType.Reply],
  })
    .default(TweetType.Tweet)
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type TweetModel = InferSelectModel<typeof tweets>;
export type TweetCreateModel = InferInsertModel<typeof tweets>;
