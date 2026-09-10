import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { PRICE_TIERS, Seat, VenueSection, generateSeatsForSection } from "../../constants/seat-data";
import { gfColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

type SeatGridProps = {
  section: VenueSection;
  selectedIds: string[];
  onToggleSeat: (seat: Seat) => void;
};

export default function SeatGrid({ section, selectedIds, onToggleSeat }: SeatGridProps) {
  const rows = generateSeatsForSection(section);

  return (
    <ScrollView contentContainerStyle={styles.wrap} showsVerticalScrollIndicator={false}>
      <Text style={styles.stageHint}>▲ Arah Panggung</Text>

      {rows.map((row, i) => (
        <View key={i} style={styles.row}>
          <Text style={styles.rowLabel}>{row[0]?.row}</Text>
          <View style={[styles.seatsRow, section.mirrored && { flexDirection: "row-reverse" }]}>
            {row.map((seat) => {
              const isSelected = selectedIds.includes(seat.id);
              const tierColor = PRICE_TIERS[seat.tier].color;

              return (
                <Pressable
                  key={seat.id}
                  disabled={seat.status === "unavailable"}
                  onPress={() => onToggleSeat(seat)}
                  style={[
                    styles.seat,
                    { backgroundColor: seat.status === "unavailable" ? gfColors.border : tierColor },
                    isSelected && styles.seatSelected,
                    seat.status === "unavailable" && styles.seatUnavailable,
                  ]}
                />
              );
            })}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 24, alignItems: "center" },
  stageHint: { ...Typography.micro, color: gfColors.textMuted, marginBottom: 12 },
  row: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 6 },
  rowLabel: { width: 16, ...Typography.micro, color: gfColors.textMuted, textAlign: "center" },
  seatsRow: { flexDirection: "row", gap: 6 },
  seat: { width: 18, height: 18, borderRadius: 5 },
  seatSelected: { borderWidth: 2, borderColor: "#FFFFFF" },
  seatUnavailable: { opacity: 0.35 },
});