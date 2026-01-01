"use server";

import { addUserMessage } from "@/db/queries/guestbook";
import { revalidatePath } from "next/cache";

export async function addGuestbookEntry(
  currentState: unknown,
  formData: FormData
) {
  const data = (formData.get("message") as string) || null;
  const userId = (formData.get("userId") as string) || null;
  if (!data?.trim()) {
    return { error: "please provide the message" };
  }
  if (!userId) {
    return { error: "user id not found, this is unusual" };
  }
  await addUserMessage(userId, data);
  revalidatePath("/guestbook");
  return { message: "message added" };
}
