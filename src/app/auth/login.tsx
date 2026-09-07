import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../../components/auth/auth-header";
import TicketPreviewCard from "../../components/auth/ticket-preview-card";
import LoginForm from "../../components/auth/login-form";
import AuthSwitchLink from "../../components/auth/auth-switch-link";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

export default function LoginScreen() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AuthHeader />
        <TicketPreviewCard />
        <LoginForm />
        <AuthSwitchLink question="Belum punya akun?" actionLabel="Daftar di sini" href="/auth/register" />
      </ScrollView>
    </SafeAreaView>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    safe: { flex: 1, backgroundColor: c.bg },
    content: { paddingBottom: 40 },
  });
}