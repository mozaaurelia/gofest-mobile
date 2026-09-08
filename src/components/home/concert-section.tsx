import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Concert } from "../../constants/home-data";
import ConcertCard from "./concert-card";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";

type ConcertSectionProps = { title: string; data: Concert[] };

export default function ConcertSection({ title, data }: ConcertSectionProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();
  return (
    <View style={styles.wrap}>
      <View style={styles.headRow}>
        <Text style={styles.title}>{title}</Text>
        <Pressable>
          <Text style={styles.seeAll}>{t("seeAll")}</Text>
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

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    wrap: { marginTop: 22 },
    headRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 12 },
    title: { fontSize: 15.5, fontWeight: "800", color: c.text },
    seeAll: { fontSize: 11.5, fontWeight: "600", color: c.teal },
    list: { paddingHorizontal: 20, gap: 12 },
  });
}