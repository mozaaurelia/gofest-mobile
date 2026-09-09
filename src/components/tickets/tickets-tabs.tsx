import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";

export type TicketsTab = "saved" | "purchased";

type TicketsTabsProps = {
  active: TicketsTab;
  onChange: (tab: TicketsTab) => void;
};

const TABS: { key: TicketsTab; label: string }[] = [
  { key: "saved", label: "Tersimpan" },
  { key: "purchased", label: "Dibeli" },
];

export default function TicketsTabs({ active, onChange }: TicketsTabsProps) {
  return (
    <View style={styles.row}>
      {TABS.map((tab) => {
        const isActive = tab.key === active;
        return (
          <Pressable key={tab.key} onPress={() => onChange(tab.key)} style={styles.tab}>
            <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
            <View style={[styles.underline, isActive && styles.underlineActive]} />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", paddingHorizontal: 20, marginTop: 18, gap: 28, borderBottomWidth: 1, borderBottomColor: gfColors.border },
  tab: { paddingBottom: 12 },
  label: { fontSize: 14, fontWeight: "600", color: gfColors.textMuted },
  labelActive: { color: gfColors.text, fontWeight: "800" },
  underline: { height: 2, marginTop: 10, borderRadius: 1, backgroundColor: "transparent" },
  underlineActive: { backgroundColor: gfColors.lime },
});