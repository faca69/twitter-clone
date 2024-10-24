import ComposeTweet from "@/components/ComposeTweet";
import { getTweets } from "../../../services/tweets.service";
import Tweets from "@/components/Tweets";

const dynamic = "force-dynamic";

export default async function ForYou() {
  const tweets = await getTweets();

  return (
    <div>
      <ComposeTweet />
      <Tweets tweets={tweets} />
    </div>
  );
}
