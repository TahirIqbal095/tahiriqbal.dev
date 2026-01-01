import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for tahiriqbal.dev",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert mx-auto max-w-2xl py-12">
      <h1>Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: January 1, 2026</p>

      <h2>Overview</h2>
      <p>
        This website (tahiriqbal.dev) is a personal portfolio. Your privacy is
        important, and this policy explains what information is collected and
        how it is used.
      </p>

      <h2>Information We Collect</h2>
      <h3>Authentication Data</h3>
      <p>
        When you sign in using Google OAuth to leave a message in the guestbook,
        we collect:
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
          Display your name and profile picture next to your guestbook messages
        </li>
        <li>Authenticate your identity when signing guestbook entries</li>
      </ul>

      <h2>Data Storage</h2>
      <p>
        Your data is stored securely in a database. We do not sell, trade, or
        share your personal information with third parties.
      </p>

      <h2>Data Deletion</h2>
      <p>
        If you would like your data to be deleted, please contact me at{" "}
        <a href="mailto:tahiriqbal095@gmail.com">tahiriqbal095@gmail.com</a>,
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
        at <a href="mailto:tahiriqbal095@gmail.com">tahiriqbal095@gmail.com</a>.
      </p>
    </article>
  );
}
