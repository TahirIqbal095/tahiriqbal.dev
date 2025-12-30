import SignGuestbook from "@/components/guestbook/guestbook-list";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/guestbook/guestbook-header";

const messages = [
  {
    user: "John Doe",
    message: "This is a great guestbook!",
    date: "2023-10-01T12:00:00Z",
  },
  {
    user: "Alice Smith",
    message: "Loved the site — very clean design.",
    date: "2023-10-02T09:15:00Z",
  },
  {
    user: "Carlos Reyes",
    message: "Great content and easy to navigate.",
    date: "2023-10-03T14:30:00Z",
  },
  {
    user: "Emily Chen",
    message: "Thanks for sharing these resources!",
    date: "2023-10-04T18:45:00Z",
  },
  {
    user: "Mohammed Ali",
    message: "Impressive work — keep it up!",
    date: "2023-10-05T11:20:00Z",
  },
  {
    user: "Sofia Martinez",
    message: "Found the blog posts very helpful.",
    date: "2023-10-06T16:05:00Z",
  },
  {
    user: "Liam O'Connor",
    message: "Nice project, excited to see more updates.",
    date: "2023-10-07T08:50:00Z",
  },
  {
    user: "Yuki Tanaka",
    message: "The UI is delightful and responsive.",
    date: "2023-10-08T13:10:00Z",
  },
  {
    user: "Oliver Brown",
    message: "Great job on the portfolio!",
    date: "2023-10-09T10:00:00Z",
  },
  {
    user: "Priya Patel",
    message: "Very inspiring — bookmarked for later.",
    date: "2023-10-10T19:25:00Z",
  },
  {
    user: "Noah Wilson",
    message: "Clean code and useful examples. Thanks!",
    date: "2023-10-11T07:40:00Z",
  },
  {
    user: "Ava Thompson",
    message: "Beautiful typography and spacing — great attention to detail.",
    date: "2023-10-12T09:05:00Z",
  },
  {
    user: "Mateo García",
    message: "Helpful tutorials, especially the React hooks guide.",
    date: "2023-10-13T15:30:00Z",
  },
  {
    user: "Hannah Müller",
    message: "Smooth animations and thoughtful UX choices.",
    date: "2023-10-14T12:20:00Z",
  },
  {
    user: "Zara Khan",
    message: "Appreciate the accessibility considerations throughout.",
    date: "2023-10-15T17:45:00Z",
  },
  {
    user: "Ethan Patel",
    message: "Looking forward to future posts — great start!",
    date: "2023-10-16T08:10:00Z",
  },
];

export default function GuestbookPage() {
  return (
    <div className="space-y-8 md:space-y-10">
      <Header />
      <section className="mx-auto max-w-2xl space-y-8 md:space-y-10">
        <Separator />
        <SignGuestbook messages={messages} />
      </section>
    </div>
  );
}
