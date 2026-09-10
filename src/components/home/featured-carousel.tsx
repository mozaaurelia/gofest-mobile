import React, { useEffect, useRef, useState } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import Svg, { Path } from "react-native-svg";
import { Concert } from "../../constants/home-data";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";
import { Typography } from "../../constants/theme";

type FeaturedCarouselProps = { data: Concert[] };

const SIDE_PADDING = 20;

/**
 * FeaturedCarousel - banner auto-jalan sendiri (tiap 2 detik), ada
 * tombol panah kiri-kanan buat kontrol manual, dan dots di bawah.
 * Auto-jalan berhenti sementara saat kursor hover di area carousel.
 */
export default function FeaturedCarousel({ data }: FeaturedCarouselProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { width } = useWindowDimensions();
  const cardWidth = width - SIDE_PADDING * 2;
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<FlatList>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function goTo(index: number) {
    const clamped = (index + data.length) % data.length;
    listRef.current?.scrollToIndex({ index: clamped, animated: true });
    setActiveIndex(clamped);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % data.length;
        listRef.current?.scrollToIndex({ index: next, animated: true });
        return next;
      });
    }, 2000);
  }

  function stopAutoPlay() {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  }

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [data.length]);

  function onMomentumScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const index = Math.round(e.nativeEvent.contentOffset.x / cardWidth);
    setActiveIndex(index);
    startAutoPlay(); // reset timer abis user interaksi manual
  }

  function handleArrow(direction: -1 | 1) {
    stopAutoPlay();
    goTo(activeIndex + direction);
    startAutoPlay();
  }

  function handleHoverIn() {
    stopAutoPlay();
  }

  function handleHoverOut() {
    startAutoPlay();
  }

  return (
    <View style={styles.wrap} onPointerEnter={handleHoverIn} onPointerLeave={handleHoverOut}>
      <FlatList
        ref={listRef}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={cardWidth}
        decelerationRate="fast"
        getItemLayout={(_, index) => ({ length: cardWidth, offset: cardWidth * index, index })}
        onScrollToIndexFailed={(info) => {
          listRef.current?.scrollToOffset({ offset: info.index * cardWidth, animated: true });
        }}
        contentContainerStyle={{ paddingHorizontal: SIDE_PADDING }}
        onMomentumScrollEnd={onMomentumScrollEnd}
        renderItem={({ item }) => <BannerSlide concert={item} width={cardWidth} />}
      />

      {/* Tombol panah */}
      <Pressable onPress={() => handleArrow(-1)} style={[styles.arrow, styles.arrowLeft]}>
        <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
          <Path d="M15 6l-6 6 6 6" stroke="#FFFFFF" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>
      <Pressable onPress={() => handleArrow(1)} style={[styles.arrow, styles.arrowRight]}>
        <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
          <Path d="M9 6l6 6-6 6" stroke="#FFFFFF" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </Pressable>

      {/* Dots */}
      <View style={styles.dots}>
        {data.map((_, i) => (
          <View key={i} style={[styles.dot, i === activeIndex && styles.dotActive]} />
        ))}
      </View>
    </View>
  );
}

function BannerSlide({ concert, width }: { concert: Concert; width: number }) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();
  return (
    <Pressable style={[styles.card, { width }]} onPress={() => router.push({ pathname: "/concert/[id]", params: { id: concert.id } })}>
      <View style={styles.poster}>
        {concert.image ? (
          <Image source={concert.image} style={styles.posterImage} contentFit="cover" transition={150} />
        ) : (
          <View style={styles.dateBadge}>
            <Text style={styles.dateDay}>{concert.day}</Text>
            <Text style={styles.dateMonth}>{concert.month}</Text>
          </View>
        )}
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{concert.name}</Text>
        <Text style={styles.meta}>{concert.venue}, {concert.city}</Text>

        <View style={styles.footerRow}>
          <View>
            <Text style={styles.priceLabel}>{t("priceFrom")}</Text>
            <Text style={styles.price}>{concert.price}</Text>
          </View>
          <Pressable style={styles.cta} onPress={() => router.push({ pathname: "/concert/[id]", params: { id: concert.id } })}>
            <Text style={styles.ctaText}>{t("viewConcert")}</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    wrap: { marginTop: 20 },
    card: { borderRadius: 22, overflow: "hidden", backgroundColor: c.surface, borderWidth: 1, borderColor: c.border },
    poster: { aspectRatio: 16 / 9 },
    posterImage: { width: "100%", height: "100%" },
    dateBadge: { position: "absolute", left: 14, top: 14, backgroundColor: "rgba(0,0,0,0.35)", borderRadius: 12, paddingHorizontal: 10, paddingVertical: 6, alignItems: "center" },
    dateDay: { ...Typography.title, color: "#FFFFFF" },
    dateMonth: { ...Typography.micro, color: "#FFFFFF", opacity: 0.85 },
    info: { padding: 16 },
    name: { ...Typography.title, color: c.text },
    meta: { ...Typography.caption, color: c.textMuted, marginTop: 3 },
    footerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 14 },
    priceLabel: { ...Typography.caption, color: c.textMuted },
    price: { ...Typography.price, color: c.text, marginTop: 2 },
    cta: { backgroundColor: c.text, paddingHorizontal: 18, height: 42, borderRadius: 12, alignItems: "center", justifyContent: "center" },
    ctaText: { ...Typography.buttonSmall, color: "#FFFFFF" },
    arrow: {
      position: "absolute",
      top: 65,
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: "rgba(0,0,0,0.35)",
      alignItems: "center",
      justifyContent: "center",
    },
    arrowLeft: { left: 30 },
    arrowRight: { right: 30 },
    dots: { flexDirection: "row", justifyContent: "center", gap: 6, marginTop: 12 },
    dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: c.border },
    dotActive: { width: 18, backgroundColor: c.lime },
  });
}