import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import Svg, { Path, Rect } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

export default function ProfileHeader() {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);
  const [name, setName] = useState("Fajar Saputra");
  const [editingName, setEditingName] = useState(false);

  async function handlePickPhoto() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setAvatarUri(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.wrap}>
      <LinearGradient colors={[gfColors.teal, gfColors.lime]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.gradient}>
        {/* Dekorasi bentuk geometris */}
        <Svg style={styles.deco1} width={26} height={26} viewBox="0 0 24 24" fill="none"><Path d="M12 3 21 19H3L12 3Z" stroke="#FFFFFF" strokeOpacity={0.35} strokeWidth={1.8} strokeLinejoin="round" /></Svg>
        <Svg style={styles.deco2} width={18} height={18} viewBox="0 0 24 24" fill="none"><Path d="M5 5l14 14M19 5 5 19" stroke="#FFFFFF" strokeOpacity={0.35} strokeWidth={2} strokeLinecap="round" /></Svg>
        <Svg style={styles.deco3} width={22} height={22} viewBox="0 0 24 24" fill="none"><Path d="M4 12a8 8 0 0 1 16 0Z" stroke="#FFFFFF" strokeOpacity={0.3} strokeWidth={1.8} /></Svg>
      </LinearGradient>

      {/* Sheet putih/gelap melengkung nutupin bawah gradient */}
      <View style={styles.sheet}>
        <Pressable onPress={handlePickPhoto} style={styles.avatarWrap}>
          {avatarUri ? (
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, styles.avatarPlaceholder]}>
              <Text style={styles.avatarInitial}>{name.charAt(0)}</Text>
            </View>
          )}
          <View style={styles.editBadge}>
            <Svg viewBox="0 0 24 24" width={12} height={12} fill="none">
              <Path d="M4 20h4L18.5 9.5a2 2 0 0 0 0-2.8l-1.2-1.2a2 2 0 0 0-2.8 0L4 15v5Z" stroke="#10151D" strokeWidth={1.8} strokeLinejoin="round" />
            </Svg>
          </View>
        </Pressable>

        {editingName ? (
          <TextInput
            value={name}
            onChangeText={setName}
            onBlur={() => setEditingName(false)}
            autoFocus
            style={styles.nameInput}
          />
        ) : (
          <Pressable onPress={() => setEditingName(true)} style={styles.nameRow}>
            <Text style={styles.name}>{name}</Text>
            <Svg viewBox="0 0 24 24" width={13} height={13} fill="none">
              <Path d="M4 20h4L18.5 9.5a2 2 0 0 0 0-2.8l-1.2-1.2a2 2 0 0 0-2.8 0L4 15v5Z" stroke={gfColors.textMuted} strokeWidth={1.8} strokeLinejoin="round" />
            </Svg>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { backgroundColor: gfColors.bg },
  gradient: { height: 150 },
  deco1: { position: "absolute", top: 30, right: 40 },
  deco2: { position: "absolute", top: 90, right: 90 },
  deco3: { position: "absolute", top: 45, right: 110, opacity: 0.7 },
  sheet: {
    marginTop: -32,
    backgroundColor: gfColors.bg,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    alignItems: "center",
    paddingTop: 4,
    paddingBottom: 20,
  },
  avatarWrap: { marginTop: -44 },
  avatar: { width: 88, height: 88, borderRadius: 44, borderWidth: 4, borderColor: gfColors.bg },
  avatarPlaceholder: { backgroundColor: gfColors.surface, alignItems: "center", justifyContent: "center" },
  avatarInitial: { fontSize: 30, fontWeight: "800", color: gfColors.text },
  editBadge: {
    position: "absolute",
    right: 2,
    bottom: 2,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: gfColors.lime,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: gfColors.bg,
  },
  nameRow: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 12 },
  name: { fontSize: 17, fontWeight: "800", color: gfColors.text },
  nameInput: {
    marginTop: 12,
    fontSize: 17,
    fontWeight: "800",
    color: gfColors.text,
    borderBottomWidth: 1,
    borderBottomColor: gfColors.teal,
    paddingBottom: 2,
    minWidth: 160,
    textAlign: "center",
  },
});