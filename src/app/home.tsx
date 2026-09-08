import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/home/home-header";
import HomeSearchBar from "../components/home/home-search-bar";
import CategoryPills from "../components/home/category-pills";
import FeaturedCarousel from "../components/home/featured-carousel";
import ConcertSection from "../components/home/concert-section";
import BottomNav from "../components/home/bottom-nav";
import { CATEGORIES, FEATURED_CONCERTS, POPULAR_CONCERTS, LATEST_CONCERTS, UPCOMING_CONCERTS, ALL_CONCERTS } from "../constants/home-data";
import { GfColors, useThemeColors } from "../constants/gf-theme";
import { useI18n } from "../constants/i18n";

const DEFAULT_CATEGORY = CATEGORIES[0];

export default function HomeScreen() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState(DEFAULT_CATEGORY);

  const isDefault = activeCategory === DEFAULT_CATEGORY;
  const featuredData = isDefault
    ? FEATURED_CONCERTS
    : FEATURED_CONCERTS.filter((concert) => concert.genre === activeCategory);
  const filteredAll = isDefault ? [] : ALL_CONCERTS.filter((concert) => concert.genre === activeCategory);
  const categoryLabel = activeCategory === "Populer" ? t("categoryPopular") : activeCategory;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <HomeSearchBar />
        <CategoryPills active={activeCategory} onChange={setActiveCategory} />
        {featuredData.length > 0 && <FeaturedCarousel data={featuredData} />}

        {isDefault ? (
          <>
            <ConcertSection title={t("sectionPopular")} data={POPULAR_CONCERTS} />
            <ConcertSection title={t("sectionLatest")} data={LATEST_CONCERTS} />
            <ConcertSection title={t("sectionUpcoming")} data={UPCOMING_CONCERTS} />
          </>
        ) : (
          <ConcertSection title={categoryLabel} data={filteredAll} />
        )}
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    safe: { flex: 1, backgroundColor: c.bg },
    content: { paddingBottom: 120 },
  });
}