import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for tahiriqbal.dev",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl">
      <div className="mb-8">
        <Button
          variant="ghost"
          asChild
          className="text-muted-foreground hover:text-primary pl-0 hover:bg-transparent"
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </Button>
      </div>

      <div className="mb-10 flex items-center gap-4">
        <div className="bg-primary/10 text-primary rounded-xl p-3">
          <Shield className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">
            Last updated: January 1, 2026
          </p>
        </div>
      </div>

      <article className="prose prose-neutral dark:prose-invert prose-headings:scroll-mt-20 prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none px-2">
        <h2>Overview</h2>
        <p>
          This website (tahiriqbal.dev) is a personal portfolio. Your privacy is
          important, and this policy explains what information is collected and
          how it is used.
        </p>

        <h2>Information We Collect</h2>
        <h3>Authentication Data</h3>
        <p>
          When you sign in using Google OAuth to leave a message in the
          guestbook, we collect:
        </p>
        <ul>
          <li>Your name (as provided by Google)</li>
          <li>Your email address</li>
          <li>Your profile picture URL</li>
        </ul>

        <h3>Guestbook Messages</h3>
        <p>
          If you choose to leave a message in the guestbook, that message is
          stored along with your name and profile picture.
        </p>

        <h2>How We Use Your Information</h2>
        <p>Your information is used solely to:</p>
        <ul>
          <li>
            Display your name and profile picture next to your guestbook
            messages
          </li>
          <li>Authenticate your identity when signing guestbook entries</li>
        </ul>

        <h2>Data Deletion</h2>
        <p>
          If you would like your data to be deleted, please contact me at{" "}
          <a href="mailto:shahtahir786@gmail.com">shahtahir786@gmail.com</a>,
          and I will remove your information promptly.
        </p>

        <h2>Cookies</h2>
        <p>
          This site uses essential cookies for authentication purposes only. No
          tracking or advertising cookies are used.
        </p>

        <h2>Third-Party Services</h2>
        <p>This website uses:</p>
        <ul>
          <li>
            <strong>Google OAuth</strong> — for authentication. Google&apos;s
            privacy policy can be found at{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
          </li>
          <li>
            <strong>Vercel</strong> — for hosting. Vercel&apos;s privacy policy
            can be found at{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com/legal/privacy-policy
            </a>
          </li>
        </ul>

        <h2>Changes to This Policy</h2>
        <p>
          This privacy policy may be updated occasionally. Any changes will be
          reflected on this page with an updated date.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this privacy policy, please contact me
          at <a href="mailto:shahtahir786@gmail.com">shahtahir786@gmail.com</a>.
        </p>
      </article>
    </div>
  );
}
