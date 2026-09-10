import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";
import { FontWeights, Typography } from "../../constants/theme";

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
  row: { flexDirection: "row", paddingHorizontal: 20, marginTop: 18, borderBottomWidth: 1, borderBottomColor: gfColors.border },
  tab: { flex: 1, paddingBottom: 12, alignItems: "center" },
  label: { ...Typography.tab, color: gfColors.textMuted },
  labelActive: { color: gfColors.text, fontWeight: FontWeights.bold },
  underline: { height: 2, marginTop: 10, borderRadius: 1, backgroundColor: "transparent" },
  underlineActive: { backgroundColor: gfColors.lime },
});