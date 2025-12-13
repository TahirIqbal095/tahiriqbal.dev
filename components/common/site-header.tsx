import Logo from "./logo";
import { ThemeToggleButton } from "@/components/toggle-theme";

export default function SiteHeader() {
  return (
    <nav className="flex items-center justify-between border-b py-2">
      <Logo />
      <ThemeToggleButton start="top-right" />
    </nav>
  );
}
