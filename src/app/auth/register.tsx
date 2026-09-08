import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../../components/auth/auth-header";
import RegisterForm from "../../components/auth/register-form";
import AuthSwitchLink from "../../components/auth/auth-switch-link";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";

export default function RegisterScreen() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AuthHeader />
        <RegisterForm />
        <AuthSwitchLink question={t("registerQuestion")} actionLabel={t("registerAction")} href="/auth/login" />
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