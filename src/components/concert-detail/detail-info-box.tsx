import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Rect, Path, Circle } from "react-native-svg";
import { Concert } from "../../constants/home-data";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";

type DetailInfoBoxProps = { concert: Concert };

export default function DetailInfoBox({ concert }: DetailInfoBoxProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  return (
    <View style={styles.box}>
      <Row styles={styles} icon={<CalendarIcon color={c.textMuted} />} text={concert.date} />
      <Row styles={styles} icon={<ClockIcon color={c.textMuted} />} text={concert.time} />
      <Row styles={styles} icon={<PinIcon color={c.textMuted} />} text={`${concert.venue}, ${concert.city}`} />
    </View>
  );
}

function Row({ styles, icon, text }: { styles: ReturnType<typeof makeStyles>; icon: React.ReactNode; text: string }) {
  return (
    <View style={styles.row}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

function CalendarIcon({ color }: { color: string }) {
  return <Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><Rect x="4" y="5.5" width="16" height="14.5" rx="2" stroke={color} strokeWidth={1.8} /><Path d="M4 10h16M8 3.5v3M16 3.5v3" stroke={color} strokeWidth={1.8} strokeLinecap="round" /></Svg>;
}
function ClockIcon({ color }: { color: string }) {
  return <Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><Circle cx="12" cy="12" r="9" stroke={color} strokeWidth={1.8} /><Path d="M12 7v5l3.5 2" stroke={color} strokeWidth={1.8} strokeLinecap="round" /></Svg>;
}
function PinIcon({ color }: { color: string }) {
  return <Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><Path d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.1-6.5 11-6.5 11Z" stroke={color} strokeWidth={1.8} /><Circle cx="12" cy="10" r="2.2" stroke={color} strokeWidth={1.8} /></Svg>;
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    box: { backgroundColor: c.surface, borderRadius: 16, padding: 16, marginHorizontal: 20, marginTop: 16, gap: 10 },
    row: { flexDirection: "row", alignItems: "center", gap: 10 },
    text: { flex: 1, ...Typography.body, color: c.text },
  });
}