import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import Svg, { Path } from "react-native-svg";
import { SavedTicket } from "../../constants/tickets-data";
import { gfColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

type SavedTicketCardProps = { ticket: SavedTicket };

export default function SavedTicketCard({ ticket }: SavedTicketCardProps) {
  return (
    <Pressable style={styles.card} onPress={() => router.push(`/concert/${ticket.concertId}`)}>
      {ticket.image ? (
        <Image source={ticket.image} style={styles.thumb} contentFit="cover" />
      ) : (
        <View style={[styles.thumb, { backgroundColor: ticket.from }]}>
          <View style={[StyleSheet.absoluteFill, { backgroundColor: ticket.to, opacity: 0.4 }]} />
        </View>
      )}

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{ticket.name}</Text>
        <Text style={styles.meta}>{ticket.venue}, {ticket.city}</Text>
        <Text style={styles.datetime}>{ticket.date} · {ticket.time}</Text>
        <Text style={styles.price}>{ticket.price}</Text>
      </View>

      <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
        <Path d="M9 6l6 6-6 6" stroke={gfColors.textMuted} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", alignItems: "center", gap: 12, backgroundColor: gfColors.surface, borderRadius: 16, borderWidth: 1, borderColor: gfColors.border, padding: 12, marginBottom: 12 },
  thumb: { width: 56, height: 56, borderRadius: 12 },
  info: { flex: 1 },
  name: { ...Typography.titleSmall, color: gfColors.text },
  meta: { ...Typography.caption, color: gfColors.textMuted, marginTop: 2 },
  datetime: { ...Typography.label, color: gfColors.teal, marginTop: 4 },
  price: { ...Typography.price, color: gfColors.text, marginTop: 4 },
});
