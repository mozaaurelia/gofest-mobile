import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TicketIcon from "../ticket-icon";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

export default function AuthHeader() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <TicketIcon size={30} />
        <Text style={styles.wordmark}>Go fest!</Text>
      </View>
      <Text style={styles.tagline}>Satu platform tiket konser & festival</Text>
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    container: { alignItems: "center", paddingTop: 32, paddingBottom: 8 },
    logoRow: { flexDirection: "row", alignItems: "center", gap: 8 },
    wordmark: { fontSize: 20, fontWeight: "800", color: c.text },
    tagline: { marginTop: 6, fontSize: 12.5, color: c.textMuted, textAlign: "center" },
  });
}