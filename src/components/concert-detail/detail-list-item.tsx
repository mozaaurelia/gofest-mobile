import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

type DetailListItemProps = {
  icon: React.ComponentType<{ size: number; color: string; strokeWidth: number }>;
  title: string;
  subtitle: string;
  showBadge?: boolean;
};

export default function DetailListItem({ icon: Icon, title, subtitle, showBadge }: DetailListItemProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  return (
    <Pressable style={styles.row}>
      <View style={styles.iconBox}>
        <Icon size={18} color={c.text} strokeWidth={2} />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {showBadge && <View style={styles.badge} />}
      <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
        <Path d="M9 6l6 6-6 6" stroke={c.textMuted} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </Pressable>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    row: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: c.border },
    iconBox: { width: 40, height: 40, borderRadius: 12, backgroundColor: c.surface, alignItems: "center", justifyContent: "center" },
    textWrap: { flex: 1 },
    title: { fontSize: 13.5, fontWeight: "700", color: c.text },
    subtitle: { fontSize: 11.5, color: c.textMuted, marginTop: 2 },
    badge: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#F2545B" },
  });
}