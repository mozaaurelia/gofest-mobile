import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

export default function VenueLegend() {
  return (
    <View style={styles.row}>
      <Item color={gfColors.border} label="Tidak Tersedia" outline />
      <Item color={gfColors.surface} label="Tersedia" outline />
      <Item color="#FFFFFF" label="Terpilih" />
    </View>
  );
}

function Item({ color, label, outline }: { color: string; label: string; outline?: boolean }) {
  return (
    <View style={styles.item}>
      <View style={[styles.dot, { backgroundColor: color }, outline && styles.dotOutline]} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "center", gap: 20, paddingVertical: 16 },
  item: { flexDirection: "row", alignItems: "center", gap: 6 },
  dot: { width: 10, height: 10, borderRadius: 5 },
  dotOutline: { borderWidth: 1, borderColor: "#5A5A5C" },
  label: { ...Typography.caption, color: gfColors.textMuted },
});