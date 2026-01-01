"use client";

import { Activity } from "react";
import InputForm from "./input-form";
import GuestbookList from "./guestbook-list";
import GuestbookHeader from "./guestbook-header";
import { Separator } from "../ui/separator";
import { UserWithMessages } from "@/db/types";
import { Variants } from "motion/react";
import { useSession } from "@/lib/auth-client";
import { ContainerVariants, ItemVariants } from "../common/page-animation";

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
    </ContainerVariants>
  );
}
