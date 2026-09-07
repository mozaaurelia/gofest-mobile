import React from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

export default function HomeSearchBar() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  return (
    <View style={styles.row}>
      <View style={styles.searchBar}>
        <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
          <Circle_ color={c.textMuted} />
        </Svg>
        <TextInput
          placeholder="Cari konser, artis, atau venue..."
          placeholderTextColor={c.textMuted}
          style={styles.input}
        />
      </View>
      <Pressable style={styles.filterButton}>
        <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
          <Path d="M4 6h16M7 12h10M10 18h4" stroke={c.text} strokeWidth={1.8} strokeLinecap="round" />
        </Svg>
      </Pressable>
    </View>
  );
}

function Circle_({ color }: { color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
      <Path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke={color} strokeWidth={1.8} />
      <Path d="m20 20-3.2-3.2" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    row: { flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 20, marginTop: 18 },
    searchBar: { flex: 1, flexDirection: "row", alignItems: "center", gap: 8, backgroundColor: c.surface, borderRadius: 14, paddingHorizontal: 14, height: 46 },
    input: { flex: 1, fontSize: 13.5, color: c.text },
    filterButton: { width: 46, height: 46, borderRadius: 14, backgroundColor: c.surface, alignItems: "center", justifyContent: "center" },
  });
}