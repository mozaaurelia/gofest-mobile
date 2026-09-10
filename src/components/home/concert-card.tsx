import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Concert } from "../../constants/home-data";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";


type ConcertCardProps = { concert: Concert };

export default function ConcertCard({ concert }: ConcertCardProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  return (
    <Pressable style={styles.card} onPress={() => router.push({ pathname: "/concert/[id]", params: { id: concert.id } })}>
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

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    card: { width: 168, borderRadius: 18, overflow: "hidden", backgroundColor: c.surface, borderWidth: 1, borderColor: c.border },
    poster: { height: 100 },
    posterImage: { width: "100%", height: "100%" },
    dateBadge: { position: "absolute", left: 8, top: 8, backgroundColor: "rgba(0,0,0,0.35)", borderRadius: 8, paddingHorizontal: 7, paddingVertical: 4, alignItems: "center" },
    dateDay: { ...Typography.titleSmall, color: "#FFFFFF" },
    dateMonth: { ...Typography.micro, color: "#FFFFFF", opacity: 0.85 },
    body: { padding: 10 },
    name: { ...Typography.titleSmall, color: c.text },
    meta: { ...Typography.caption, color: c.textMuted, marginTop: 3 },
    footerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8 },
    price: { ...Typography.price, color: c.text },
    time: { ...Typography.micro, color: c.textMuted },
  });
}