import { userWithMessages } from "@/db/queries/guestbook";
import GuestbookView from "@/components/guestbook/guestbook-view";
import { Metadata } from "next";
import { generateMetadata } from "@/config/meta";

export const metadata: Metadata = generateMetadata("/guestbook");

export default async function GuestbookPage() {
  return <GuestbookView messages={await userWithMessages()} />;
}
