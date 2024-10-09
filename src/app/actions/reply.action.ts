import { TweetCreateModel } from "@/db/schemas/tweet.schema";
import { TweetType } from "@/types/tweet-type.enum";

export async function submitReply(formData: FormData) {
  const text = formData.get("text") as string;
  const repliedToId = formData.get("repliedToId") as string;

  const tweet: TweetCreateModel = {
    text,
    type: TweetType.Reply,
    repliedToId,
  };
}
