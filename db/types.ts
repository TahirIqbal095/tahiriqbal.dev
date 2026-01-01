import { userMessages } from "./schema";

export type UserWithMessages = {
  name: string;
  image: string | null;
  createdAt: Date;
  userMessages: {
    message: string;
  };
};

export type UserMessage = typeof userMessages.$inferSelect;
export type NewUserMessage = typeof userMessages.$inferInsert;
