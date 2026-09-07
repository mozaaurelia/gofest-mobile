import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

const TABS = ["home", "explore", "tickets", "profile"] as const;
type Tab = (typeof TABS)[number];

export default function BottomNav() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const [active, setActive] = useState<Tab>("home");

  return (
    <View style={styles.wrap}>
      {TABS.map((tab) => {
        const isActive = tab === active;
        return (
          <Pressable key={tab} onPress={() => setActive(tab)} style={styles.item}>
            <View style={[styles.iconWrap, isActive && styles.iconWrapActive]}>
              <TabGlyph tab={tab} active={isActive} mutedColor={c.textMuted} />
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

function TabGlyph({ tab, active, mutedColor }: { tab: Tab; active: boolean; mutedColor: string }) {
  const color = active ? "#10151D" : mutedColor;
  const common = { viewBox: "0 0 24 24", width: 20, height: 20, fill: "none" as const };

  switch (tab) {
    case "home":
      return <Svg {...common}><Path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-8Z" stroke={color} strokeWidth={1.8} strokeLinejoin="round" /></Svg>;
    case "explore":
      return <Svg {...common}><Path d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.1-6.5 11-6.5 11Z" stroke={color} strokeWidth={1.8} /><Path d="M12 8v8M8 12h8" stroke={color} strokeWidth={1.8} strokeLinecap="round" /></Svg>;
    case "tickets":
      return <Svg {...common}><Path d="M4 8.5 8 4.5a2 2 0 0 1 2.8 0l8.7 8.7a2 2 0 0 1 0 2.8L15.5 20a2 2 0 0 1-2.8 0L4 11.3a2 2 0 0 1 0-2.8Z" stroke={color} strokeWidth={1.8} strokeLinejoin="round" /></Svg>;
    case "profile":
      return <Svg {...common}><Path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke={color} strokeWidth={1.8} /><Path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke={color} strokeWidth={1.8} strokeLinecap="round" /></Svg>;
  }
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    wrap: {
      position: "absolute",
      bottom: 24,
      left: 24,
      right: 24,
      height: 64,
      borderRadius: 32,
      backgroundColor: c.surface,
      borderWidth: 1,
      borderColor: c.border,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowRadius: 16,
      shadowOffset: { width: 0, height: 8 },
      elevation: 10,
    },
    item: { flex: 1, alignItems: "center", justifyContent: "center" },
    iconWrap: { width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" },
    iconWrapActive: { backgroundColor: c.text },
  });
}