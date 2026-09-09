import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { TKey, useI18n } from "../../constants/i18n";

type AboutStat = { valueKey: TKey; labelKey: TKey };

const STATS: AboutStat[] = [
  { valueKey: "aboutStatConcerts", labelKey: "aboutStatConcertsLabel" },
  { valueKey: "aboutStatCities", labelKey: "aboutStatCitiesLabel" },
  { valueKey: "aboutStatUsers", labelKey: "aboutStatUsersLabel" },
];

export default function AboutStats() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();

  return (
    <View style={styles.card}>
      {STATS.map((stat, i) => {
        const isLast = i === STATS.length - 1;
        return (
          <View key={stat.valueKey} style={[styles.stat, !isLast && styles.statBorder]}>
            <Text style={styles.value}>{t(stat.valueKey)}</Text>
            <Text style={styles.label} numberOfLines={1}>
              {t(stat.labelKey)}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    card: {
      flexDirection: "row",
      marginHorizontal: 20,
      marginTop: 16,
      backgroundColor: c.surface,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: c.border,
      paddingVertical: 18,
    },
    stat: { flex: 1, alignItems: "center" },
    statBorder: { borderRightWidth: 1, borderRightColor: c.border },
    value: { fontSize: 20, fontWeight: "800", color: c.text },
    label: { fontSize: 11, color: c.textMuted, marginTop: 4, textAlign: "center", paddingHorizontal: 6 },
  });
}