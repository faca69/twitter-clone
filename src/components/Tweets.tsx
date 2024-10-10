import { TweetExtendedModel } from "../db/schemas/tweet.schema";
import TweetCard from "./TweetCard";

type TweetsProps = {
  tweets: TweetExtendedModel[];
};

export default function Tweets({ tweets }: TweetsProps) {
  return (
    <div>
      {tweets.map((tweet) => (
        <>
          <TweetCard key={tweet.id} tweet={tweet} />
        </>
      ))}
    </div>
  );
}
