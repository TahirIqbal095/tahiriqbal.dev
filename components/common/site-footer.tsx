import Link from "next/link";
import { IconWrapper } from "./icon-wrapper";
import { footerData } from "@/config/footer";

export default function SiteFooter() {
  return (
    <footer className="border-t py-2 flex items-center justify-between text-muted-foreground">
      <div className="flex flex-col gap-1 text-xs">
        <p>
          {footerData.title}{" "}
          <Link href="https://github.com/tahiriqbal095" target="_blank">
            <span className="text-primary hover:underline font-medium">
              {footerData.name}
            </span>
          </Link>
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
      <div className="flex gap-3">
        {footerData.links.map((link) => (
          <Link href={link.href} target="_blank">
            <IconWrapper>{link.icon}</IconWrapper>
          </Link>
        ))}
      </div>
    </footer>
  );
}
