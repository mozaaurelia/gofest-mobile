import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthInput from "./auth-input";
import AuthSubmitButton from "./auth-submit-button";
import SocialLoginRow from "./social-login-row";
import { GfColors, useThemeColors } from "../../constants/gf-theme";

export default function LoginForm() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    // TODO: hook ke auth logic / API
  }

  return (
    <View style={styles.wrap}>
      <Text style={styles.greeting}>Halo lagi! 👋</Text>
      <Text style={styles.subGreeting}>Masuk buat lanjut cari fest favoritmu</Text>

      <AuthInput label="Email" placeholder="kamu@email.com" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <AuthInput label="Password" placeholder="Password" isPassword value={password} onChangeText={setPassword} />

      <View style={{ marginTop: 4, marginBottom: 18 }}>
        <AuthSubmitButton label="Masuk" onPress={handleSubmit} />
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