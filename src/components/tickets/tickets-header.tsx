import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";

export default function TicketsHeader() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Tiket Saya</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 20, paddingTop: 8 },
  title: { fontSize: 20, fontWeight: "800", color: gfColors.text },
});