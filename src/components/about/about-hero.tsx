import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import TicketIcon from "../ticket-icon";
import { useI18n } from "../../constants/i18n";
import { Typography } from "../../constants/theme";

const VERSION = "v1.0.0";

export default function AboutHero() {
  const { t } = useI18n();

  return (
    <LinearGradient colors={["#2FA8C0", "#8FD14F"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.hero}>
      <Svg style={styles.deco1} width={30} height={30} viewBox="0 0 24 24" fill="none">
        <Path d="M4 12a8 8 0 0 1 16 0Z" stroke="#FFFFFF" strokeOpacity={0.35} strokeWidth={1.8} />
      </Svg>
      <Svg style={styles.deco2} width={22} height={22} viewBox="0 0 24 24" fill="none">
        <Path d="M5 5l14 14M19 5 5 19" stroke="#FFFFFF" strokeOpacity={0.35} strokeWidth={2} strokeLinecap="round" />
      </Svg>
      <Svg style={styles.deco3} width={16} height={16} viewBox="0 0 24 24" fill="none">
        <Path d="M12 3 21 19H3L12 3Z" stroke="#FFFFFF" strokeOpacity={0.3} strokeWidth={1.8} strokeLinejoin="round" />
      </Svg>

      <View style={styles.logoBox}>
        <TicketIcon size={42} gradientId="aboutTicketGrad" />
      </View>

      <Text style={styles.brand}>Go fest!</Text>
      <Text style={styles.tagline}>{t("aboutTagline")}</Text>

      <View style={styles.versionPill}>
        <Text style={styles.versionText}>{VERSION}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  hero: {
    marginHorizontal: 20,
    borderRadius: 24,
    paddingVertical: 44,
    paddingHorizontal: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  deco1: { position: "absolute", top: 24, right: 26 },
  deco2: { position: "absolute", bottom: 30, left: 24 },
  deco3: { position: "absolute", top: 80, left: 40, opacity: 0.7 },
  logoBox: {
    width: 84,
    height: 84,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  brand: { marginTop: 18, ...Typography.display, color: "#FFFFFF" },
  tagline: { marginTop: 6, ...Typography.body, color: "rgba(255,255,255,0.92)", textAlign: "center", maxWidth: 260 },
  versionPill: {
    marginTop: 18,
    backgroundColor: "rgba(255,255,255,0.22)",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
  },
  versionText: { ...Typography.label, color: "#FFFFFF" },
});