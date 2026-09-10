import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import { FILTER_CATEGORIES } from "../../constants/calendar-data";
import { gfColors } from "../../constants/gf-theme";

type FilterModalProps = {
  visible: boolean;
  activeCategory: string;
  onClose: () => void;
  onApply: (category: string) => void;
};

export default function FilterModal({ visible, activeCategory, onClose, onApply }: FilterModalProps) {
  const [selected, setSelected] = useState(activeCategory);

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <View style={styles.header}>
            <Text style={styles.title}>Filter Kategori</Text>
            <Pressable onPress={onClose} style={styles.closeBtn}>
              <Svg viewBox="0 0 24 24" width={14} height={14} fill="none">
                <Path d="M6 6l12 12M18 6 6 18" stroke={gfColors.text} strokeWidth={2} strokeLinecap="round" />
              </Svg>
            </Pressable>
          </View>

          <View style={styles.chipsWrap}>
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = cat === selected;
              return (
                <Pressable key={cat} onPress={() => setSelected(cat)} style={[styles.chip, isActive && styles.chipActive]}>
                  <Text style={[styles.chipText, isActive && styles.chipTextActive]}>{cat}</Text>
                </Pressable>
              );
            })}
          </View>

          <Pressable onPress={() => onApply(selected)}>
            <LinearGradient colors={[gfColors.teal, gfColors.lime]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.applyButton}>
              <Text style={styles.applyText}>Terapkan Filter</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
  sheet: { backgroundColor: gfColors.bg, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20, paddingBottom: 32 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 18 },
  title: { fontSize: 16, fontWeight: "800", color: gfColors.text },
  closeBtn: { width: 30, height: 30, borderRadius: 15, backgroundColor: gfColors.surface, alignItems: "center", justifyContent: "center" },
  chipsWrap: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 24 },
  chip: { paddingHorizontal: 16, height: 38, borderRadius: 19, backgroundColor: gfColors.surface, alignItems: "center", justifyContent: "center" },
  chipActive: { backgroundColor: gfColors.text },
  chipText: { fontSize: 12.5, fontWeight: "600", color: gfColors.textMuted },
  chipTextActive: { color: "#FFFFFF" },
  applyButton: { height: 52, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  applyText: { fontSize: 14, fontWeight: "700", color: "#10151D" },
});