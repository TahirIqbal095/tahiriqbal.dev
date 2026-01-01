"use client";

import { signOut, useSession } from "@/lib/auth-client";
import PageHeading from "../common/page-heading";
import GoogleLoginButton from "./login-button";
import { Button } from "../ui/button";
import { guestbookConfig } from "@/config/guestbook";

export default function GuestbookHeader() {
  const { data } = useSession();
  return (
    <section className="mx-auto max-w-2xl space-y-4 text-center">
      <PageHeading
        title={guestbookConfig.title}
        description={guestbookConfig.description}
      />
      <div className="flex items-center justify-center gap-3">
        {data?.session ? (
          <Button onClick={() => signOut()} variant={"outline"}>
            Logout
          </Button>
        ) : (
          <GoogleLoginButton />
        )}
      </div>
    </section>
  );
}
