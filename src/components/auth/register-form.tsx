import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { PartyPopper } from "lucide-react-native";
import AuthInput from "./auth-input";
import AuthSubmitButton from "./auth-submit-button";
import SocialLoginRow from "./social-login-row";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { Typography } from "../../constants/theme";
import { useI18n } from "../../constants/i18n";

type Gender = "" | "male" | "female";

type FieldErrors = { name?: string; email?: string; phone?: string; birthday?: string; gender?: string; password?: string };

export default function RegisterForm() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState<Gender>("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  function clearError(field: keyof FieldErrors) {
    setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));
  }

  function handleSubmit() {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = t("errFullName");
    if (!email.trim()) next.email = t("errEmail");
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone.trim()) next.phone = t("errPhone");
    else if (phoneDigits.length < 9 || phoneDigits.length > 15) next.phone = t("errPhoneInvalid");

    const d = parseInt(day, 10);
    const m = parseInt(month, 10);
    const y = parseInt(year, 10);
    const maxYear = new Date().getFullYear();
    const isValidBirthday =
      day.trim() !== "" && month.trim() !== "" && year.trim() !== "" && d >= 1 && d <= 31 && m >= 1 && m <= 12 && y >= 1900 && y <= maxYear;
    if (!isValidBirthday) next.birthday = t("errBirthDate");

    if (!gender) next.gender = t("errGender");
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
        label={t("labelFullName")}
        placeholder={t("phName")}
        value={name}
        onChangeText={(v) => { setName(v); clearError("name"); }}
        error={errors.name}
      />
      <AuthInput
        label={t("labelEmail")}
        placeholder={t("labelEmail")}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(v) => { setEmail(v); clearError("email"); }}
        error={errors.email}
      />
      <AuthInput
        label={t("labelPhone")}
        placeholder={t("phPhone")}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={(v) => { setPhone(v); clearError("phone"); }}
        error={errors.phone}
      />

      <View style={styles.fieldBlock}>
        <Text style={styles.sectionLabel}>{t("labelBirthDate")}</Text>
        <View style={styles.birthRow}>
          <AuthInput
            label={t("labelDay")}
            placeholder={t("phDay")}
            keyboardType="number-pad"
            maxLength={2}
            value={day}
            onChangeText={(v) => { setDay(v); clearError("birthday"); }}
            wrapperStyle={styles.birthInputSmall}
          />
          <AuthInput
            label={t("labelMonth")}
            placeholder={t("phMonth")}
            keyboardType="number-pad"
            maxLength={2}
            value={month}
            onChangeText={(v) => { setMonth(v); clearError("birthday"); }}
            wrapperStyle={styles.birthInputSmall}
          />
          <AuthInput
            label={t("labelYear")}
            placeholder={t("phYear")}
            keyboardType="number-pad"
            maxLength={4}
            value={year}
            onChangeText={(v) => { setYear(v); clearError("birthday"); }}
            wrapperStyle={styles.birthInputYear}
          />
        </View>
        {errors.birthday ? <Text style={styles.fieldError}>{errors.birthday}</Text> : null}
      </View>

      <View style={styles.fieldBlock}>
        <Text style={styles.sectionLabel}>{t("labelGender")}</Text>
        <View style={styles.genderRow}>
          <Pressable style={styles.genderOption} onPress={() => { setGender("female"); clearError("gender"); }}>
            <View style={[styles.radio, gender === "female" && styles.radioActive]}>
              {gender === "female" && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.genderText}>{t("female")}</Text>
          </Pressable>
          <Pressable style={styles.genderOption} onPress={() => { setGender("male"); clearError("gender"); }}>
            <View style={[styles.radio, gender === "male" && styles.radioActive]}>
              {gender === "male" && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.genderText}>{t("male")}</Text>
          </Pressable>
        </View>
        {errors.gender ? <Text style={styles.fieldError}>{errors.gender}</Text> : null}
      </View>

      <AuthInput
        label={t("labelPassword")}
        placeholder={t("labelPassword")}
        isPassword
        value={password}
        onChangeText={(v) => { setPassword(v); clearError("password"); }}
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
    greeting: { ...Typography.h2, color: c.text },
    subGreeting: { ...Typography.bodySmall, color: c.textMuted, textAlign: "center", marginBottom: 18 },
    fieldBlock: { marginBottom: 18 },
    sectionLabel: { ...Typography.label, color: c.text, marginBottom: 5 },
    birthRow: { flexDirection: "row", gap: 10 },
    birthInputSmall: { flex: 1 },
    birthInputYear: { flex: 1.6 },
    genderRow: { flexDirection: "row", gap: 10 },
    genderOption: { flex: 1, flexDirection: "row", alignItems: "center", gap: 8 },
    radio: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: c.border,
      alignItems: "center",
      justifyContent: "center",
    },
    radioActive: { borderColor: c.teal },
    radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: c.teal },
    genderText: { ...Typography.bodyMedium, color: c.text },
    fieldError: { ...Typography.caption, color: "#F2545B", marginTop: 4 },
  });
}