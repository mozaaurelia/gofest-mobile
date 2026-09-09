import React from "react";
import { Modal, Pressable, StyleSheet, Text } from "react-native";
import { GfColors, useThemeColors } from "../../../constants/gf-theme";
import { LANGS, useI18n } from "../../../constants/i18n";
import LanguagePickerOption from "./language-picker-option";

type LanguagePickerModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function LanguagePickerModal({ visible, onClose }: LanguagePickerModalProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const { t } = useI18n();

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={() => {}}>
          <Text style={styles.sheetTitle}>{t("languageTitle")}</Text>
          {LANGS.map((lang) => (
            <LanguagePickerOption key={lang.value} value={lang.value} label={lang.label} onSelect={onClose} />
          ))}
        </Pressable>
      </Pressable>
    </Modal>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    backdrop: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", alignItems: "center", justifyContent: "center" },
    sheet: { width: "80%", backgroundColor: c.surface, borderRadius: 18, padding: 18 },
    sheetTitle: { fontSize: 15, fontWeight: "800", color: c.text, marginBottom: 10 },
  });
}