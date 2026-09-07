import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";

export default function SocialLoginRow() {
  return (
    <View style={styles.wrap}>
      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Atau lanjutkan dengan</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.buttonsRow}>
        <Pressable style={styles.socialBtn}><Text style={styles.socialLabel}>G</Text></Pressable>
        <Pressable style={styles.socialBtn}><Text style={styles.socialLabel}>f</Text></Pressable>
        <Pressable style={styles.socialBtn}><Text style={styles.socialLabel}></Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginTop: 4, marginBottom: 8 },
  dividerRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 14 },
  line: { flex: 1, height: 1, backgroundColor: gfColors.border },
  dividerText: { fontSize: 11, color: gfColors.textMuted },
  buttonsRow: { flexDirection: "row", justifyContent: "center", gap: 12 },
  socialBtn: { width: 44, height: 44, borderRadius: 12, borderWidth: 1, borderColor: gfColors.border, backgroundColor: gfColors.surface, alignItems: "center", justifyContent: "center" },
  socialLabel: { fontSize: 15, fontWeight: "700", color: gfColors.text },
});