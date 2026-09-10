import React, { useState } from "react";
import { ImageSourcePropType, StyleSheet, View, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

type DetailPosterProps = {
  from: string;
  to: string;
  image?: ImageSourcePropType;
};

const MIN_RATIO = 0.6;
const MAX_RATIO = 1.25;
const FALLBACK_RATIO = 0.75;

export default function DetailPoster({ from, to, image }: DetailPosterProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { width } = useWindowDimensions();
  const [ratio, setRatio] = useState<number | null>(null);

  const clamped = ratio == null ? FALLBACK_RATIO : Math.min(Math.max(ratio, MIN_RATIO), MAX_RATIO);
  const height = width * clamped;

  if (image) {
    return (
      <View style={[styles.wrap, { height }]}>
        <Image
          source={image}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
          transition={200}
          onLoad={(e) => {
            const w = e.source?.width;
            const h = e.source?.height;
            if (w && h) setRatio(h / w);
          }}
        />
      </View>
    );
  }

  return (
    <View style={[styles.wrap, { height }]}>
      <View style={[StyleSheet.absoluteFill, { backgroundColor: from }]} />
      <View style={[StyleSheet.absoluteFill, { backgroundColor: to, opacity: 0.5 }]} />
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    wrap: { width: "100%", backgroundColor: c.surface },
  });
}