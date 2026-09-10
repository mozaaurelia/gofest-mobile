import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TicketIcon from "../ticket-icon";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";
import { Typography } from "../../constants/theme";

export default function AuthHeader() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();
  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <TicketIcon size={30} />
        <Text style={styles.wordmark}>Go fest!</Text>
      </View>
      <Text style={styles.tagline}>{t("authTagline")}</Text>
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    container: { alignItems: "center", paddingTop: 32, paddingBottom: 8 },
    logoRow: { flexDirection: "row", alignItems: "center", gap: 8 },
    wordmark: { ...Typography.h2, color: c.text },
    tagline: { marginTop: 6, ...Typography.bodySmall, color: c.textMuted, textAlign: "center" },
  });
}