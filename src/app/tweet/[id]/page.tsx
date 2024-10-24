import TweetCard from "@/components/TweetCard";
import { TweetExtendedModel } from "../../../db/schemas/tweet.schema";
import { getTweetById } from "../../../services/tweets.service";
import Tweets from "@/components/Tweets";

type TweetDetailsProps = {
  params: { id: string };
};

export default async function TweetDetails({
  params: { id },
}: TweetDetailsProps) {
  const tweet = await getTweetById(id);

  if (!tweet) {
    return <h1>Tweet not found</h1>;
  }

  return (
    <div>
      <TweetCard tweet={tweet} />
      <Tweets tweets={(tweet.replies as TweetExtendedModel[]) ?? []} />
    </div>
  );
}
