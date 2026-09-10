import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";
import { Typography } from "../../constants/theme";
import TicketIcon from "../ticket-icon";

export default function AboutFooter() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();

  return (
    <View style={styles.wrap}>
      <TicketIcon size={26} gradientId="aboutFooterGrad" />
      <Text style={styles.footer}>{t("aboutFooter")}</Text>
      <Text style={styles.copyright}>{t("aboutCopyright")}</Text>
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    wrap: { alignItems: "center", paddingVertical: 28 },
    footer: { ...Typography.bodySmall, color: c.textMuted, textAlign: "center", marginTop: 10, paddingHorizontal: 40 },
    copyright: { ...Typography.micro, color: c.textMuted, opacity: 0.7, marginTop: 6 },
  });
}