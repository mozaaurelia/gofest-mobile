import React, { useEffect, useState } from "react";
import { Stack, useRouter, useRootNavigationState } from "expo-router";
import AnimatedSplashScreen from "../components/animated-splash-screen";
import { ThemeProvider } from "../constants/gf-theme";
import { I18nProvider } from "../constants/i18n";
import { SavedTicketsProvider } from "../hooks/use-saved-tickets";

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    // Tunggu sampai navigator beneran siap sebelum navigasi
    if (!navigationState?.key) return;
    if (!showSplash) {
      router.replace("/onboarding");
    }
  }, [navigationState?.key, showSplash]);

  return (
    <ThemeProvider>
      <I18nProvider>
        <SavedTicketsProvider>
          <Stack screenOptions={{ headerShown: false }} />
          {showSplash && (
            <AnimatedSplashScreen onFinish={() => setShowSplash(false)} />
          )}
        </SavedTicketsProvider>
      </I18nProvider>
    </ThemeProvider>
  );
} 