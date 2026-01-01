"use client";

import { Activity } from "react";
import InputForm from "./input-form";
import GuestbookList from "./guestbook-list";
import GuestbookHeader from "./guestbook-header";
import { Separator } from "../ui/separator";
import { UserWithMessages } from "@/db/types";
import { useSession } from "@/lib/auth-client";
import { ContainerVariants, ItemVariants } from "../common/page-animation";
import QuoteCard from "../common/quote-card";
import { guestbookConfig } from "@/config/guestbook";

export default function GuestbookView({
  messages,
}: {
  messages: UserWithMessages[];
}) {
  const { data } = useSession();
  return (
    <ContainerVariants className="space-y-8">
      <ItemVariants>
        <GuestbookHeader />
      </ItemVariants>

      <ItemVariants>
        <Separator />
      </ItemVariants>

      <ItemVariants>
        <Activity mode={data?.session ? "visible" : "hidden"}>
          <InputForm />
        </Activity>
      </ItemVariants>

      <ItemVariants>
        {messages.length && <GuestbookList messages={messages} />}
      </ItemVariants>

      <ItemVariants>
        <QuoteCard
          quote={guestbookConfig.quote.q}
          author={guestbookConfig.quote.author}
        />
      </ItemVariants>
    </ContainerVariants>
  );
}
