import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { OnboardingStep } from "../../constants/onboarding-data";
import OnboardingIllustration from "./onboarding-illustration";
import { gfColors } from "../../constants/gf-theme";

type OnboardingSlideProps = { step: OnboardingStep };

export default function OnboardingSlide({ step }: OnboardingSlideProps) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.slide, { width }]}>
      <OnboardingIllustration icon={step.icon} />
      <Text style={styles.title}>{step.title}</Text>
      <Text style={styles.description}>{step.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: { alignItems: "center", paddingTop: 24, paddingHorizontal: 32 },
  title: { marginTop: 28, fontSize: 22, fontWeight: "800", color: gfColors.text, textAlign: "center" },
  description: { marginTop: 10, fontSize: 13.5, lineHeight: 20, color: gfColors.textMuted, textAlign: "center", maxWidth: 300 },
});