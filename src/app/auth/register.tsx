import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../../components/auth/auth-header";
import TicketPreviewCard from "../../components/auth/ticket-preview-card";
import RegisterForm from "../../components/auth/register-form";
import AuthSwitchLink from "../../components/auth/auth-switch-link";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

export default function RegisterScreen() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AuthHeader />
        <TicketPreviewCard />
        <RegisterForm />
        <AuthSwitchLink question="Sudah punya akun?" actionLabel="Masuk di sini" href="/auth/login" />
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