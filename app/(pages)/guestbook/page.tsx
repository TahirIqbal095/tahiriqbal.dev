import { Separator } from "@/components/ui/separator";
import Header from "@/components/guestbook/guestbook-header";
import { userWithMessages } from "@/db/queries/guestbook";
import GuestbookList from "@/components/guestbook/guestbook-list";
import { Activity } from "react";

export default async function GuestbookPage() {
  const userMessges = await userWithMessages();
  return (
    <div className="space-y-8 md:space-y-10">
      <Header />
      <section className="mx-auto max-w-2xl space-y-8 md:space-y-10">
        <Separator />
        <Activity mode={userMessges.length ? "visible" : "hidden"}>
          <GuestbookList messages={userMessges} />
        </Activity>
      </section>
    </div>
  );
}
