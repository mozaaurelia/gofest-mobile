import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Concert } from "../../constants/home-data";
import { gfColors } from "../../constants/gf-theme";

type FeaturedBannerProps = { concert: Concert };

export default function FeaturedBanner({ concert }: FeaturedBannerProps) {
  return (
    <View style={styles.wrap}>
      {/* Poster - taro image mu di sini */}
      <View style={[styles.poster, { backgroundColor: concert.from }]}>
        <View style={styles.dateBadge}>
          <Text style={styles.dateDay}>{concert.day}</Text>
          <Text style={styles.dateMonth}>{concert.month}</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{concert.name}</Text>
        <Text style={styles.meta}>{concert.venue}, {concert.city}</Text>

        <View style={styles.footerRow}>
          <View>
            <Text style={styles.priceLabel}>Mulai dari</Text>
            <Text style={styles.price}>{concert.price}</Text>
          </View>
          <Pressable style={styles.cta}>
            <Text style={styles.ctaText}>Lihat Konser</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginTop: 20, marginHorizontal: 20, borderRadius: 22, overflow: "hidden", backgroundColor: gfColors.surface, borderWidth: 1, borderColor: gfColors.border },
  poster: { height: 160, padding: 14 },
  dateBadge: { alignSelf: "flex-start", backgroundColor: "rgba(0,0,0,0.35)", borderRadius: 12, paddingHorizontal: 10, paddingVertical: 6, alignItems: "center" },
  dateDay: { fontSize: 16, fontWeight: "800", color: "#FFFFFF", lineHeight: 18 },
  dateMonth: { fontSize: 10, fontWeight: "600", color: "#FFFFFF", opacity: 0.85 },
  info: { padding: 16 },
  name: { fontSize: 17, fontWeight: "800", color: gfColors.text },
  meta: { fontSize: 12, color: gfColors.textMuted, marginTop: 3 },
  footerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14 },
  priceLabel: { fontSize: 10, color: gfColors.textMuted },
  price: { fontSize: 15, fontWeight: "800", color: gfColors.text, marginTop: 2 },
  cta: { backgroundColor: gfColors.text, paddingHorizontal: 18, height: 42, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  ctaText: { fontSize: 12.5, fontWeight: "700", color: "#10151D" },
});