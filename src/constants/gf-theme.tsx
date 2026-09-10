import { useCallback, useState } from "react";

export const gfColors = {
  bg: "#FFFFFF",
  surface: "#F7F9FC",
  border: "#E5EAF1",
  teal: "#2FA8C0",
  lime: "#8FD14F",
  green: "#7BC943",
  text: "#10151D",
  textMuted: "#8A94A6",
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