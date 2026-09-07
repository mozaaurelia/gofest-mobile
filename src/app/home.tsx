import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/home/home-header";
import HomeSearchBar from "../components/home/home-search-bar";
import CategoryPills from "../components/home/category-pills";
import FeaturedCarousel from "../components/home/featured-carousel";
import ConcertSection from "../components/home/concert-section";
import BottomNav from "../components/home/bottom-nav";
import { FEATURED_CONCERTS, POPULAR_CONCERTS, LATEST_CONCERTS, UPCOMING_CONCERTS } from "../constants/home-data";
import { gfColors } from "../constants/gf-theme";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <HomeSearchBar />
        <CategoryPills />
        <FeaturedCarousel data={FEATURED_CONCERTS} />
        <ConcertSection title="Konser Populer" data={POPULAR_CONCERTS} />
        <ConcertSection title="Konser Terbaru" data={LATEST_CONCERTS} />
        <ConcertSection title="Konser Mendatang" data={UPCOMING_CONCERTS} />
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: gfColors.bg },
  content: { paddingBottom: 120 },
});