import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { CATEGORIES } from "../../constants/home-data";
import { gfColors } from "../../constants/gf-theme";

export default function CategoryPills() {
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

const styles = StyleSheet.create({
  row: { paddingHorizontal: 20, gap: 8, marginTop: 18 },
  pill: { paddingHorizontal: 16, height: 38, borderRadius: 19, backgroundColor: gfColors.surface, alignItems: "center", justifyContent: "center" },
  pillActive: { backgroundColor: gfColors.text },
  pillText: { fontSize: 12.5, fontWeight: "600", color: gfColors.textMuted },
  pillTextActive: { color: "#10151D" },
});