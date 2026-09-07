import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

type OnboardingNavProps = { onBack: () => void; onNext: () => void; showBack: boolean; isLastStep: boolean };

export default function OnboardingNav({ onBack, onNext, showBack, isLastStep }: OnboardingNavProps) {
  return (
    <View style={styles.row}>
      {showBack ? (
        <Pressable onPress={onBack} style={styles.backButton}>
          <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
            <Path d="M15 6l-6 6 6 6" stroke={gfColors.text} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Pressable>
      ) : (
        <View style={styles.backButton} />
      )}

      <Pressable onPress={onNext}>
        <LinearGradient colors={[gfColors.teal, gfColors.lime]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={isLastStep ? styles.nextPill : styles.nextCircle}>
          {isLastStep ? (
            <Text style={styles.nextLabel}>Mulai</Text>
          ) : (
            <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
              <Path d="M9 6l6 6-6 6" stroke="#10151D" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
          )}
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 32 },
  backButton: { width: 48, height: 48, borderRadius: 24, borderWidth: 1, borderColor: gfColors.border, alignItems: "center", justifyContent: "center" },
  nextCircle: { width: 56, height: 56, borderRadius: 28, alignItems: "center", justifyContent: "center" },
  nextPill: { height: 52, paddingHorizontal: 28, borderRadius: 26, alignItems: "center", justifyContent: "center" },
  nextLabel: { fontSize: 14, fontWeight: "700", color: "#10151D" },
});