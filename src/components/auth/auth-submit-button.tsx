import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useThemeColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

type AuthSubmitButtonProps = { label: string; onPress?: () => void };

export default function AuthSubmitButton({ label, onPress }: AuthSubmitButtonProps) {
  const c = useThemeColors();
  return (
    <Pressable onPress={onPress}>
      <LinearGradient colors={[c.teal, c.lime]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.button}>
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { height: 52, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  label: { ...Typography.button, color: "#10151D" },
});