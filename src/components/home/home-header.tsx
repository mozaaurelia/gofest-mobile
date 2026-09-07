import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

export default function HomeHeader() {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.greeting}>Halo, Fajar 👋</Text>
        <Text style={styles.location}>Jakarta, Indonesia</Text>
      </View>

      <View style={styles.actions}>
        <View style={styles.iconButton}>
          <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
            <Path d="M6 8a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 12 6 8Z" stroke={gfColors.text} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M9.5 17a2.5 2.5 0 0 0 5 0" stroke={gfColors.text} strokeWidth={1.8} strokeLinecap="round" />
          </Svg>
          <View style={styles.dot} />
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarLabel}>F</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 8 },
  greeting: { fontSize: 17, fontWeight: "800", color: gfColors.text },
  location: { fontSize: 12, color: gfColors.textMuted, marginTop: 2 },
  actions: { flexDirection: "row", alignItems: "center", gap: 10 },
  iconButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: gfColors.surface, alignItems: "center", justifyContent: "center" },
  dot: { position: "absolute", top: 9, right: 10, width: 6, height: 6, borderRadius: 3, backgroundColor: gfColors.lime },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: gfColors.surface, borderWidth: 1, borderColor: gfColors.border, alignItems: "center", justifyContent: "center" },
  avatarLabel: { fontSize: 14, fontWeight: "700", color: gfColors.text },
});