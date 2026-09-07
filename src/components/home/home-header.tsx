import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { Moon, Sun } from "lucide-react-native";
import { GfColors, useTheme, useThemeColors } from "../../constants/gf-theme";

export default function HomeHeader() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { scheme, toggleScheme } = useTheme();

  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.greeting}>Halo, Fajar 👋</Text>
        <Text style={styles.location}>Jakarta, Indonesia</Text>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.iconButton} onPress={toggleScheme}>
          {scheme === "dark" ? (
            <Sun size={18} color={c.text} strokeWidth={1.8} />
          ) : (
            <Moon size={18} color={c.text} strokeWidth={1.8} />
          )}
        </Pressable>
        <View style={styles.iconButton}>
          <Svg viewBox="0 0 24 24" width={18} height={18} fill="none">
            <Path d="M6 8a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 12 6 8Z" stroke={c.text} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M9.5 17a2.5 2.5 0 0 0 5 0" stroke={c.text} strokeWidth={1.8} strokeLinecap="round" />
          </Svg>
          <View style={styles.dot} />
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarLabel}>F</Text>
        </View>
      </View>
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 8 },
    greeting: { fontSize: 17, fontWeight: "800", color: c.text },
    location: { fontSize: 12, color: c.textMuted, marginTop: 2 },
    actions: { flexDirection: "row", alignItems: "center", gap: 10 },
    iconButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: c.surface, alignItems: "center", justifyContent: "center" },
    dot: { position: "absolute", top: 9, right: 10, width: 6, height: 6, borderRadius: 3, backgroundColor: c.lime },
    avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: c.surface, borderWidth: 1, borderColor: c.border, alignItems: "center", justifyContent: "center" },
    avatarLabel: { fontSize: 14, fontWeight: "700", color: c.text },
  });
}