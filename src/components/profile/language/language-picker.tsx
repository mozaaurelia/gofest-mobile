import React, { useState } from "react";
import { Languages } from "lucide-react-native";
import { LANGS, useI18n } from "../../../constants/i18n";
import ProfileMenuItem from "../profile-menu-item";
import LanguagePickerModal from "./language-picker-modal";

export default function LanguagePicker() {
  const { t, lang } = useI18n();
  const [modalVisible, setModalVisible] = useState(false);
  const langLabel = LANGS.find((l) => l.value === lang)?.label ?? "Id";

  return (
    <>
      <ProfileMenuItem icon={Languages} label={t("profileLanguage")} rightText={langLabel} onPress={() => setModalVisible(true)} />
      <LanguagePickerModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
}