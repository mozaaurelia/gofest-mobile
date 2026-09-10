import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { OnboardingStep } from "../../constants/onboarding-data";
import OnboardingIllustration from "./onboarding-illustration";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";
import { Typography } from "../../constants/theme";

type OnboardingSlideProps = { step: OnboardingStep };

export default function OnboardingSlide({ step }: OnboardingSlideProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.slide, { width }]}>
      <OnboardingIllustration icon={step.icon} />
      <Text style={styles.title}>{t(step.titleKey)}</Text>
      <Text style={styles.description}>{t(step.descriptionKey)}</Text>
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    slide: { alignItems: "center", paddingTop: 24, paddingHorizontal: 32 },
    title: { marginTop: 28, ...Typography.h1, color: c.text, textAlign: "center" },
    description: { marginTop: 10, ...Typography.body, color: c.textMuted, textAlign: "center", maxWidth: 300 },
  });
}