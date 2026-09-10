import React, { useEffect, useState } from "react";
import { Stack, useRouter, useRootNavigationState } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import AnimatedSplashScreen from "../components/animated-splash-screen";
import { SavedTicketsProvider } from "../hooks/use-saved-tickets";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    SplashScreen.hideAsync(); // native splash hilang duluan, secepatnya
  }, []);

  useEffect(() => {
    if (!navigationState?.key) return;
    if (!showSplash) {
      router.replace("/onboarding");
    }
  }, [navigationState?.key, showSplash]);

  return (
    <SavedTicketsProvider>
      <Stack screenOptions={{ headerShown: false }} />
      {showSplash && <AnimatedSplashScreen onFinish={() => setShowSplash(false)} />}
    </SavedTicketsProvider>
  );
}