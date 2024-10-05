import { Tweet as ITweet } from "../types/tweet.interface";
import TweetCard from "./TweetCard";

type TweetsProps = {
  tweets: ITweet[];
};

export default function Tweets({ tweets }: TweetsProps) {
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}
