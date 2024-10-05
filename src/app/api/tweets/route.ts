import { getTweets } from "@/services/tweets.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchTerm = req.nextUrl.searchParams?.get("searchTerm");

  const tweets = await getTweets();
  if (!searchTerm) {
    return NextResponse.json(tweets);
  }

  const filteredTweets = tweets.filter((tweet) =>
    tweet.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return NextResponse.json(filteredTweets);
}
