import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { gfColors } from "../../constants/gf-theme";

type AuthSubmitButtonProps = { label: string; onPress?: () => void };

export default function AuthSubmitButton({ label, onPress }: AuthSubmitButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient colors={[gfColors.teal, gfColors.lime]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.button}>
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { height: 52, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  label: { fontSize: 15, fontWeight: "700", color: "#10151D" },
});