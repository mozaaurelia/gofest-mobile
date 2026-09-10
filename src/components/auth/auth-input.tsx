import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TextInputProps, View, StyleProp, ViewStyle } from "react-native";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { useI18n } from "../../constants/i18n";

type AuthInputProps = TextInputProps & { label: string; isPassword?: boolean; error?: string; wrapperStyle?: StyleProp<ViewStyle> };

export default function AuthInput({ label, isPassword, error, wrapperStyle, ...rest }: AuthInputProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();
  const [focused, setFocused] = useState(false);
  const [secure, setSecure] = useState(!!isPassword);

  return (
    <View style={[styles.wrap, wrapperStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputRow, focused && styles.inputRowFocused, error && styles.inputRowError]}>
        <TextInput
          {...rest}
          secureTextEntry={secure}
          placeholderTextColor={c.textMuted}
          onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
          style={styles.input}
        />
        {isPassword && (
          <Pressable onPress={() => setSecure((v) => !v)} hitSlop={10}>
            <Text style={styles.toggleText}>{secure ? t("inputShow") : t("inputHide")}</Text>
          </Pressable>
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    wrap: { marginBottom: 14 },
    label: { fontSize: 12.5, fontWeight: "700", color: c.text, marginBottom: 5 },
    inputRow: { flexDirection: "row", alignItems: "center", borderRadius: 12, borderWidth: 1, borderColor: c.border, backgroundColor: c.surface, paddingHorizontal: 14 },
    inputRowFocused: { borderColor: c.teal },
    inputRowError: { borderColor: c.danger },
    input: { flex: 1, height: 46, fontSize: 13.5, color: c.text },
    toggleText: { fontSize: 11, fontWeight: "600", color: c.teal },
    errorText: { fontSize: 11.5, color: c.danger, marginTop: 5 },
  });
}