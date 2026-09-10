import { useCallback, useState } from "react";

export const gfColors = {
  bg: "#1B222D",
  surface: "#242C3A",
  border: "#333D4D",
  teal: "#2FA8C0",
  lime: "#8FD14F",
  green: "#7BC943",
  text: "#FFFFFF",
  textMuted: "#A7B0BD",
};

export type GfColors = typeof gfColors;

export function useThemeColors(): GfColors {
  return gfColors;
}

export function useTheme() {
  const [scheme, setScheme] = useState<"light" | "dark">("dark");
  const toggleScheme = useCallback(() => {
    setScheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);
  return { scheme, toggleScheme };
}