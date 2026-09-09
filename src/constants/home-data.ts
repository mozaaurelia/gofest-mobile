import type { ImageSourcePropType } from "react-native";
import { CALENDAR_EVENTS } from "./calendar-data";

export type Concert = {
  id: string;
  image?: ImageSourcePropType;
  genre: string;
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
  genre: "Pop",
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
  { id: "f1", image: require("@/assets/images/expo-logo.png"), genre: "Pop", name: "Bumi Harmoni Fest", venue: "GBK Stadium", city: "Jakarta", date: "14 Sep 2026", day: "14", month: "Sep", time: "19:00", price: "Rp 250K", from: "#2FA8C0", to: "#8FD14F" },
  { id: "f2", image: require("@/assets/images/so7.jpg"), genre: "EDM", name: "Sheila on 7", venue: "Beach Club", city: "Bali", date: "28 Sep 2026", day: "28", month: "Sep", time: "18:00", price: "Rp 375K", from: "#8FD14F", to: "#7BC943" },
  { id: "f3", image: require("@/assets/images/tutorial-web.png"), genre: "Rock", name: "Djakarta Sound Fest", venue: "Istora Senayan", city: "Jakarta", date: "5 Okt 2026", day: "5", month: "Okt", time: "19:30", price: "Rp 420K", from: "#2FA8C0", to: "#5B6EE1" },
  { id: "f4", image: require("@/assets/images/logo-glow.png"), genre: "Indie", name: "Kota Kilau", venue: "JX International", city: "Surabaya", date: "2 Nov 2026", day: "2", month: "Nov", time: "19:00", price: "Rp 450K", from: "#F4D35E", to: "#8FD14F" },
];

export const POPULAR_CONCERTS: Concert[] = [
  { id: "p1", image: require("@/assets/images/so7.jpg"), genre: "EDM", name: "Sheila on 7", venue: "Beach Club", city: "Bali", date: "28 Sep 2026", day: "28", month: "Sep", time: "18:00", price: "Rp 375K", from: "#8FD14F", to: "#7BC943" },
  { id: "p2", image: require("@/assets/images/tutorial-web.png"), genre: "Rock", name: "Djakarta Sound Fest", venue: "Istora Senayan", city: "Jakarta", date: "5 Okt 2026", day: "5", month: "Okt", time: "19:30", price: "Rp 420K", from: "#2FA8C0", to: "#5B6EE1" },
  { id: "p3", image: require("@/assets/images/expo-badge.png"), genre: "Indie", name: "Lembah Riuh", venue: "Amphitheater", city: "Malang", date: "12 Okt 2026", day: "12", month: "Okt", time: "20:00", price: "Rp 195K", from: "#5B6EE1", to: "#8FD14F" },
];

export const LATEST_CONCERTS: Concert[] = [
  { id: "l1", image: require("@/assets/images/expo-badge-white.png"), genre: "Jazz", name: "Pesisir Nada", venue: "Marina Bay", city: "Semarang", date: "20 Okt 2026", day: "20", month: "Okt", time: "18:30", price: "Rp 280K", from: "#2FA8C0", to: "#2FA8C0" },
  { id: "l2", image: require("@/assets/images/logo-glow.png"), genre: "Indie", name: "Kota Kilau", venue: "JX International", city: "Surabaya", date: "2 Nov 2026", day: "2", month: "Nov", time: "19:00", price: "Rp 450K", from: "#F4D35E", to: "#8FD14F" },
];

export const UPCOMING_CONCERTS: Concert[] = [
  { id: "u1", image: require("@/assets/images/so7.jpg"), genre: "R&B", name: "Ruang Bermusik", venue: "Lanud Wiriadinata", city: "Tasikmalaya", date: "9 Jan 2027", day: "9", month: "Jan", time: "16:00", price: "Rp 85K", from: "#2FA8C0", to: "#8FD14F" },
  { id: "u2", image: require("@/assets/images/tutorial-web.png"), genre: "Pop", name: "Warna Nada Fest", venue: "Transera Waterpark", city: "Bekasi", date: "29 Nov 2026", day: "29", month: "Nov", time: "13:00", price: "Rp 100K", from: "#8FD14F", to: "#F4D35E" },
];

export const ALL_CONCERTS: Concert[] = [
  ...FEATURED_CONCERTS,
  ...POPULAR_CONCERTS,
  ...LATEST_CONCERTS,
  ...UPCOMING_CONCERTS,
];

export function getConcertById(id: string | string[] | undefined): Concert | undefined {
  if (!id) return undefined;
  const targetId = Array.isArray(id) ? id[0] : id;
  return ALL_CONCERTS.find((c) => c.id === targetId) ?? getCalendarConcertById(targetId);
}

export function getCalendarConcertById(id: string | undefined): Concert | undefined {
  if (!id) return undefined;
  const event = CALENDAR_EVENTS.find((e) => e.id === id);
  if (!event) return undefined;
  return {
    id: event.id,
    image: event.image,
    genre: event.category,
    name: event.name,
    venue: event.venue,
    city: event.city,
    date: `${event.day} ${event.month} 2026`,
    day: event.day,
    month: event.month,
    time: event.time,
    price: event.price,
    from: event.from,
    to: event.to,
  };
}