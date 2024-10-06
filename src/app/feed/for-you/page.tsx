import ComposeTweet from "@/components/ComposeTweet";
import Tweets from "@/components/Tweets";
import { getTweets } from "@/services/tweets.service";
import React from "react";
import { Tweet as ITweet } from "@/types/tweet.interface";

export default async function ForYou() {
  const tweets = await getTweets();
  return (
    <div>
      <ComposeTweet />
      <Tweets tweets={tweets as unknown as ITweet[]} />
    </div>
  );
}
