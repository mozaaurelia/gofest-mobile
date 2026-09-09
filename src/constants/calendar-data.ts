import type { ImageSourcePropType } from "react-native";

export type CalendarEvent = {
  id: string;
  name: string;
  venue: string;
  city: string;
  category: string;
  dateISO: string; // "2026-09-14"
  day: string;
  month: string;
  weekday: string;
  time: string;
  price: string;
  from: string;
  to: string;
  image?: ImageSourcePropType;
};

export const FILTER_CATEGORIES = ["Semua", "Pop", "Rock", "Indie", "Jazz", "R&B", "EDM"];

export const CALENDAR_EVENTS: CalendarEvent[] = [
  // Januari
  { id: "c-jan1", name: "Salju Senja", venue: "Taman Sari", city: "Bandung", category: "Pop", dateISO: "2026-01-17", day: "17", month: "Jan", weekday: "Sab", time: "19:00", price: "Rp 220K", from: "#2FA8C0", to: "#8FD14F", image: require("@/assets/images/so7.jpg") },
  { id: "c-jan2", name: "Rindu Nusantara", venue: "Anjungan Jogja", city: "Yogyakarta", category: "Jazz", dateISO: "2026-01-24", day: "24", month: "Jan", weekday: "Sab", time: "20:00", price: "Rp 300K", from: "#5B6EE1", to: "#2FA8C0", image: require("@/assets/images/tutorial-web.png") },

  // Februari
  { id: "c-feb1", name: "Cinta Merdu", venue: "Istora Senayan", city: "Jakarta", category: "R&B", dateISO: "2026-02-14", day: "14", month: "Feb", weekday: "Sab", time: "19:30", price: "Rp 400K", from: "#F4D35E", to: "#8FD14F", image: require("@/assets/images/expo-logo.png") },
  { id: "c-feb2", name: "Garasi Gitar", venue: "Palagan", city: "Bandung", category: "Rock", dateISO: "2026-02-21", day: "21", month: "Feb", weekday: "Sab", time: "21:00", price: "Rp 185K", from: "#2FA8C0", to: "#5B6EE1", image: require("@/assets/images/logo-glow.png") },

  // Maret
  { id: "c-mar1", name: "Pantai Berdentum", venue: "Kuta Beach", city: "Bali", category: "EDM", dateISO: "2026-03-14", day: "14", month: "Mar", weekday: "Sab", time: "22:00", price: "Rp 350K", from: "#8FD14F", to: "#2FA8C0", image: require("@/assets/images/so7.jpg") },
  { id: "c-mar2", name: "Kliningan Klasik", venue: "Gedung Bersejarah", city: "Solo", category: "Pop", dateISO: "2026-03-21", day: "21", month: "Mar", weekday: "Sab", time: "19:00", price: "Rp 210K", from: "#5B6EE1", to: "#8FD14F", image: require("@/assets/images/expo-badge.png") },

  // April
  { id: "c-apr1", name: "Riuh Senja", venue: "Lapangan Bambu", city: "Medan", category: "Indie", dateISO: "2026-04-25", day: "25", month: "Apr", weekday: "Sab", time: "18:00", price: "Rp 140K", from: "#2FA8C0", to: "#8FD14F", image: require("@/assets/images/expo-badge-white.png") },

  // Mei
  { id: "c-may1", name: "Sore di Pelabuhan", venue: "Dermaga Lama", city: "Makassar", category: "Jazz", dateISO: "2026-05-16", day: "16", month: "Mei", weekday: "Sab", time: "18:30", price: "Rp 260K", from: "#5B6EE1", to: "#2FA8C0", image: require("@/assets/images/tutorial-web.png") },
  { id: "c-may2", name: "Badai Bass", venue: "JX International", city: "Surabaya", category: "EDM", dateISO: "2026-05-30", day: "30", month: "Mei", weekday: "Sab", time: "23:00", price: "Rp 380K", from: "#8FD14F", to: "#7BC943", image: require("@/assets/images/logo-glow.png") },

  // Juni
  { id: "c-jun1", name: "Asap dan Melodi", venue: "Studio Merdeka", city: "Bandung", category: "Rock", dateISO: "2026-06-13", day: "13", month: "Jun", weekday: "Sab", time: "21:00", price: "Rp 200K", from: "#F4D35E", to: "#5B6EE1", image: require("@/assets/images/expo-logo.png") },
  { id: "c-jun2", name: "Ramadan Ria", venue: "GBK Stadium", city: "Jakarta", category: "Pop", dateISO: "2026-06-27", day: "27", month: "Jun", weekday: "Sab", time: "19:00", price: "Rp 270K", from: "#2FA8C0", to: "#8FD14F", image: require("@/assets/images/so7.jpg") },

  // Juli
  { id: "c-jul1", name: "Malam Panen", venue: "Sawah Besar", city: "Cianjur", category: "Indie", dateISO: "2026-07-11", day: "11", month: "Jul", weekday: "Sab", time: "18:00", price: "Rp 120K", from: "#5B6EE1", to: "#8FD14F", image: require("@/assets/images/expo-badge.png") },
  { id: "c-jul2", name: "Neon Kota Tua", venue: "Fatahillah Square", city: "Jakarta", category: "EDM", dateISO: "2026-07-25", day: "25", month: "Jul", weekday: "Sab", time: "22:30", price: "Rp 320K", from: "#8FD14F", to: "#2FA8C0", image: require("@/assets/images/tutorial-web.png") },

  // Agustus
  { id: "c-aug1", name: "Merah Putih Berdendang", venue: "Lapangan Banteng", city: "Jakarta", category: "Pop", dateISO: "2026-08-08", day: "8", month: "Agu", weekday: "Sab", time: "19:30", price: "Rp 240K", from: "#2FA8C0", to: "#8FD14F", image: require("@/assets/images/expo-badge-white.png") },
  { id: "c-aug2", name: "R&B di Rooftop", venue: "Sudirman Tower", city: "Jakarta", category: "R&B", dateISO: "2026-08-22", day: "22", month: "Agu", weekday: "Sab", time: "20:00", price: "Rp 410K", from: "#F4D35E", to: "#8FD14F", image: require("@/assets/images/logo-glow.png") },

  // September
  { id: "c1", name: "Bumi Harmoni Fest", venue: "GBK Stadium", city: "Jakarta", category: "Pop", dateISO: "2026-09-09", day: "9", month: "Sep", weekday: "Rab", time: "19:00", price: "Rp 250K", from: "#2FA8C0", to: "#8FD14F", image: require("@/assets/images/so7.jpg") },
  { id: "c2", name: "Sunset Beats", venue: "Beach Club", city: "Bali", category: "EDM", dateISO: "2026-09-10", day: "10", month: "Sep", weekday: "Kam", time: "18:00", price: "Rp 375K", from: "#8FD14F", to: "#7BC943", image: require("@/assets/images/tutorial-web.png") },
  { id: "c3", name: "Djakarta Sound Fest", venue: "Istora Senayan", city: "Jakarta", category: "Rock", dateISO: "2026-09-10", day: "10", month: "Sep", weekday: "Kam", time: "20:00", price: "Rp 420K", from: "#2FA8C0", to: "#5B6EE1", image: require("@/assets/images/expo-logo.png") },
  { id: "c4", name: "Lembah Riuh", venue: "Amphitheater", city: "Malang", category: "Indie", dateISO: "2026-09-12", day: "12", month: "Sep", weekday: "Sab", time: "20:00", price: "Rp 195K", from: "#5B6EE1", to: "#8FD14F", image: require("@/assets/images/expo-badge.png") },
  { id: "c5", name: "Pesisir Nada", venue: "Marina Bay", city: "Semarang", category: "Jazz", dateISO: "2026-09-14", day: "14", month: "Sep", weekday: "Sen", time: "18:30", price: "Rp 280K", from: "#2FA8C0", to: "#2FA8C0", image: require("@/assets/images/expo-badge-white.png") },
  { id: "c6", name: "Kota Kilau", venue: "JX International", city: "Surabaya", category: "R&B", dateISO: "2026-09-14", day: "14", month: "Sep", weekday: "Sen", time: "19:00", price: "Rp 450K", from: "#F4D35E", to: "#8FD14F", image: require("@/assets/images/logo-glow.png") },
  { id: "c7", name: "Ruang Bermusik", venue: "Lanud Wiriadinata", city: "Tasikmalaya", category: "Indie", dateISO: "2026-09-16", day: "16", month: "Sep", weekday: "Rab", time: "16:00", price: "Rp 85K", from: "#2FA8C0", to: "#8FD14F", image: require("@/assets/images/so7.jpg") },
  { id: "c9", name: "Gelora Titik Nol", venue: "Tugu Muda", city: "Semarang", category: "Rock", dateISO: "2026-09-19", day: "19", month: "Sep", weekday: "Sab", time: "20:00", price: "Rp 230K", from: "#5B6EE1", to: "#F4D35E", image: require("@/assets/images/tutorial-web.png") },
  { id: "c10", name: "Pancoran Pulse", venue: "Pancoran Park", city: "Jakarta", category: "EDM", dateISO: "2026-09-26", day: "26", month: "Sep", weekday: "Sab", time: "22:00", price: "Rp 330K", from: "#8FD14F", to: "#2FA8C0", image: require("@/assets/images/expo-logo.png") },

  // Oktober
  { id: "c-oct1", name: "Hujan Harmoni", venue: "Kebun Raya", city: "Bogor", category: "Indie", dateISO: "2026-10-17", day: "17", month: "Okt", weekday: "Sab", time: "18:30", price: "Rp 160K", from: "#2FA8C0", to: "#5B6EE1", image: require("@/assets/images/expo-badge.png") },
  { id: "c-oct2", name: "Jakarta Jazz Fest", venue: "Istora Senayan", city: "Jakarta", category: "Jazz", dateISO: "2026-10-31", day: "31", month: "Okt", weekday: "Sab", time: "19:00", price: "Rp 500K", from: "#F4D35E", to: "#2FA8C0", image: require("@/assets/images/logo-glow.png") },

  // November
  { id: "c-nov1", name: "Pantai Berkumandang", venue: "Kuta Beach", city: "Bali", category: "EDM", dateISO: "2026-11-14", day: "14", month: "Nov", weekday: "Sab", time: "22:00", price: "Rp 360K", from: "#8FD14F", to: "#7BC943", image: require("@/assets/images/so7.jpg") },
  { id: "c-nov2", name: "Suara Sukarno", venue: "GBK Stadium", city: "Jakarta", category: "Rock", dateISO: "2026-11-28", day: "28", month: "Nov", weekday: "Sab", time: "20:00", price: "Rp 390K", from: "#2FA8C0", to: "#F4D35E", image: require("@/assets/images/tutorial-web.png") },

  // Desember
  { id: "c-dec1", name: "Tutup Tahun Merdu", venue: "Anjungan Jogja", city: "Yogyakarta", category: "Pop", dateISO: "2026-12-12", day: "12", month: "Des", weekday: "Sab", time: "19:00", price: "Rp 280K", from: "#5B6EE1", to: "#8FD14F", image: require("@/assets/images/expo-logo.png") },
  { id: "c-dec2", name: "Malam Pergantian", venue: "Monas", city: "Jakarta", category: "Pop", dateISO: "2026-12-31", day: "31", month: "Des", weekday: "Kam", time: "23:00", price: "Rp 450K", from: "#8FD14F", to: "#2FA8C0", image: require("@/assets/images/logo-glow.png") },
];

export function getUniqueDates(events: CalendarEvent[]) {
  const seen = new Set<string>();
  return events.filter((e) => {
    if (seen.has(e.dateISO)) return false;
    seen.add(e.dateISO);
    return true;
  });
}