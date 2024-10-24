import { getNextServerSession } from "@/lib/next-auth";
import Link from "next/link";

export default async function Messages() {
  const session = await getNextServerSession();
  const conversations = await getConversations();
  return (
    <div>
      <div>
        <Link href={"/messages/new"}>New Message</Link>
      </div>
    </div>
  );
}
