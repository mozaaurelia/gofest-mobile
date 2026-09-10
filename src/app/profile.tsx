import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../components/profile/profile-header";
import ProfileMenuList from "../components/profile/profile-menu-list";
import BottomNav from "../components/home/bottom-nav";
import { gfColors } from "../constants/gf-theme";
import { Typography } from "../constants/theme";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Akun</Text>
        <ProfileHeader />
        <ProfileMenuList />
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: gfColors.bg },
  content: { paddingBottom: 120 },
  pageTitle: { ...Typography.h2, color: gfColors.text, paddingHorizontal: 20, marginBottom: 12 },
});