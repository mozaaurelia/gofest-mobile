import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { gfColors } from "../../constants/gf-theme";

type ProfileSocialFooterProps = {
  onLinkPress?: (platform: string) => void;
};

export default function ProfileSocialFooter({ onLinkPress }: ProfileSocialFooterProps) {
  const socials = [
    { key: "instagram", label: "Instagram", icon: <InstagramIcon /> },
    { key: "tiktok", label: "TikTok", icon: <TiktokIcon /> },
    { key: "x", label: "X", icon: <XIcon /> },
    { key: "youtube", label: "YouTube", icon: <YoutubeIcon /> },
    { key: "facebook", label: "Facebook", icon: <FacebookIcon /> },
  ];

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Follow us</Text>
      <Text style={styles.subtitle}>Tetap update sama event & promonya</Text>
      <View style={styles.row}>
        {socials.map((s) => (
          <Pressable
            key={s.key}
            style={styles.iconBtn}
            onPress={() => onLinkPress?.(s.key)}
            accessibilityLabel={s.label}
            accessibilityRole="button"
          >
            {s.icon}
          </Pressable>
        ))}
      </View>
    </View>
  );
}

// Ikon logo sosmed - brand glyph pakai stroke konsisten sama gaya app
function InstagramIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
      <Rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke={gfColors.text} strokeWidth={1.8} />
      <Circle cx="12" cy="12" r="4" stroke={gfColors.text} strokeWidth={1.8} />
      <Circle cx="17.2" cy="6.8" r="1.2" fill={gfColors.text} />
    </Svg>
  );
}

function TiktokIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
      <Path
        d="M14 4v9.2a3.4 3.4 0 1 1-3.4-3.4"
        stroke={gfColors.text}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 4c.4 2.2 1.9 3.7 4.2 4"
        stroke={gfColors.text}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function XIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={19} height={19} fill="none">
      <Path d="M4 4l16 16M20 4 4 20" stroke={gfColors.text} strokeWidth={2.4} strokeLinecap="round" />
    </Svg>
  );
}

function YoutubeIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={21} height={21} fill="none">
      <Rect x="3" y="6" width="18" height="12" rx="4" stroke={gfColors.text} strokeWidth={1.8} />
      <Path d="M10.2 9.4v5.2l4.6-2.6-4.6-2.6Z" fill={gfColors.text} />
    </Svg>
  );
}

function FacebookIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
      <Path d="M13.5 21v-7h2.2l.4-2.6h-2.6V9.6c0-.8.3-1.4 1.5-1.4h1.3V5.9c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v2.3H9v2.6h2.2v7h2.3Z" stroke={gfColors.text} strokeWidth={1.7} strokeLinejoin="round" />
    </Svg>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center", paddingVertical: 26 },
  title: { fontSize: 14, fontWeight: "800", color: gfColors.text },
  subtitle: { fontSize: 11.5, color: gfColors.textMuted, marginTop: 4 },
  row: { flexDirection: "row", justifyContent: "center", gap: 14, marginTop: 18 },
  iconBtn: {
    width: 46,
    height: 46,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: gfColors.border,
    backgroundColor: gfColors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
});
