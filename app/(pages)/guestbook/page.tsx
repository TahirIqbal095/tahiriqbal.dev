import { userWithMessages } from "@/db/queries/guestbook";
import GuestbookView from "@/components/guestbook/guestbook-view";

export default async function GuestbookPage() {
  return <GuestbookView messages={await userWithMessages()} />;
}
