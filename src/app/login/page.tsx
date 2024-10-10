import React from "react";
import LoginForm from "./form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  } else {
    redirect("/feed/for-you");
  }

  return <LoginForm />;
}
