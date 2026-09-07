import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { gfColors } from "../../constants/gf-theme";

type AuthInputProps = TextInputProps & { label: string; isPassword?: boolean; error?: string };

export default function AuthInput({ label, isPassword, error, ...rest }: AuthInputProps) {
  const [focused, setFocused] = useState(false);
  const [secure, setSecure] = useState(!!isPassword);

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputRow, focused && styles.inputRowFocused, error && styles.inputRowError]}>
        <TextInput
          {...rest}
          secureTextEntry={secure}
          placeholderTextColor={gfColors.textMuted}
          onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
          style={styles.input}
        />
        {isPassword && (
          <Pressable onPress={() => setSecure((v) => !v)} hitSlop={10}>
            <Text style={styles.toggleText}>{secure ? "Lihat" : "Sembunyikan"}</Text>
          </Pressable>
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 14 },
  label: { fontSize: 12.5, fontWeight: "700", color: gfColors.text, marginBottom: 5 },
  inputRow: { flexDirection: "row", alignItems: "center", borderRadius: 12, borderWidth: 1, borderColor: gfColors.border, backgroundColor: gfColors.surface, paddingHorizontal: 14 },
  inputRowFocused: { borderColor: gfColors.teal },
  inputRowError: { borderColor: gfColors.danger },
  input: { flex: 1, height: 46, fontSize: 13.5, color: gfColors.text },
  toggleText: { fontSize: 11, fontWeight: "600", color: gfColors.teal },
  errorText: { fontSize: 11.5, color: gfColors.danger, marginTop: 5 },
});