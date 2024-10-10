import { Input } from "@/components/ui/input";
import React from "react";

export default function Login() {
  return (
    <form className="flex flex-col gap-4 items-center p-4">
      <h1 className="text-2xl font-bold">Login </h1>

      <Input
        placeholder="@johnnydoe"
        type="text"
        name="username"
        className="w-72"
      />
      <Input
        placeholder="password"
        type="password"
        name="password"
        className="w-72"
      />

      <button
        type="submit"
        className="bg-blue-400 rounded-md px-4 py-2 text-white w-24"
      >
        Login
      </button>
    </form>
  );
}
