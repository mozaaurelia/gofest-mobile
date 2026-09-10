import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Check, Languages } from "lucide-react-native";
import { GfColors, useThemeColors } from "../../constants/gf-theme";
import { LANGS, useI18n } from "../../constants/i18n";
import { Typography } from "../../constants/theme";

export default function HomeSearchBar() {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t, lang, setLang } = useI18n();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.row}>
      <View style={styles.searchBar}>
        <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
          <Circle_ color={c.textMuted} />
        </Svg>
        <TextInput
          placeholder={t("searchPlaceholder")}
          placeholderTextColor={c.textMuted}
          style={styles.input}
        />
      </View>

      <Pressable style={styles.langButton} onPress={() => setModalVisible(true)}>
        <Languages size={18} color={c.text} strokeWidth={1.8} />
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.backdrop} onPress={() => setModalVisible(false)}>
          <Pressable style={styles.sheet} onPress={() => {}}>
            <Text style={styles.sheetTitle}>{t("languageTitle")}</Text>
            {LANGS.map((option) => {
              const isActive = option.value === lang;
              return (
                <Pressable
                  key={option.value}
                  style={styles.langOption}
                  onPress={() => {
                    setLang(option.value);
                    setModalVisible(false);
                  }}
                >
                  <Text style={[styles.langLabel, isActive && styles.langLabelActive]}>{option.label}</Text>
                  {isActive && <Check size={16} color={c.teal} strokeWidth={2.2} />}
                </Pressable>
              );
            })}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

function Circle_({ color }: { color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
      <Path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke={color} strokeWidth={1.8} />
      <Path d="m20 20-3.2-3.2" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    row: { flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 20, marginTop: 18 },
    searchBar: { flex: 1, flexDirection: "row", alignItems: "center", gap: 8, backgroundColor: c.surface, borderRadius: 14, paddingHorizontal: 14, height: 46 },
    input: { flex: 1, ...Typography.input, color: c.text },
    langButton: { width: 46, height: 46, borderRadius: 14, backgroundColor: c.surface, alignItems: "center", justifyContent: "center" },
    backdrop: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", alignItems: "center", justifyContent: "center" },
    sheet: { width: "80%", backgroundColor: c.surface, borderRadius: 18, padding: 18 },
    sheetTitle: { ...Typography.h3, color: c.text, marginBottom: 10 },
    langOption: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 14, paddingHorizontal: 4, borderBottomWidth: 1, borderBottomColor: c.border },
    langLabel: { ...Typography.body, color: c.text },
    langLabelActive: { ...Typography.bodyMedium },
  });
}