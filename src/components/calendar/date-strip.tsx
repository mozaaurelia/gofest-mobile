import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { CalendarEvent } from "../../constants/calendar-data";
import { gfColors } from "../../constants/gf-theme";

type DateStripProps = {
  dates: CalendarEvent[];
  activeDateISO: string;
  onSelectDate: (dateISO: string) => void;
};

export default function DateStrip({ dates, activeDateISO, onSelectDate }: DateStripProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
      {dates.map((d) => {
        const isActive = d.dateISO === activeDateISO;
        return (
          <Pressable
            key={d.dateISO}
            onPress={() => onSelectDate(d.dateISO)}
            style={[styles.pill, isActive && styles.pillActive]}
          >
            <Text style={[styles.weekday, isActive && styles.textActive]}>{d.weekday}</Text>
            <Text style={[styles.day, isActive && styles.textActive]}>{d.day}</Text>
            <Text style={[styles.month, isActive && styles.textActive]}>{d.month}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { paddingHorizontal: 20, gap: 8, paddingVertical: 14 },
  pill: { width: 54, height: 68, borderRadius: 16, backgroundColor: gfColors.surface, borderWidth: 1, borderColor: gfColors.border, alignItems: "center", justifyContent: "center", gap: 2 },
  pillActive: { backgroundColor: gfColors.text, borderColor: gfColors.text },
  weekday: { fontSize: 10, color: gfColors.textMuted },
  day: { fontSize: 18, fontWeight: "800", color: gfColors.text },
  month: { fontSize: 10, color: gfColors.textMuted },
  textActive: { color: "#10151D" },
});