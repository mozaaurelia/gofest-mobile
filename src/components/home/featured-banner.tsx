import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Concert } from "../../constants/home-data";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

type FeaturedBannerProps = { concert: Concert };

export default function FeaturedBanner({ concert }: FeaturedBannerProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  return (
    <View style={styles.wrap}>
      <View style={styles.poster}>
        {concert.image ? (
          <Image source={concert.image} style={styles.posterImage} contentFit="cover" transition={150} />
        ) : (
          <View style={styles.dateBadge}>
            <Text style={styles.dateDay}>{concert.day}</Text>
            <Text style={styles.dateMonth}>{concert.month}</Text>
          </View>
        )}
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

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    wrap: { marginTop: 20, marginHorizontal: 20, borderRadius: 22, overflow: "hidden", backgroundColor: c.surface, borderWidth: 1, borderColor: c.border },
    poster: { height: 160 },
    posterImage: { width: "100%", height: "100%" },
    dateBadge: { position: "absolute", left: 14, top: 14, backgroundColor: "rgba(0,0,0,0.35)", borderRadius: 12, paddingHorizontal: 10, paddingVertical: 6, alignItems: "center" },
    dateDay: { ...Typography.title, color: "#FFFFFF" },
    dateMonth: { ...Typography.micro, color: "#FFFFFF", opacity: 0.85 },
    info: { padding: 16 },
    name: { ...Typography.title, color: c.text },
    meta: { ...Typography.caption, color: c.textMuted, marginTop: 3 },
    footerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14 },
    priceLabel: { ...Typography.caption, color: c.textMuted },
    price: { ...Typography.price, color: c.text, marginTop: 2 },
    cta: { backgroundColor: c.text, paddingHorizontal: 18, height: 42, borderRadius: 12, alignItems: "center", justifyContent: "center" },
    ctaText: { ...Typography.buttonSmall, color: "#FFFFFF" },
  });
}