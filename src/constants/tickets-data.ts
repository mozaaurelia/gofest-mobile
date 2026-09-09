export type SavedTicket = {
  id: string;
  concertId: string;
  name: string;
  venue: string;
  city: string;
  date: string;
  time: string;
  price: string;
  from: string;
  to: string;
};

export type PurchasedTicket = {
  id: string;
  concertId: string;
  name: string;
  venue: string;
  city: string;
  date: string;
  time: string;
  category: string;
  ticketCode: string;
  from: string;
  to: string;
};

export const SAVED_TICKETS: SavedTicket[] = [
  { id: "s1", concertId: "f2", name: "Sunset Beats", venue: "Beach Club", city: "Bali", date: "28 Sep 2026", time: "18:00", price: "Rp 375K", from: "#8FD14F", to: "#7BC943" },
  { id: "s2", concertId: "f3", name: "Djakarta Sound Fest", venue: "Istora Senayan", city: "Jakarta", date: "5 Okt 2026", time: "19:30", price: "Rp 420K", from: "#2FA8C0", to: "#5B6EE1" },
];

export const PURCHASED_TICKETS: PurchasedTicket[] = [
  { id: "p1", concertId: "f1", name: "Bumi Harmoni Fest", venue: "GBK Stadium", city: "Jakarta", date: "14 Sep 2026", time: "19:00", category: "VIP", ticketCode: "GF-BHF-2681-4490", from: "#2FA8C0", to: "#8FD14F" },
];