import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getConcertById } from "../../constants/home-data";
import DetailHeader from "../../components/concert-detail/detail-header";
import DetailPoster from "../../components/concert-detail/detail-poster";
import PromoBanner from "../../components/concert-detail/promo-banner";
import DetailInfoBox from "../../components/concert-detail/detail-info-box";
import DetailList from "../../components/concert-detail/detail-list";
import BuyTicketBar from "../../components/concert-detail/buy-ticket-bar";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

export default function ConcertDetailScreen() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { id } = useLocalSearchParams<{ id: string }>();
  const concert = getConcertById(id);

  if (!concert) return null; // TODO: state "konser nggak ditemukan"

  return (
    <View style={styles.container}>
      <DetailHeader title={concert.name} />

      <ScrollView bounces contentContainerStyle={styles.scrollContent}>
        <DetailPoster from={concert.from} to={concert.to} image={concert.image} />

        <View style={styles.sheet}>
          <PromoBanner />
          <View style={styles.dragHandle} />

          <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
            <DetailInfoBox concert={concert} />
            <DetailList concertId={id} />
          </SafeAreaView>
        </View>
      </ScrollView>

      <BuyTicketBar />
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: c.bg },
    scrollContent: { flexGrow: 1 },
    sheet: {
      flex: 1,
      backgroundColor: c.bg,
      marginTop: -28,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      overflow: "hidden",
    },
    dragHandle: {
      alignSelf: "center",
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: c.border,
      marginTop: 10,
      marginBottom: 4,
    },
  });
}