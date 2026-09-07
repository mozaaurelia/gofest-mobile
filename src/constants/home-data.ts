import type { ImageSourcePropType } from "react-native";

export type Concert = {
  id: string;
  image?: ImageSourcePropType;
  name: string;
  venue: string;
  city: string;
  date: string;
  day: string;
  month: string;
  time: string;
  price: string;
  from: string;
  to: string;
};

export const CATEGORIES = ["Populer", "Pop", "Rock", "Indie", "Jazz", "R&B", "EDM"];

export const FEATURED_CONCERT: Concert = {
  id: "f1",
  image: require("@/assets/images/expo-logo.png"),
  name: "Bumi Harmoni Fest",
  venue: "GBK Stadium",
  city: "Jakarta",
  date: "14 Sep 2026",
  day: "14",
  month: "Sep",
  time: "19:00",
  price: "Rp 250K",
  from: "#2FA8C0",
  to: "#8FD14F",
};

export const FEATURED_CONCERTS: Concert[] = [
  { id: "f1", name: "Bumi Harmoni Fest", venue: "GBK Stadium", city: "Jakarta", date: "14 Sep 2026", day: "14", month: "Sep", time: "19:00", price: "Rp 250K", from: "#2FA8C0", to: "#8FD14F" },
  { id: "f2", name: "Sunset Beats", venue: "Beach Club", city: "Bali", date: "28 Sep 2026", day: "28", month: "Sep", time: "18:00", price: "Rp 375K", from: "#8FD14F", to: "#7BC943" },
  { id: "f3", name: "Djakarta Sound Fest", venue: "Istora Senayan", city: "Jakarta", date: "5 Okt 2026", day: "5", month: "Okt", time: "19:30", price: "Rp 420K", from: "#2FA8C0", to: "#5B6EE1" },
  { id: "f4", name: "Kota Kilau", venue: "JX International", city: "Surabaya", date: "2 Nov 2026", day: "2", month: "Nov", time: "19:00", price: "Rp 450K", from: "#F4D35E", to: "#8FD14F" },
];

export const POPULAR_CONCERTS: Concert[] = [
  { id: "p1", image: require("@/assets/images/react-logo.png"), name: "Sunset Beats", venue: "Beach Club", city: "Bali", date: "28 Sep 2026", day: "28", month: "Sep", time: "18:00", price: "Rp 375K", from: "#8FD14F", to: "#7BC943" },
  { id: "p2", image: require("@/assets/images/tutorial-web.png"), name: "Djakarta Sound Fest", venue: "Istora Senayan", city: "Jakarta", date: "5 Okt 2026", day: "5", month: "Okt", time: "19:30", price: "Rp 420K", from: "#2FA8C0", to: "#5B6EE1" },
  { id: "p3", image: require("@/assets/images/expo-badge.png"), name: "Lembah Riuh", venue: "Amphitheater", city: "Malang", date: "12 Okt 2026", day: "12", month: "Okt", time: "20:00", price: "Rp 195K", from: "#5B6EE1", to: "#8FD14F" },
];

export const LATEST_CONCERTS: Concert[] = [
  { id: "l1", image: require("@/assets/images/expo-badge-white.png"), name: "Pesisir Nada", venue: "Marina Bay", city: "Semarang", date: "20 Okt 2026", day: "20", month: "Okt", time: "18:30", price: "Rp 280K", from: "#2FA8C0", to: "#2FA8C0" },
  { id: "l2", image: require("@/assets/images/logo-glow.png"), name: "Kota Kilau", venue: "JX International", city: "Surabaya", date: "2 Nov 2026", day: "2", month: "Nov", time: "19:00", price: "Rp 450K", from: "#F4D35E", to: "#8FD14F" },
];

export const UPCOMING_CONCERTS: Concert[] = [
  { id: "u1", image: require("@/assets/images/react-logo.png"), name: "Ruang Bermusik", venue: "Lanud Wiriadinata", city: "Tasikmalaya", date: "9 Jan 2027", day: "9", month: "Jan", time: "16:00", price: "Rp 85K", from: "#2FA8C0", to: "#8FD14F" },
  { id: "u2", image: require("@/assets/images/tutorial-web.png"), name: "Warna Nada Fest", venue: "Transera Waterpark", city: "Bekasi", date: "29 Nov 2026", day: "29", month: "Nov", time: "13:00", price: "Rp 100K", from: "#8FD14F", to: "#F4D35E" },
];