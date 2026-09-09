import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { CalendarEvent } from "../../constants/calendar-data";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

type EventTimelineItemProps = {
  event: CalendarEvent;
  showDateBadge: boolean;
};

export default function EventTimelineItem({ event, showDateBadge }: EventTimelineItemProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);

  return (
    <View style={styles.row}>
      {/* Left rail: date badge + timeline line */}
      <View style={styles.rail}>
        <View style={styles.line} pointerEvents="none" />
        {showDateBadge ? (
          <View style={styles.dateBadge}>
            <Text style={styles.badgeMonth}>{event.month}</Text>
            <Text style={styles.badgeDay}>{event.day}</Text>
            <Text style={styles.badgeWeekday}>{event.weekday}</Text>
          </View>
        ) : (
          <View style={styles.badgeFiller} />
        )}
      </View>

      {/* Right: card, same layout as homepage concert card */}
      <Pressable
        style={styles.card}
        onPress={() => router.push({ pathname: "/concert/[id]", params: { id: event.id } })}
      >
        <View style={styles.poster}>
          {event.image ? (
            <Image source={event.image} style={styles.posterImage} contentFit="cover" transition={150} />
          ) : (
            <View style={styles.posterFallback}>
              <View style={[StyleSheet.absoluteFill, { backgroundColor: event.from }]} />
              <View style={[StyleSheet.absoluteFill, { backgroundColor: event.to, opacity: 0.5 }]} />
            </View>
          )}
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{event.category}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.name} numberOfLines={1}>{event.name}</Text>
          <Text style={styles.meta} numberOfLines={1}>{event.venue}, {event.city}</Text>
          <View style={styles.footerRow}>
            <Text style={styles.price}>{event.price}</Text>
            <Text style={styles.time}>{event.time}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    row: { flexDirection: "row", paddingBottom: 22 },
    rail: { width: 72, alignItems: "center", position: "relative" },
    line: {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: 2,
      backgroundColor: c.border,
      left: 35,
    },
    dateBadge: {
      width: 70,
      borderRadius: 14,
      backgroundColor: c.text,
      paddingVertical: 8,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1,
    },
    badgeFiller: { height: 8 },
    badgeMonth: { fontSize: 10, fontWeight: "700", color: "#10151D", textTransform: "uppercase" },
    badgeDay: { fontSize: 20, fontWeight: "800", color: "#10151D", lineHeight: 24 },
    badgeWeekday: { fontSize: 10, fontWeight: "700", color: "#10151D" },
    card: {
      flex: 1,
      marginLeft: 12,
      borderRadius: 18,
      overflow: "hidden",
      backgroundColor: c.surface,
      borderWidth: 1,
      borderColor: c.border,
    },
    poster: { height: 120 },
    posterImage: { width: "100%", height: "100%" },
    posterFallback: { width: "100%", height: "100%" },
    categoryBadge: {
      position: "absolute",
      left: 8,
      top: 8,
      backgroundColor: "rgba(0,0,0,0.45)",
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    categoryText: { fontSize: 9, fontWeight: "700", color: "#FFFFFF", letterSpacing: 0.3 },
    body: { padding: 12 },
    name: { fontSize: 14, fontWeight: "700", color: c.text },
    meta: { fontSize: 11, color: c.textMuted, marginTop: 3 },
    footerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8 },
    price: { fontSize: 13, fontWeight: "800", color: c.text },
    time: { fontSize: 10.5, color: c.textMuted },
  });
}
