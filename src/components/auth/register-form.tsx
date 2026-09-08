import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { PartyPopper } from "lucide-react-native";
import AuthInput from "./auth-input";
import AuthSubmitButton from "./auth-submit-button";
import SocialLoginRow from "./social-login-row";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";

type FieldErrors = { name?: string; email?: string; password?: string };

export default function RegisterForm() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  function clearError(field: keyof FieldErrors) {
    setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));
  }

  function handleSubmit() {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = t("errName");
    if (!email.trim()) next.email = t("errEmail");
    if (!password) next.password = t("errPassword");
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    router.replace("/home");
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.greetingRow}>
        <Text style={styles.greeting}>{t("authRegisterGreeting")}</Text>
        <PartyPopper size={20} color={c.text} strokeWidth={2.2} />
      </View>
      <Text style={styles.subGreeting}>{t("authRegisterSub")}</Text>

      <AuthInput
        label={t("labelName")}
        placeholder={t("phName")}
        value={name}
        onChangeText={(t2) => { setName(t2); clearError("name"); }}
        error={errors.name}
      />
      <AuthInput
        label={t("labelEmail")}
        placeholder={t("labelEmail")}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(t2) => { setEmail(t2); clearError("email"); }}
        error={errors.email}
      />
      <AuthInput
        label={t("labelPassword")}
        placeholder={t("labelPassword")}
        isPassword
        value={password}
        onChangeText={(t2) => { setPassword(t2); clearError("password"); }}
        error={errors.password}
      />

      <View style={{ marginTop: 4, marginBottom: 18 }}>
        <AuthSubmitButton label={t("registerButton")} onPress={handleSubmit} />
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