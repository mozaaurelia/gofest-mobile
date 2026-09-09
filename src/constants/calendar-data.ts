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
};

export const FILTER_CATEGORIES = ["Semua", "Pop", "Rock", "Indie", "Jazz", "R&B", "EDM"];

export const CALENDAR_EVENTS: CalendarEvent[] = [
  { id: "c1", name: "Bumi Harmoni Fest", venue: "GBK Stadium", city: "Jakarta", category: "Pop", dateISO: "2026-09-09", day: "9", month: "Sep", weekday: "Rab", time: "19:00", price: "Rp 250K", from: "#2FA8C0", to: "#8FD14F" },
  { id: "c2", name: "Sunset Beats", venue: "Beach Club", city: "Bali", category: "EDM", dateISO: "2026-09-10", day: "10", month: "Sep", weekday: "Kam", time: "18:00", price: "Rp 375K", from: "#8FD14F", to: "#7BC943" },
  { id: "c3", name: "Djakarta Sound Fest", venue: "Istora Senayan", city: "Jakarta", category: "Rock", dateISO: "2026-09-10", day: "10", month: "Sep", weekday: "Kam", time: "20:00", price: "Rp 420K", from: "#2FA8C0", to: "#5B6EE1" },
  { id: "c4", name: "Lembah Riuh", venue: "Amphitheater", city: "Malang", category: "Indie", dateISO: "2026-09-12", day: "12", month: "Sep", weekday: "Sab", time: "20:00", price: "Rp 195K", from: "#5B6EE1", to: "#8FD14F" },
  { id: "c5", name: "Pesisir Nada", venue: "Marina Bay", city: "Semarang", category: "Jazz", dateISO: "2026-09-14", day: "14", month: "Sep", weekday: "Sen", time: "18:30", price: "Rp 280K", from: "#2FA8C0", to: "#2FA8C0" },
  { id: "c6", name: "Kota Kilau", venue: "JX International", city: "Surabaya", category: "R&B", dateISO: "2026-09-14", day: "14", month: "Sep", weekday: "Sen", time: "19:00", price: "Rp 450K", from: "#F4D35E", to: "#8FD14F" },
  { id: "c7", name: "Ruang Bermusik", venue: "Lanud Wiriadinata", city: "Tasikmalaya", category: "Indie", dateISO: "2026-09-16", day: "16", month: "Sep", weekday: "Rab", time: "16:00", price: "Rp 85K", from: "#2FA8C0", to: "#8FD14F" },
];

export function getUniqueDates(events: CalendarEvent[]) {
  const seen = new Set<string>();
  return events.filter((e) => {
    if (seen.has(e.dateISO)) return false;
    seen.add(e.dateISO);
    return true;
  });
}