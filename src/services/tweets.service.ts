import { TweetModel } from "@/db/schemas/tweet.schema";
import { find } from "@/repositories/tweets.repository";

export const getTweets = async (
  searchTerm: string | null
): Promise<TweetModel[]> => {
  const tweets = await find(searchTerm);

  return tweets;
};
