import { getUserByUsername } from "@/services/users.service";
import React from "react";

type ProfileProps = {
  params: { username: string };
};

export default async function Profile({ params: { username } }: ProfileProps) {
  const user = await getUserByUsername(username);

  if (!user) {
    return <p>user not found</p>;
  }

  return <div>Profile {username}</div>;
}
