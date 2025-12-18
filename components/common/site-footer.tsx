import { IconWrapper } from "./icon-wrapper";
import { footerData } from "@/config/footer";

export default function SiteFooter() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 border-t px-2 py-2 flex items-center justify-between text-muted-foreground">
      <div className="flex flex-col gap-1 text-xs">
        <p>
          {footerData.title}{" "}
          <a href="https://github.com/tahiriqbal095" target="_blank">
            <span className="text-primary hover:underline font-medium">
              {footerData.name}
            </span>
          </a>
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
      <div className="flex gap-3">
        {footerData.links.map((link, idx) => (
          <a key={idx} href={link.href} target="_blank">
            <IconWrapper>{link.icon}</IconWrapper>
          </a>
        ))}
      </div>
    </footer>
  );
}
