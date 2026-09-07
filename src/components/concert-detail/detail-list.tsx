import React from "react";
import { StyleSheet, View } from "react-native";
import DetailListItem from "./detail-list-item";

const ITEMS = [
  { emoji: "🎫", title: "Info Penjualan Tiket", subtitle: "Jadwal & cara pembelian tiket", showBadge: true },
  { emoji: "📍", title: "Denah Kursi", subtitle: "Lihat dan cari kursi kamu", showBadge: true },
  { emoji: "🎟️", title: "Penukaran Wristband", subtitle: "Tukar wristband dulu biar nggak antre", showBadge: true },
  { emoji: "❓", title: "Ada Pertanyaan?", subtitle: "Jawaban cepat buat pertanyaanmu", showBadge: true },
  { emoji: "📣", title: "Panduan Event", subtitle: "Hal yang perlu disiapin sebelum hari-H", showBadge: true },
];

export default function DetailList() {
  return (
    <View style={styles.wrap}>
      {ITEMS.map((item) => (
        <DetailListItem key={item.title} {...item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 20, marginTop: 20 },
});