import React, { useMemo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CalendarEvent } from "../../constants/calendar-data";
import EventTimelineItem from "./event-timeline-item";
import { gfColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

type EventTimelineListProps = {
  events: CalendarEvent[];
};

type Row = { key: string; event: CalendarEvent; showDateBadge: boolean };

export default function EventTimelineList({ events }: EventTimelineListProps) {
  const rows = useMemo<Row[]>(() => {
    const seen = new Set<string>();
    return events.map((event) => {
      const showDateBadge = !seen.has(event.dateISO);
      seen.add(event.dateISO);
      return { key: event.id, event, showDateBadge };
    });
  }, [events]);

  if (rows.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>Nggak ada event yang cocok sama filter kamu.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Event pilihan buat kamu</Text>
        <Text style={styles.sectionSub}>Jangan sampe kelewat, cek semua lineup-nya</Text>
      </View>

      <FlatList
        data={rows}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <EventTimelineItem event={item.event} showDateBadge={item.showDateBadge} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { flex: 1 },
  sectionHeader: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 16 },
  sectionTitle: { ...Typography.h3, color: gfColors.text },
  sectionSub: { ...Typography.bodySmall, color: gfColors.textMuted, marginTop: 4 },
  listContent: { paddingHorizontal: 20, paddingBottom: 120 },
  empty: { flex: 1, alignItems: "center", paddingTop: 80 },
  emptyText: { ...Typography.body, color: gfColors.textMuted, textAlign: "center", paddingHorizontal: 40 },
});
