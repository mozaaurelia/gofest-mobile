import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

export type ColorScheme = "light" | "dark";
export type GfColors = {
  bg: string;
  surface: string;
  border: string;
  teal: string;
  lime: string;
  green: string;
  text: string;
  textMuted: string;
  danger: string;
};

export const darkColors: GfColors = {
  bg: "#1C1C1E",
  surface: "#242426",
  border: "#3A3A3C",
  teal: "#2FA8C0",
  lime: "#8FD14F",
  green: "#7BC943",
  text: "#FFFFFF",
  textMuted: "#9A9A9E",
  danger: "#FF5A5F",
};

export const lightColors: GfColors = {
  bg: "#F5F5F7",
  surface: "#FFFFFF",
  border: "#E3E3E6",
  teal: "#2FA8C0",
  lime: "#8FD14F",
  green: "#7BC943",
  text: "#1C1C1E",
  textMuted: "#6E6E73",
  danger: "#FF3B30",
};

type ThemeContextValue = {
  scheme: ColorScheme;
  colors: GfColors;
  toggleScheme: () => void;
  setScheme: (s: ColorScheme) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  scheme: "dark",
  colors: darkColors,
  toggleScheme: () => {},
  setScheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [scheme, setSchemeState] = useState<ColorScheme>("dark");

  const setScheme = useCallback((s: ColorScheme) => setSchemeState(s), []);
  const toggleScheme = useCallback(
    () => setSchemeState((prev) => (prev === "dark" ? "light" : "dark")),
    []
  );

  const value = useMemo<ThemeContextValue>(
    () => ({
      scheme,
      colors: scheme === "dark" ? darkColors : lightColors,
      toggleScheme,
      setScheme,
    }),
    [scheme, toggleScheme, setScheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeColors(): GfColors {
  return useContext(ThemeContext).colors;
}