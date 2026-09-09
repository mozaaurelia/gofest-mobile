import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { CalendarEvent } from "../../constants/calendar-data";
import { gfColors } from "../../constants/gf-theme";

type TicketDeckCardProps = { event: CalendarEvent; width: number; availableHeight: number };

const POSTER_RATIO = 0.55;
const POSTER_MAX = 240;
const ASPECT = 10 / 16;

export default function TicketDeckCard({ event, width, availableHeight }: TicketDeckCardProps) {
  const posterH = Math.min(Math.round(availableHeight * POSTER_RATIO), POSTER_MAX);
  const posterAspectW = Math.round(posterH / ASPECT);
  const posterW = Math.min(posterAspectW, width);

  return (
    <View style={[styles.card, { height: availableHeight }]}>
      <View style={[styles.poster, { height: posterH, width: posterW }, { backgroundColor: event.from }]}>
        <View style={[StyleSheet.absoluteFill, { backgroundColor: event.to, opacity: 0.4 }]} />
        <View style={styles.badgeWrap}>
          <Text style={styles.categoryBadge}>{event.category}</Text>
        </View>
      </View>

      <View style={styles.perforationRow}>
        <View style={styles.notch} />
        <View style={styles.dash} />
        <View style={styles.notch} />
      </View>

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{event.name}</Text>
        <Text style={styles.meta} numberOfLines={1}>{event.venue}, {event.city}</Text>
        <Text style={styles.datetime}>{event.weekday}, {event.day} {event.month} · {event.time}</Text>

        <View style={styles.footerRow}>
          <View>
            <Text style={styles.priceLabel}>Mulai dari</Text>
            <Text style={styles.price}>{event.price}</Text>
          </View>
          <Pressable style={styles.cta} onPress={() => router.push(`/concert/${event.id}`)}>
            <Text style={styles.ctaText}>Lihat Detail</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 22, overflow: "hidden", backgroundColor: gfColors.surface, borderWidth: 1, borderColor: gfColors.border },
  poster: { padding: 12, justifyContent: "flex-start", alignItems: "flex-end" },
  badgeWrap: { backgroundColor: "rgba(0,0,0,0.45)", borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 },
  categoryBadge: { fontSize: 10, fontWeight: "700", color: "#FFFFFF", letterSpacing: 0.3 },
  perforationRow: { flexDirection: "row", alignItems: "center", marginTop: -1 },
  dash: { flex: 1, borderTopWidth: 2, borderStyle: "dashed", borderColor: gfColors.border },
  notch: { width: 18, height: 18, borderRadius: 9, backgroundColor: gfColors.bg, marginHorizontal: -9 },
  info: { padding: 18, flex: 1, justifyContent: "flex-start" },
  name: { fontSize: 17, fontWeight: "800", color: gfColors.text },
  meta: { fontSize: 12, color: gfColors.textMuted, marginTop: 4 },
  datetime: { fontSize: 11.5, color: gfColors.teal, marginTop: 6, fontWeight: "600" },
  footerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: "auto" },
  priceLabel: { fontSize: 10, color: gfColors.textMuted },
  price: { fontSize: 15, fontWeight: "800", color: gfColors.text, marginTop: 2 },
  cta: { backgroundColor: gfColors.text, paddingHorizontal: 16, height: 40, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  ctaText: { fontSize: 12, fontWeight: "700", color: "#10151D" },
});