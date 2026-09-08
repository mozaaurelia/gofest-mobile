import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Hand } from "lucide-react-native";
import AuthInput from "./auth-input";
import AuthSubmitButton from "./auth-submit-button";
import SocialLoginRow from "./social-login-row";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";

export default function LoginForm() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    // TODO: hook ke auth logic / API
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.greetingRow}>
        <Text style={styles.greeting}>{t("authLoginGreeting")}</Text>
        <Hand size={20} color={c.text} strokeWidth={2.2} />
      </View>
      <Text style={styles.subGreeting}>{t("authLoginSub")}</Text>

      <AuthInput label={t("labelEmail")} placeholder={t("phEmail")} keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <AuthInput label={t("labelPassword")} placeholder={t("labelPassword")} isPassword value={password} onChangeText={setPassword} />

      <View style={{ marginTop: 4, marginBottom: 18 }}>
        <AuthSubmitButton label={t("loginButton")} onPress={handleSubmit} />
      </View>

      <SocialLoginRow />
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    wrap: { paddingHorizontal: 28, marginTop: 20 },
    greetingRow: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 4 },
    greeting: { fontSize: 20, fontWeight: "800", color: c.text },
    subGreeting: { fontSize: 12.5, color: c.textMuted, textAlign: "center", marginBottom: 18 },
  });
}