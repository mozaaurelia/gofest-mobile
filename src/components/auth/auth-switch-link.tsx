import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

type AuthSwitchLinkProps = { question: string; actionLabel: string; href: "/auth/login" | "/auth/register" };

export default function AuthSwitchLink({ question, actionLabel, href }: AuthSwitchLinkProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  return (
    <View style={styles.wrap}>
      <Text style={styles.question}>
        {question} <Link href={href} style={styles.action}>{actionLabel}</Link>
      </Text>
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    wrap: { alignItems: "center", marginTop: 16, marginBottom: 24 },
    question: { fontSize: 12.5, color: c.textMuted },
    action: { fontWeight: "700", color: c.teal },
  });
}