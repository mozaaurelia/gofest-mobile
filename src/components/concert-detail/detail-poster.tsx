import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View, useWindowDimensions } from "react-native";
import { gfColors } from "../../constants/gf-theme";

type DetailPosterProps = {
  from: string;
  to: string;
  image?: ImageSourcePropType;
};

export default function DetailPoster({ from, to, image }: DetailPosterProps) {
  const { width } = useWindowDimensions();
  const height = width * 1.1;

  if (image) {
    return (
      <View style={[styles.wrap, { height }]}>
        <Image source={image} style={StyleSheet.absoluteFill} resizeMode="cover" />
      </View>
    );
  }

  // Fallback kalau belum ada gambar - gradient warna
  return (
    <View style={[styles.wrap, { height }]}>
      <View style={[StyleSheet.absoluteFill, { backgroundColor: from }]} />
      <View style={[StyleSheet.absoluteFill, { backgroundColor: to, opacity: 0.5 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: "100%", backgroundColor: gfColors.surface },
});