import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ABOUT_FEATURES } from "../../constants/about-data";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";
import { Typography } from "../../constants/theme";
import AboutFeatureCard from "./about-feature-card";

export default function AboutFeatures() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{t("aboutFeaturesTitle")}</Text>
      <View style={styles.grid}>
        {ABOUT_FEATURES.map((feature) => (
          <AboutFeatureCard
            key={feature.titleKey}
            icon={feature.icon}
            title={t(feature.titleKey)}
            subtitle={t(feature.subtitleKey)}
          />
        ))}
      </View>
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    section: { paddingHorizontal: 20, marginTop: 24 },
    sectionTitle: { ...Typography.h3, color: c.text, marginBottom: 12 },
    grid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  });
}