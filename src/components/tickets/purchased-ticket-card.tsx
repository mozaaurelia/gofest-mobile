import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import Svg, { Rect } from "react-native-svg";
import { PurchasedTicket } from "../../constants/tickets-data";
import { gfColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

type PurchasedTicketCardProps = { ticket: PurchasedTicket };

export default function PurchasedTicketCard({ ticket }: PurchasedTicketCardProps) {
  return (
    <Pressable style={styles.card} onPress={() => router.push(`/concert/${ticket.concertId}`)}>
      <View style={[styles.poster, { backgroundColor: ticket.from }]}>
        <View style={[StyleSheet.absoluteFill, { backgroundColor: ticket.to, opacity: 0.4 }]} />
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{ticket.category}</Text>
        </View>
      </View>

      <View style={styles.perforationRow}>
        <View style={styles.notch} />
        <View style={styles.dash} />
        <View style={styles.notch} />
      </View>

      <View style={styles.body}>
        <View style={styles.textCol}>
          <Text style={styles.name} numberOfLines={1}>{ticket.name}</Text>
          <Text style={styles.meta}>{ticket.venue}, {ticket.city}</Text>
          <Text style={styles.datetime}>{ticket.date} · {ticket.time}</Text>
          <Text style={styles.code}>{ticket.ticketCode}</Text>
        </View>

        <QrGlyph />
      </View>
    </Pressable>
  );
}

function QrGlyph() {
  return (
    <Svg width={40} height={40} viewBox="0 0 44 44" fill="none">
      <Rect x="2" y="2" width="14" height="14" rx="2" stroke={gfColors.text} strokeWidth={2} />
      <Rect x="28" y="2" width="14" height="14" rx="2" stroke={gfColors.text} strokeWidth={2} />
      <Rect x="2" y="28" width="14" height="14" rx="2" stroke={gfColors.text} strokeWidth={2} />
      <Rect x="6" y="6" width="6" height="6" rx="1" fill={gfColors.text} />
      <Rect x="32" y="6" width="6" height="6" rx="1" fill={gfColors.text} />
      <Rect x="6" y="32" width="6" height="6" rx="1" fill={gfColors.text} />
    </Svg>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: gfColors.surface, borderRadius: 18, overflow: "hidden", borderWidth: 1, borderColor: gfColors.border, marginBottom: 16 },
  poster: { height: 90, padding: 12, alignItems: "flex-end" },
  categoryBadge: { backgroundColor: "rgba(0,0,0,0.35)", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  categoryText: { ...Typography.micro, color: "#FFFFFF" },
  perforationRow: { flexDirection: "row", alignItems: "center", marginTop: -1 },
  dash: { flex: 1, borderTopWidth: 2, borderStyle: "dashed", borderColor: gfColors.border },
  notch: { width: 16, height: 16, borderRadius: 8, backgroundColor: gfColors.bg, marginHorizontal: -8 },
  body: { flexDirection: "row", alignItems: "center", padding: 14, gap: 12 },
  textCol: { flex: 1 },
  name: { ...Typography.titleSmall, color: gfColors.text },
  meta: { ...Typography.caption, color: gfColors.textMuted, marginTop: 2 },
  datetime: { ...Typography.label, color: gfColors.teal, marginTop: 4 },
  code: { ...Typography.ticketNumber, color: gfColors.textMuted, marginTop: 6 },
});