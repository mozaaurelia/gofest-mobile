import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import AuthInput from "./auth-input";
import AuthSubmitButton from "./auth-submit-button";
import SocialLoginRow from "./social-login-row";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

type FieldErrors = { name?: string; email?: string; password?: string };

export default function RegisterForm() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  function clearError(field: keyof FieldErrors) {
    setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));
  }

  function handleSubmit() {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Nama wajib diisi";
    if (!email.trim()) next.email = "Email wajib diisi";
    if (!password) next.password = "Password wajib diisi";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    router.replace("/home");
  }

  return (
    <View style={styles.wrap}>
      <Text style={styles.greeting}>Buat akun baru 🎉</Text>
      <Text style={styles.subGreeting}>Gabung sekarang, temukan konser favoritmu</Text>

      <AuthInput
        label="Nama"
        placeholder="Nama lengkap"
        value={name}
        onChangeText={(t) => { setName(t); clearError("name"); }}
        error={errors.name}
      />
      <AuthInput
        label="Email"
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(t) => { setEmail(t); clearError("email"); }}
        error={errors.email}
      />
      <AuthInput
        label="Password"
        placeholder="Password"
        isPassword
        value={password}
        onChangeText={(t) => { setPassword(t); clearError("password"); }}
        error={errors.password}
      />

      <View style={{ marginTop: 4, marginBottom: 18 }}>
        <AuthSubmitButton label="Daftar" onPress={handleSubmit} />
      </View>

      <SocialLoginRow />
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    wrap: { paddingHorizontal: 28, marginTop: 20 },
    greeting: { fontSize: 20, fontWeight: "800", color: c.text, textAlign: "center", marginBottom: 4 },
    subGreeting: { fontSize: 12.5, color: c.textMuted, textAlign: "center", marginBottom: 18 },
  });
}