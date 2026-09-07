import React, { useRef, useState } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ONBOARDING_STEPS } from "../constants/onboarding-data";
import OnboardingSlide from "../components/onboarding/onboarding-slide";
import OnboardingProgressBar from "../components/onboarding/onboarding-progress-bar";
import OnboardingNav from "../components/onboarding/onboarding-nav";
import { gfColors } from "../constants/gf-theme";

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<FlatList>(null);

  const isLastStep = activeIndex === ONBOARDING_STEPS.length - 1;

  function goTo(index: number) {
    listRef.current?.scrollToIndex({ index, animated: true });
    setActiveIndex(index);
  }

  function handleNext() {
    if (isLastStep) {
      router.replace("/home");
      return;
    }
    goTo(activeIndex + 1);
  }

  function handleBack() {
    if (activeIndex > 0) goTo(activeIndex - 1);
  }

  function handleSkip() {
    router.replace("/auth/login");
  }

  function onMomentumScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topRow}>
        <OnboardingProgressBar total={ONBOARDING_STEPS.length} activeIndex={activeIndex} />
        {!isLastStep && (
          <Pressable onPress={handleSkip} hitSlop={10} style={styles.skipButton}>
            <Text style={styles.skipText}>Lewati</Text>
          </Pressable>
        )}
      </View>

      <FlatList
        ref={listRef}
        data={ONBOARDING_STEPS}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEnabled={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
        renderItem={({ item }) => <OnboardingSlide step={item} />}
        style={styles.list}
      />

      <OnboardingNav onBack={handleBack} onNext={handleNext} showBack={activeIndex > 0} isLastStep={isLastStep} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: gfColors.bg },
  topRow: { flexDirection: "row", alignItems: "center", paddingTop: 12, paddingBottom: 4 },
  skipButton: { position: "absolute", right: 24, top: 8 },
  skipText: { fontSize: 12.5, fontWeight: "600", color: gfColors.textMuted },
  list: { flex: 1 },
});