import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Flame } from "lucide-react-native";
import { CATEGORIES } from "../../constants/home-data";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";

type CategoryPillsProps = {
  active: string;
  onChange: (category: string) => void;
};

export default function CategoryPills({ active, onChange }: CategoryPillsProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {CATEGORIES.map((cat) => {
        const isActive = cat === active;
        const label = cat === "Populer" ? t("categoryPopular") : cat;
        return (
          <Pressable
            key={cat}
            onPress={() => onChange(cat)}
            style={[styles.pill, isActive && styles.pillActive]}
          >
            <View style={styles.pillContent}>
              <Text style={[styles.pillText, isActive && styles.pillTextActive]}>{label}</Text>
              {cat === "Populer" && <Flame size={13} color={c.danger} strokeWidth={2.2} />}
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    row: { paddingHorizontal: 20, gap: 8, marginTop: 18 },
    pill: { paddingHorizontal: 16, height: 38, borderRadius: 19, backgroundColor: c.surface, alignItems: "center", justifyContent: "center" },
    pillActive: { backgroundColor: c.text },
    pillContent: { flexDirection: "row", alignItems: "center", gap: 4 },
    pillText: { fontSize: 12.5, fontWeight: "600", color: c.textMuted },
    pillTextActive: { color: "#FFFFFF" },
  });
}