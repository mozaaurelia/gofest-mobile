import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import { getConcertById } from "../../constants/home-data";
import { VenueSection, Seat } from "../../constants/seat-data";
import VenueMap from "../../components/buy-ticket/venue-map";
import VenueLegend from "../../components/buy-ticket/venue-legend";
import SeatSelectionModal from "../../components/buy-ticket/seat-selection-modal";
import { gfColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

export default function SeatsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const concert = getConcertById(id);
  const [activeSection, setActiveSection] = useState<VenueSection | null>(null);
  const [confirmedSeats, setConfirmedSeats] = useState<Seat[]>([]);

  function handleConfirm(seats: Seat[]) {
    setConfirmedSeats(seats);
    setActiveSection(null);
    // TODO: lanjut ke halaman checkout/pembayaran
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.backArrow} onPress={() => router.back()}>
          <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
            <Path d="M15 6l-6 6 6 6" stroke={gfColors.text} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Text>
        <View>
          <Text style={styles.title}>{concert?.name ?? "Pilih Kursi"}</Text>
          <Text style={styles.subtitle}>{concert?.date}, {concert?.time}</Text>
        </View>
      </View>

      <VenueLegend />
      <VenueMap onSelectSection={setActiveSection} />

      {confirmedSeats.length > 0 && (
        <View style={styles.summaryBar}>
          <Text style={styles.summaryText}>{confirmedSeats.length} kursi terpilih</Text>
        </View>
      )}

      <SeatSelectionModal
        section={activeSection}
        onClose={() => setActiveSection(null)}
        onConfirm={handleConfirm}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: gfColors.bg },
  header: { flexDirection: "row", alignItems: "center", gap: 14, paddingHorizontal: 20, paddingTop: 12, paddingBottom: 8 },
  backArrow: { width: 32, height: 32 },
  title: { ...Typography.titleSmall, color: gfColors.text },
  subtitle: { ...Typography.caption, color: gfColors.textMuted, marginTop: 2 },
  summaryBar: { position: "absolute", bottom: 24, left: 20, right: 20, backgroundColor: gfColors.surface, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: gfColors.border },
  summaryText: { ...Typography.bodyMedium, color: gfColors.text, textAlign: "center" },
});