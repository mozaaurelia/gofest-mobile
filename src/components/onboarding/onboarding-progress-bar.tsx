import React from "react";
import { StyleSheet, View } from "react-native";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

type OnboardingProgressBarProps = { total: number; activeIndex: number };

export default function OnboardingProgressBar({ total, activeIndex }: OnboardingProgressBarProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  return (
    <View style={styles.row}>
      {Array.from({ length: total }).map((_, i) => (
        <View key={i} style={styles.track}>
          <View
            style={[
              styles.fill,
              { width: i <= activeIndex ? "100%" : "0%", backgroundColor: i <= activeIndex ? c.lime : "transparent" },
            ]}
          />
        </View>
      ))}
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    row: { flexDirection: "row", gap: 6, paddingHorizontal: 24 },
    track: { flex: 1, height: 4, borderRadius: 999, backgroundColor: c.border, overflow: "hidden" },
    fill: { height: "100%", borderRadius: 999 },
  });
}