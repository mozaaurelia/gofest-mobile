import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import Svg, { Path } from "react-native-svg";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

type AboutHeaderProps = { title: string };

export default function AboutHeader({ title }: AboutHeaderProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);

  return (
    <View style={styles.row}>
      <Pressable onPress={() => router.back()} hitSlop={10} style={styles.iconButton}>
        <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
          <Path d="M15 6l-6 6 6 6" stroke={c.text} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      <View style={styles.iconPlaceholder} />
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    iconButton: {
      width: 38,
      height: 38,
      borderRadius: 19,
      backgroundColor: c.surface,
      borderWidth: 1,
      borderColor: c.border,
      alignItems: "center",
      justifyContent: "center",
    },
    iconPlaceholder: { width: 38, height: 38 },
    title: {
      flex: 1,
      marginHorizontal: 12,
      ...Typography.h3,
      color: c.text,
      textAlign: "center",
    },
  });
}