"use client";

import { cn } from "@/lib/utils";
import {
  AcademicCapIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import {
  EnvelopeIcon as EnvelopeIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <ol className="flex flex-col gap-3 py-2 h-full">
      <li>
        <Link href="/" className="flex items-center gap-2">
          <AcademicCapIcon className="size-10 mb-5" />
        </Link>
      </li>
      <li>
        <Link
          href="/explore"
          className={cn(
            "flex items-center gap-2 font-medium",
            pathname === "/explore" ? "font-bold" : "font-medium"
          )}
        >
          <MagnifyingGlassIcon className="size-10" />
          Explore
        </Link>
      </li>
      <li>
        <Link
          href="/messages"
          className={cn(
            "flex items-center gap-2",
            pathname === "/messages" ? "font-bold" : "font-medium"
          )}
        >
          {pathname === "/messages" ? (
            <EnvelopeIconSolid className="size-10" />
          ) : (
            <EnvelopeIcon className="size-10" />
          )}
          Messages
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={cn(
            "flex items-center gap-2 font-medium",
            pathname === "/profile" ? "font-bold" : "font-medium"
          )}
        >
          {pathname === "/profile" ? (
            <UserIconSolid className="size-10" />
          ) : (
            <UserIcon className="size-10" />
          )}
          Profile
        </Link>
      </li>

      <Link
        href={"/feed/compose"}
        className="w-full bg-blue-500 p-4 rounded-full text-center font-bold cursor-pointer block"
      >
        Post
      </Link>
    </ol>
  );
}
