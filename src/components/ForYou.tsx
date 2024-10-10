import ComposeTweet from "./ComposeTweet";
import Tweets from "./Tweets";
import { TWEETS } from "../data/test-data";

export default async function ForYou() {
  return (
    <div>
      <ComposeTweet />
      <Tweets tweets={TWEETS} />
    </div>
  );
}
