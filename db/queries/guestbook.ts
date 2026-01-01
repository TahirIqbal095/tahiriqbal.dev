import { userMessages } from "@/db/schema/user-messages";
import { db } from "..";
import { asc } from "drizzle-orm";
import { UserMessage, UserWithMessages } from "../types";

export const getAllUserMessages = async (): Promise<UserMessage[]> => {
  try {
    const messages: UserMessage[] = await db
      .select()
      .from(userMessages)
      .orderBy(asc(userMessages.createdAt));

    return messages;
  } catch (error) {
    console.error("Error fetching user messages:", error);
    throw error;
  }
};

export const addUserMessage = async (
  userId: string,
  message: string
): Promise<{ id: string }> => {
  try {
    const [newMessage] = await db
      .insert(userMessages)
      .values({
        userId,
        message,
      })
      .returning({ id: userMessages.id });

    return newMessage;
  } catch (error) {
    console.error("Error adding user message:", error);
    throw error;
  }
};

export const userWithMessages = async (): Promise<UserWithMessages[]> => {
  try {
    const result = await db.query.user.findMany({
      columns: {
        name: true,
        image: true,
        createdAt: true,
      },
      with: {
        userMessages: {
          columns: {
            message: true,
          },
        },
      },
    });

    console.log(result);

    return result.flatMap((user) =>
      user.userMessages.map((msg) => ({
        name: user.name,
        image: user.image,
        createdAt: user.createdAt,
        userMessages: {
          message: msg.message,
        },
      }))
    );
  } catch (error) {
    console.log("Error fetch user with messages", error);
    throw error;
  }
};
