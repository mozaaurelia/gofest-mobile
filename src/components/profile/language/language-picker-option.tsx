import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Check } from "lucide-react-native";
import { GfColors, useThemeColors } from "../../../constants/gf-theme";
import { AppLang, useI18n } from "../../../constants/i18n";
import { FontWeights, Typography } from "../../../constants/theme";

type LanguagePickerOptionProps = {
  value: AppLang;
  label: string;
  onSelect: () => void;
};

export default function LanguagePickerOption({ value, label, onSelect }: LanguagePickerOptionProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { lang, setLang } = useI18n();
  const isActive = value === lang;

  return (
    <Pressable
      style={styles.option}
      onPress={() => {
        setLang(value);
        onSelect();
      }}
    >
      <Text style={[styles.label, isActive && styles.labelActive]}>{label}</Text>
      {isActive && <Check size={16} color={c.teal} strokeWidth={2.2} />}
    </Pressable>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    option: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 14,
      paddingHorizontal: 4,
      borderBottomWidth: 1,
      borderBottomColor: c.border,
    },
    label: { ...Typography.body, color: c.text },
    labelActive: { fontWeight: FontWeights.bold },
  });
}