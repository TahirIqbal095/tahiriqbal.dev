import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      themes={["light", "dark"]}
    >
      {children}
    </NextThemeProvider>
  );
}
