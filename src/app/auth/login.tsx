import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../../components/auth/auth-header";
import LoginForm from "../../components/auth/login-form";
import AuthSwitchLink from "../../components/auth/auth-switch-link";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";

export default function LoginScreen() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AuthHeader />
        <LoginForm />
        <AuthSwitchLink question={t("loginQuestion")} actionLabel={t("loginAction")} href="/auth/register" />
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