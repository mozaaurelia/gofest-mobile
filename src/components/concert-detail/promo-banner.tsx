import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";
import { FontWeights, Typography } from "../../constants/theme";

export default function PromoBanner() {
  const c = useThemeColors();
  const { t } = useI18n();
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>
        {t("promoNewTickets")} <Text style={styles.link}>{t("promoTicketInfo")}</Text>
      </Text>
      <Svg viewBox="0 0 24 24" width={13} height={13} fill="none">
        <Path d="M7 17 17 7M9 7h8v8" stroke={c.lime} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#1E2A47",
    paddingVertical: 12,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  text: { ...Typography.bodySmall, color: "#FFFFFF" },
  link: { color: "#F4A94A", fontWeight: FontWeights.bold },
});