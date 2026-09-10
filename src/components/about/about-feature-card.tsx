import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

type AboutFeatureCardProps = {
  icon: React.ComponentType<{ size: number; color: string; strokeWidth: number }>;
  title: string;
  subtitle: string;
};

export default function AboutFeatureCard({ icon: Icon, title, subtitle }: AboutFeatureCardProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);

  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <Icon size={20} color={c.teal} strokeWidth={1.9} />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.subtitle} numberOfLines={2}>
        {subtitle}
      </Text>
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    card: {
      flex: 1,
      minWidth: "46%",
      backgroundColor: c.surface,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: c.border,
      padding: 16,
    },
    iconBox: {
      width: 38,
      height: 38,
      borderRadius: 12,
      backgroundColor: "rgba(47,168,192,0.14)",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12,
    },
    title: { ...Typography.titleSmall, color: c.text },
    subtitle: { ...Typography.caption, lineHeight: 15, color: c.textMuted, marginTop: 4 },
  });
}