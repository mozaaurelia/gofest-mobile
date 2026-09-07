import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";

export default function TicketPreviewCard() {
  const floatY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatY, { toValue: -6, duration: 1800, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(floatY, { toValue: 0, duration: 1800, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.card, { transform: [{ translateY: floatY }] }]}>
      <View style={styles.poster}>
        <Text style={styles.eventName}>Summer Fest 2026</Text>
        <Text style={styles.eventMeta}>Sab, 12 Jun · GBK Stadium</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: { marginTop: 20, marginHorizontal: 28, borderRadius: 16, overflow: "hidden", borderWidth: 1, borderColor: gfColors.border },
  poster: { height: 76, padding: 14, justifyContent: "flex-end", backgroundColor: gfColors.teal },
  eventName: { fontSize: 15, fontWeight: "800", color: "#10151D" },
  eventMeta: { marginTop: 2, fontSize: 10, color: "#10151D", opacity: 0.75 },
});