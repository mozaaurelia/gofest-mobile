import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

type ProfileMenuItemProps = {
  icon: React.ComponentType<{ size: number; color: string; strokeWidth: number }>;
  label: string;
  rightText?: string;
  danger?: boolean;
  onPress?: () => void;
};

export default function ProfileMenuItem({ icon: Icon, label, rightText, danger, onPress }: ProfileMenuItemProps) {
  return (
    <Pressable onPress={onPress} style={styles.row}>
      <View style={[styles.iconBox, danger && styles.iconBoxDanger]}>
        <Icon size={17} color={danger ? "#F2545B" : gfColors.text} strokeWidth={1.9} />
      </View>
      <Text style={[styles.label, danger && styles.labelDanger]}>{label}</Text>
      {rightText && <Text style={styles.rightText}>{rightText}</Text>}
      {!danger && (
        <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
          <Path d="M9 6l6 6-6 6" stroke={gfColors.textMuted} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 14 },
  iconBox: { width: 36, height: 36, borderRadius: 12, backgroundColor: gfColors.surface, alignItems: "center", justifyContent: "center" },
  iconBoxDanger: { backgroundColor: "rgba(242,84,91,0.12)" },
  label: { flex: 1, ...Typography.bodyMedium, color: gfColors.text },
  labelDanger: { color: "#F2545B" },
  rightText: { ...Typography.caption, color: gfColors.textMuted, marginRight: 4 },
});