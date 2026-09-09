import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AboutHeader from "../components/about/about-header";
import AboutHero from "../components/about/about-hero";
import AboutStats from "../components/about/about-stats";
import AboutDescription from "../components/about/about-description";
import AboutFeatures from "../components/about/about-features";
import AboutFooter from "../components/about/about-footer";
import { GfColors, useThemeColors } from "../constants/gf-theme";
import { useI18n } from "../constants/i18n";

export default function AboutScreen() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <AboutHeader title={t("aboutTitle")} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AboutHero />
        <AboutStats />
        <AboutDescription />
        <AboutFeatures />
        <AboutFooter />
      </ScrollView>
    </SafeAreaView>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    safe: { flex: 1, backgroundColor: c.bg },
    content: { paddingBottom: 40 },
  });
}