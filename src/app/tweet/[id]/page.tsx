import { getTweetById } from "@/services/tweets.service";
import { Tweet as ITweet } from "../../../types/tweet.interface";
import TweetCard from "@/components/TweetCard";

type TweetDetailsProps = {
  params: { id: string };
};

export default async function TweetDetails({
  params: { id },
}: TweetDetailsProps) {
  const tweet = await getTweetById(id);
  return <TweetCard tweet={tweet as unknown as ITweet} />;
}
