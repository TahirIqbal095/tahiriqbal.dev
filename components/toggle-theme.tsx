"use client"

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "./ui/button";

function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
    {theme === "light" ? <SunIcon /> : <MoonIcon />}
  </Button>


}
export default ToggleTheme;