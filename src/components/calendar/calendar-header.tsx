import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

type CalendarHeaderProps = { onOpenFilter: () => void; activeFilterCount: number };

export default function CalendarHeader({ onOpenFilter, activeFilterCount }: CalendarHeaderProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>Kalender Event</Text>
      <Pressable onPress={onOpenFilter} style={styles.filterButton}>
        <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
          <Path d="M4 6h16M7 12h10M10 18h4" stroke={gfColors.text} strokeWidth={1.8} strokeLinecap="round" />
        </Svg>
        {activeFilterCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{activeFilterCount}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 8 },
  title: { fontSize: 20, fontWeight: "800", color: gfColors.text },
  filterButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: gfColors.surface, alignItems: "center", justifyContent: "center" },
  badge: { position: "absolute", top: -2, right: -2, minWidth: 16, height: 16, borderRadius: 8, backgroundColor: gfColors.lime, alignItems: "center", justifyContent: "center", paddingHorizontal: 3 },
  badgeText: { fontSize: 9, fontWeight: "800", color: "#10151D" },
});