import { userMessages } from "./schema";

export type UserWithMessages = {
  message: string;
  createdAt: Date;
  user: {
    name: string;
    image: string | null;
  };
};

export type UserMessage = typeof userMessages.$inferSelect;
export type NewUserMessage = typeof userMessages.$inferInsert;
