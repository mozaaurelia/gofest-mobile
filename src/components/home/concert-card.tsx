import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Concert } from "../../constants/home-data";
import { gfColors } from "../../constants/gf-theme";

type ConcertCardProps = { concert: Concert };

export default function ConcertCard({ concert }: ConcertCardProps) {
  return (
    <Pressable style={styles.card}>
      {/* Poster - taro image mu di sini */}
      <View style={[styles.poster, { backgroundColor: concert.from }]}>
        <View style={styles.dateBadge}>
          <Text style={styles.dateDay}>{concert.day}</Text>
          <Text style={styles.dateMonth}>{concert.month}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.name} numberOfLines={1}>{concert.name}</Text>
        <Text style={styles.meta} numberOfLines={1}>{concert.venue}, {concert.city}</Text>
        <View style={styles.footerRow}>
          <Text style={styles.price}>{concert.price}</Text>
          <Text style={styles.time}>{concert.time}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { width: 168, borderRadius: 18, overflow: "hidden", backgroundColor: gfColors.surface, borderWidth: 1, borderColor: gfColors.border },
  poster: { height: 100, padding: 8 },
  dateBadge: { alignSelf: "flex-start", backgroundColor: "rgba(0,0,0,0.35)", borderRadius: 8, paddingHorizontal: 7, paddingVertical: 4, alignItems: "center" },
  dateDay: { fontSize: 12, fontWeight: "800", color: "#FFFFFF", lineHeight: 13 },
  dateMonth: { fontSize: 8, fontWeight: "600", color: "#FFFFFF", opacity: 0.85 },
  body: { padding: 10 },
  name: { fontSize: 13, fontWeight: "700", color: gfColors.text },
  meta: { fontSize: 10.5, color: gfColors.textMuted, marginTop: 3 },
  footerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8 },
  price: { fontSize: 12, fontWeight: "800", color: gfColors.text },
  time: { fontSize: 10, color: gfColors.textMuted },
});