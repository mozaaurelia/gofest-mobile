import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

export default function TicketsHeader() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Tiket Saya</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 20, paddingTop: 8 },
  title: { ...Typography.h2, color: gfColors.text },
});