"use client";

import GoogleLoginButton from "@/components/goolge-login-button";
import { signOut } from "@/lib/auth-client";

export default function GuestbookPage() {
  return (
    <div>
      <h1>Guestbook</h1>
      <GoogleLoginButton />
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
