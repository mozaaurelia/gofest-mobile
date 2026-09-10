import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";
import { Typography } from "../../constants/theme";

export default function SocialLoginRow() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();
  return (
    <View style={styles.wrap}>
      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>{t("socialOr")}</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.buttonsRow}>
        <Pressable style={styles.socialBtn}><Text style={styles.socialLabel}>G</Text></Pressable>
        <Pressable style={styles.socialBtn}><Text style={styles.socialLabel}>f</Text></Pressable>
        <Pressable style={styles.socialBtn}><Text style={styles.socialLabel}></Text></Pressable>
      </View>
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    wrap: { marginTop: 4, marginBottom: 8 },
    dividerRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 14 },
    line: { flex: 1, height: 1, backgroundColor: c.border },
    dividerText: { ...Typography.caption, color: c.textMuted },
    buttonsRow: { flexDirection: "row", justifyContent: "center", gap: 12 },
    socialBtn: { width: 44, height: 44, borderRadius: 12, borderWidth: 1, borderColor: c.border, backgroundColor: c.surface, alignItems: "center", justifyContent: "center" },
    socialLabel: { ...Typography.button, color: c.text },
  });
}