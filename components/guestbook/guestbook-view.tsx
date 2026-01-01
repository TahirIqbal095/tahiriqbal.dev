"use client";

import { Activity } from "react";
import InputForm from "./input-form";
import GuestbookList from "./guestbook-list";
import GuestbookHeader from "./guestbook-header";
import { Separator } from "../ui/separator";
import { UserWithMessages } from "@/db/types";
import { motion, Variants } from "motion/react";
import { useSession } from "@/lib/auth-client";

export default function GuestbookView({
  messages,
}: {
  messages: UserWithMessages[];
}) {
  const { data } = useSession();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <GuestbookHeader />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Separator />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Activity mode={data?.session ? "visible" : "hidden"}>
          <InputForm />
        </Activity>
      </motion.div>

      <motion.div variants={itemVariants}>
        {messages.length && <GuestbookList messages={messages} />}
      </motion.div>
    </motion.section>
  );
}
