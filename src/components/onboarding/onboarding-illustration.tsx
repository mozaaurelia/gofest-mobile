import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SearchEventIcon, TicketsStackIcon, QrCheckoutIcon } from "./onboarding-icons";
import { gfColors } from "../../constants/gf-theme";

type OnboardingIllustrationProps = { icon: "search" | "tickets" | "qr" };

const ICONS = { search: SearchEventIcon, tickets: TicketsStackIcon, qr: QrCheckoutIcon };

export default function OnboardingIllustration({ icon }: OnboardingIllustrationProps) {
  const { width } = useWindowDimensions();
  const cardWidth = width - 64;
  const Icon = ICONS[icon];

  return (
    <View style={{ width: cardWidth }}>
      <LinearGradient colors={[gfColors.teal, gfColors.lime]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.card}>
        <View style={styles.iconCircle}>
          <Icon size={56} color="#10151D" />
        </View>
      </LinearGradient>

      <View style={styles.perforationRow}>
        <View style={styles.notch} />
        <View style={styles.dash} />
        <View style={styles.notch} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { height: 260, borderRadius: 28, alignItems: "center", justifyContent: "center" },
  iconCircle: { width: 108, height: 108, borderRadius: 32, backgroundColor: "rgba(255,255,255,0.35)", alignItems: "center", justifyContent: "center" },
  perforationRow: { flexDirection: "row", alignItems: "center", marginTop: -1 },
  dash: { flex: 1, borderTopWidth: 2, borderStyle: "dashed", borderColor: gfColors.border },
  notch: { width: 18, height: 18, borderRadius: 9, backgroundColor: gfColors.bg, marginHorizontal: -9 },
});