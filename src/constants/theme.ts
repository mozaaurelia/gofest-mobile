/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#000000',
    background: '#ffffff',
    backgroundElement: '#F0F0F3',
    backgroundSelected: '#E0E1E6',
    textSecondary: '#60646C',
  },
  dark: {
    text: '#ffffff',
    background: '#000000',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    textSecondary: '#B0B4BA',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

/**
 * Font weight scale for the whole app.
 * Basier Circle only ships Regular / Medium / SemiBold / Bold —
 * we stay within these four so the app feels cohesive, not scattered.
 */
export const FontWeights = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

/**
 * Typography system — single source of truth for every text style.
 * Import { Typography } and spread it into a style: { ...Typography.h2, color: c.text }
 *
 * Fallback font: system font closest to Basier Circle.
 * iOS renders SF Pro; enabling the "Rounded" system design or bundling a
 * custom font (e.g. Basier Circle) can be swapped in by changing `fontFamily`
 * below in one place.
 */
const fontFamily = Platform.select({
  ios: "System",
  web: "var(--font-display)",
  default: "sans-serif",
}) as string;

export const Typography = {
  display: { fontFamily, fontSize: 28, lineHeight: 34, fontWeight: FontWeights.bold, letterSpacing: -0.3 },
  h1: { fontFamily, fontSize: 24, lineHeight: 30, fontWeight: FontWeights.bold, letterSpacing: -0.2 },
  h2: { fontFamily, fontSize: 20, lineHeight: 26, fontWeight: FontWeights.bold, letterSpacing: -0.2 },
  h3: { fontFamily, fontSize: 18, lineHeight: 24, fontWeight: FontWeights.semibold, letterSpacing: -0.2 },
  title: { fontFamily, fontSize: 17, lineHeight: 22, fontWeight: FontWeights.bold },
  titleSmall: { fontFamily, fontSize: 14, lineHeight: 19, fontWeight: FontWeights.semibold },
  body: { fontFamily, fontSize: 14, lineHeight: 20, fontWeight: FontWeights.regular },
  bodyMedium: { fontFamily, fontSize: 14, lineHeight: 20, fontWeight: FontWeights.medium },
  bodySmall: { fontFamily, fontSize: 13, lineHeight: 18, fontWeight: FontWeights.regular },
  label: { fontFamily, fontSize: 12, lineHeight: 16, fontWeight: FontWeights.medium },
  caption: { fontFamily, fontSize: 11, lineHeight: 15, fontWeight: FontWeights.regular },
  micro: { fontFamily, fontSize: 10, lineHeight: 13, fontWeight: FontWeights.medium },
  input: { fontFamily, fontSize: 14, lineHeight: 20, fontWeight: FontWeights.regular },
  button: { fontFamily, fontSize: 15, lineHeight: 20, fontWeight: FontWeights.semibold },
  buttonSmall: { fontFamily, fontSize: 13, lineHeight: 18, fontWeight: FontWeights.semibold },
  tab: { fontFamily, fontSize: 13, lineHeight: 18, fontWeight: FontWeights.semibold },
  price: { fontFamily, fontSize: 15, lineHeight: 20, fontWeight: FontWeights.bold, letterSpacing: -0.2 },
  priceLarge: { fontFamily, fontSize: 18, lineHeight: 24, fontWeight: FontWeights.bold, letterSpacing: -0.2 },
  ticketNumber: { fontFamily, fontSize: 12, lineHeight: 16, fontWeight: FontWeights.semibold, letterSpacing: 0.5 },
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
