import Logo from "./logo";
import { ThemeToggleButton } from "@/components/toggle-theme";

export default function SiteHeader() {
  return (
    <nav className="fixed max-w-7xl mx-auto backdrop-blur   z-50 px-2 top-0 left-0 right-0 flex items-center justify-between border-b py-2">
      <Logo />
      <ThemeToggleButton start="top-right" />
    </nav>
  );
}
