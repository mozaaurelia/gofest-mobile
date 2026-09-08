import React, { useMemo, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import { PRICE_TIERS, Seat, VenueSection } from "../../constants/seat-data";
import SeatGrid from "./seat-grid";
import { gfColors } from "../../constants/gf-theme";

type SeatSelectionModalProps = {
  section: VenueSection | null;
  onClose: () => void;
  onConfirm: (seats: Seat[]) => void;
};

export default function SeatSelectionModal({ section, onClose, onConfirm }: SeatSelectionModalProps) {
  const [selected, setSelected] = useState<Seat[]>([]);

  const total = useMemo(
    () => selected.reduce((sum, s) => sum + PRICE_TIERS[s.tier].price, 0),
    [selected]
  );

  function handleToggle(seat: Seat) {
    setSelected((prev) => {
      const exists = prev.find((s) => s.id === seat.id);
      if (exists) return prev.filter((s) => s.id !== seat.id);
      return [...prev, seat];
    });
  }

  if (!section) return null;

  return (
    <Modal visible transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <View style={styles.header}>
            <Pressable onPress={onClose} style={styles.closeBtn}>
              <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
                <Path d="M6 6l12 12M18 6 6 18" stroke={gfColors.text} strokeWidth={2} strokeLinecap="round" />
              </Svg>
            </Pressable>
            <Text style={styles.title}>Section {section.label}</Text>
            <View style={{ width: 32 }} />
          </View>

          {/* Legend harga per tier */}
          <View style={styles.tierLegend}>
            {Object.entries(PRICE_TIERS).map(([key, tier]) => (
              <View key={key} style={styles.tierItem}>
                <View style={[styles.tierDot, { backgroundColor: tier.color }]} />
                <Text style={styles.tierLabel}>
                  {tier.label} · Rp {(tier.price / 1000).toFixed(0)}K
                </Text>
              </View>
            ))}
          </View>

          <SeatGrid
            section={section}
            selectedIds={selected.map((s) => s.id)}
            onToggleSeat={handleToggle}
          />

          <View style={styles.footer}>
            <View>
              <Text style={styles.footerLabel}>{selected.length} kursi dipilih</Text>
              <Text style={styles.footerPrice}>Rp {total.toLocaleString("id-ID")}</Text>
            </View>
            <Pressable
              disabled={selected.length === 0}
              onPress={() => onConfirm(selected)}
              style={{ opacity: selected.length === 0 ? 0.4 : 1 }}
            >
              <LinearGradient colors={[gfColors.teal, gfColors.lime]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.payButton}>
                <Text style={styles.payText}>Bayar</Text>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
  sheet: { height: "88%", backgroundColor: gfColors.bg, borderTopLeftRadius: 24, borderTopRightRadius: 24, overflow: "hidden" },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingTop: 18, paddingBottom: 10 },
  closeBtn: { width: 32, height: 32, borderRadius: 16, backgroundColor: gfColors.surface, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 15, fontWeight: "800", color: gfColors.text },
  tierLegend: { flexDirection: "row", justifyContent: "center", gap: 16, paddingBottom: 12, flexWrap: "wrap" },
  tierItem: { flexDirection: "row", alignItems: "center", gap: 6 },
  tierDot: { width: 10, height: 10, borderRadius: 3 },
  tierLabel: { fontSize: 10.5, color: gfColors.textMuted },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: gfColors.border,
    backgroundColor: gfColors.surface,
  },
  footerLabel: { fontSize: 11, color: gfColors.textMuted },
  footerPrice: { fontSize: 16, fontWeight: "800", color: gfColors.text, marginTop: 2 },
  payButton: { paddingHorizontal: 32, height: 48, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  payText: { fontSize: 14, fontWeight: "700", color: "#10151D" },
});