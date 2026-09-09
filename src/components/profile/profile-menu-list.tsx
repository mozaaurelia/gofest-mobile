import React from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { CircleHelp, FileText, LogOut, ShieldCheck, Star, Info } from "lucide-react-native";
import ProfileMenuItem from "./profile-menu-item";
import ProfileSocialFooter from "./profile-social-footer";
import { gfColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";
import LanguagePicker from "./language";

export default function ProfileMenuList() {
  const { t } = useI18n();
  return (
    <View style={styles.wrap}>
      <View style={styles.group}>
        <LanguagePicker />
        <Divider />
        <ProfileMenuItem icon={CircleHelp} label="Pusat Bantuan" />
      </View>

      <View style={styles.group}>
        <ProfileMenuItem icon={Info} label={t("aboutTitle")} onPress={() => router.push("/about")} />
        <Divider />
        <ProfileMenuItem icon={FileText} label="Syarat & Ketentuan" />
        <Divider />
        <ProfileMenuItem icon={ShieldCheck} label="Kebijakan Privasi" />
        <Divider />
        <ProfileMenuItem icon={Star} label="Beri Rating" rightText="v1.0.0" />
      </View>

      <View style={styles.group}>
        <ProfileMenuItem icon={LogOut} label="Keluar" danger onPress={() => router.replace("/auth/login")} />
      </View>

      <ProfileSocialFooter />
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