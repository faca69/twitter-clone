"use client";

import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Tweet } from "../../types/tweet.interface";
import TweetCard from "@/components/TweetCard";

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    console.log("Search term has changed", searchTerm);

    fetch(`http://localhost:3000/api/tweets?searchTerm=${searchTerm}`)
      .then((res) => res.json())
      .then((tweetsResponse) => setTweets(tweetsResponse));
  }, [searchTerm]);

  return (
    <div>
      <div className="p-4">
        <Input
          placeholder="Search..."
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {tweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}
