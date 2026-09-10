import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";
import { Typography } from "../../constants/theme";

export default function AboutDescription() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{t("aboutDescTitle")}</Text>
      <Text style={styles.paragraph}>{t("aboutDesc1")}</Text>
      <Text style={styles.paragraph}>{t("aboutDesc2")}</Text>
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    section: { paddingHorizontal: 20, marginTop: 24 },
    title: { ...Typography.h3, color: c.text, marginBottom: 10 },
    paragraph: { ...Typography.body, color: c.textMuted, marginBottom: 10 },
  });
}