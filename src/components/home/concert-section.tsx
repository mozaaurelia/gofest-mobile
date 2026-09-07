import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Concert } from "../../constants/home-data";
import ConcertCard from "./concert-card";
import { gfColors } from "../../constants/gf-theme";

type ConcertSectionProps = { title: string; data: Concert[] };

export default function ConcertSection({ title, data }: ConcertSectionProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.headRow}>
        <Text style={styles.title}>{title}</Text>
        <Pressable>
          <Text style={styles.seeAll}>Lihat semua</Text>
        </Pressable>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <ConcertCard concert={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginTop: 22 },
  headRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 12 },
  title: { fontSize: 15.5, fontWeight: "800", color: gfColors.text },
  seeAll: { fontSize: 11.5, fontWeight: "600", color: gfColors.teal },
  list: { paddingHorizontal: 20, gap: 12 },
});