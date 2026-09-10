import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { VENUE_SECTIONS, VenueSection } from "../../constants/seat-data";
import { gfColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

type VenueMapProps = { onSelectSection: (section: VenueSection) => void };

export default function VenueMap({ onSelectSection }: VenueMapProps) {
  return (
    <View style={styles.stage}>
      <View style={styles.stageBox}>
        <Text style={styles.stageText}>PANGGUNG</Text>
      </View>

      {VENUE_SECTIONS.map((s) => (
        <Pressable
          key={s.id}
          onPress={() => onSelectSection(s)}
          style={[
            styles.section,
            {
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.width}%`,
              height: `${s.height}%`,
              backgroundColor: s.color,
            },
          ]}
        >
          <Text style={styles.sectionLabel}>{s.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  stage: { height: 380, marginHorizontal: 20, position: "relative" },
  stageBox: {
    position: "absolute",
    top: "42%",
    left: "36%",
    width: "28%",
    height: "16%",
    backgroundColor: gfColors.bg,
    borderWidth: 1,
    borderColor: gfColors.border,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  stageText: { ...Typography.micro, color: gfColors.textMuted },
  section: { position: "absolute", borderRadius: 14, alignItems: "center", justifyContent: "center" },
  sectionLabel: { ...Typography.label, color: "#10151D" },
});