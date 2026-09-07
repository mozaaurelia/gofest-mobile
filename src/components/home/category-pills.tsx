import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { CATEGORIES } from "../../constants/home-data";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

export default function CategoryPills() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {CATEGORIES.map((cat) => {
        const isActive = cat === active;
        return (
          <Pressable
            key={cat}
            onPress={() => setActive(cat)}
            style={[styles.pill, isActive && styles.pillActive]}
          >
            <Text style={[styles.pillText, isActive && styles.pillTextActive]}>
              {cat}
              {cat === "Populer" ? " 🔥" : ""}
            </Text>
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
    pillText: { fontSize: 12.5, fontWeight: "600", color: c.textMuted },
    pillTextActive: { color: "#10151D" },
  });
}