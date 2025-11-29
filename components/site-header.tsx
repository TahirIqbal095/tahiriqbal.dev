import ToggleTheme from "./toggle-theme";

export default function SiteHeader() {
  return (
    <nav className="flex items-center justify-between border-b py-2">
      <div className="border-2 border-primary px-3 py-1">
        <h1 className="font-bold text-base">T</h1>
      </div>
      <ToggleTheme />
    </nav>
  );
}
