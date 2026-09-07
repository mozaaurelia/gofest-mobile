import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

export default function BuyTicketBar() {
  return (
    <View style={styles.wrap}>
      <Pressable style={styles.bookmark}>
        <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
          <Path d="M6 4h12v16l-6-4-6 4V4Z" stroke={gfColors.text} strokeWidth={1.8} strokeLinejoin="round" />
        </Svg>
      </Pressable>

      <Pressable style={{ flex: 1 }}>
        <LinearGradient colors={[gfColors.teal, gfColors.lime]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.button}>
          <TicketGlyph />
          <Text style={styles.buttonText}>Beli Tiket</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

function TicketGlyph() {
  return (
    <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
      <Path d="M4 8.5 8 4.5a2 2 0 0 1 2.8 0l8.7 8.7a2 2 0 0 1 0 2.8L15.5 20a2 2 0 0 1-2.8 0L4 11.3a2 2 0 0 1 0-2.8Z" stroke="#10151D" strokeWidth={1.8} strokeLinejoin="round" />
    </Svg>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 20, paddingTop: 12, paddingBottom: 24, borderTopWidth: 1, borderTopColor: gfColors.border, backgroundColor: gfColors.bg },
  bookmark: { width: 52, height: 52, borderRadius: 16, borderWidth: 1, borderColor: gfColors.border, alignItems: "center", justifyContent: "center" },
  button: { height: 52, borderRadius: 16, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 },
  buttonText: { fontSize: 14, fontWeight: "700", color: "#10151D" },
});