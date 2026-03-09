"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ label }: { label?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label={label ?? "Toggle theme"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-9 w-9 rounded-xl border border-[#C6A96B]/40 flex items-center justify-center text-[#C6A96B] hover:bg-[rgba(198,169,107,0.10)] transition"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
