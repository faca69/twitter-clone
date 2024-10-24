import ComposeTweet from "@/components/ComposeTweet";
import { getTweets } from "../../../services/tweets.service";
import Tweets from "@/components/Tweets";

export default async function Following() {
  const tweets = await getTweets();

  return (
    <div>
      <ComposeTweet />
      <Tweets tweets={tweets} />
    </div>
  );
}
