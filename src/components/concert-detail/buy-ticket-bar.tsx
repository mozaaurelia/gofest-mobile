import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";
import { Concert } from "../../constants/home-data";
import { useSavedTickets } from "../../hooks/use-saved-tickets";

type Props = { concert: Concert };

export default function BuyTicketBar({ concert }: Props) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();
  const { isSaved, toggleSave } = useSavedTickets();
  const saved = isSaved(concert.id);

  const handleToggleSave = () => {
    toggleSave({
      id: `saved-${concert.id}`,
      concertId: concert.id,
      name: concert.name,
      venue: concert.venue,
      city: concert.city,
      date: concert.date,
      time: concert.time,
      price: concert.price,
      image: concert.image,
      from: concert.from,
      to: concert.to,
    });
  };

  return (
    <View style={styles.wrap}>
      <Pressable style={[styles.bookmark, saved && styles.bookmarkActive]} onPress={handleToggleSave}>
        <Svg viewBox="0 0 24 24" width={18} height={18} fill={saved ? c.text : "none"}>
          <Path d="M6 4h12v16l-6-4-6 4V4Z" stroke={c.text} strokeWidth={1.8} strokeLinejoin="round" />
        </Svg>
      </Pressable>

      <Pressable style={{ flex: 1 }}>
        <LinearGradient colors={[c.teal, c.lime]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.button}>
          <TicketGlyph />
          <Text style={styles.buttonText}>{t("buyTicket")}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

function TicketGlyph() {
  return (
    <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
      <Path d="M4 8.5 8 4.5a2 2 0 0 1 2.8 0l8.7 8.7a2 2 0 0 1 0 2.8L15.5 20a2 2 0 0 1-2.8 0L4 11.3a2 2 0 0 1 0-2.8Z" stroke="#10151D" strokeWidth={1.8} strokeLinejoin="round" />
    </Svg>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    wrap: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 20, paddingTop: 12, paddingBottom: 24, borderTopWidth: 1, borderTopColor: c.border, backgroundColor: c.bg },
    bookmark: { width: 52, height: 52, borderRadius: 16, borderWidth: 1, borderColor: c.border, alignItems: "center", justifyContent: "center" },
    bookmarkActive: { backgroundColor: c.text + "18" },
    button: { height: 52, borderRadius: 16, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 },
    buttonText: { fontSize: 14, fontWeight: "700", color: "#10151D" },
  });
}
