import React from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import ProfileMenuItem from "./profile-menu-item";
import { gfColors } from "../../constants/gf-theme";

export default function ProfileMenuList() {
  return (
    <View style={styles.wrap}>
      <View style={styles.group}>
        <ProfileMenuItem emoji="🌐" label="Bahasa" />
        <Divider />
        <ProfileMenuItem emoji="💬" label="Pusat Bantuan" />
      </View>

      <View style={styles.group}>
        <ProfileMenuItem emoji="🎪" label="Tentang Go fest!" />
        <Divider />
        <ProfileMenuItem emoji="📄" label="Syarat & Ketentuan" />
        <Divider />
        <ProfileMenuItem emoji="🛡️" label="Kebijakan Privasi" />
        <Divider />
        <ProfileMenuItem emoji="⭐" label="Beri Rating" rightText="v1.0.0" />
      </View>

      <View style={styles.group}>
        <ProfileMenuItem emoji="🚪" label="Keluar" danger onPress={() => router.replace("/auth/login")} />
      </View>
    </View>
  );
}

function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 20, marginTop: 8, gap: 20 },
  group: { backgroundColor: gfColors.surface, borderRadius: 16, paddingHorizontal: 14 },
  divider: { height: 1, backgroundColor: gfColors.border, marginLeft: 48 },
});