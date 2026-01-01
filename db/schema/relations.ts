import { relations } from "drizzle-orm";
import { userMessages } from "./user-messages";
import { account, session, user } from "./auth-schema";

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
  userMessages: many(userMessages),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const userMessagesRelations = relations(userMessages, ({ one }) => ({
  user: one(user, {
    fields: [userMessages.userId],
    references: [user.id],
  }),
}));
