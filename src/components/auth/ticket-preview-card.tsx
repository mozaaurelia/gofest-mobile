import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

export default function TicketPreviewCard() {
  const c = useThemeColors();
  const styles = makeStyles(c);
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
      <Image source={require("@/assets/images/expo-logo.png")} style={styles.poster} contentFit="cover" transition={150} />
      <View style={styles.info}>
        <Text style={styles.eventName}>Summer Fest 2026</Text>
        <Text style={styles.eventMeta}>Sab, 12 Jun · GBK Stadium</Text>
      </View>
    </Animated.View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    card: { marginTop: 20, marginHorizontal: 28, borderRadius: 16, overflow: "hidden", borderWidth: 1, borderColor: c.border, backgroundColor: c.surface },
    poster: { height: 110, width: "100%" },
    info: { padding: 12 },
    eventName: { fontSize: 15, fontWeight: "800", color: c.text },
    eventMeta: { marginTop: 2, fontSize: 10, color: c.textMuted },
  });
}