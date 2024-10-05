import { find } from "@/repositories/tweets.repository";

export const getTweets = async () => {
  const tweets = await find();

  return tweets;
};
