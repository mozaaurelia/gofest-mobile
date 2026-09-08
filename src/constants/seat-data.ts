export type SeatStatus = "available" | "selected" | "unavailable";
export type PriceTier = "vvip" | "vip" | "regular";

export type Seat = {
  id: string;
  row: string;
  number: number;
  tier: PriceTier;
  status: SeatStatus;
};

export type VenueSection = {
  id: string;
  label: string;
  top: number; // posisi % di venue map
  left: number;
  width: number;
  height: number;
  color: string;
  rows: number;
  seatsPerRowBase: number;
  mirrored: boolean; // true buat section kiri, biar shape-nya kebalikan dari kanan
};

export const PRICE_TIERS: Record<PriceTier, { label: string; price: number; color: string }> = {
  vvip: { label: "VVIP", price: 850000, color: "#F4D35E" },
  vip: { label: "VIP", price: 550000, color: "#2FA8C0" },
  regular: { label: "Reguler", price: 250000, color: "#8FD14F" },
};

export const VENUE_SECTIONS: VenueSection[] = [
  { id: "b1", label: "B1", top: 28, left: 4, width: 26, height: 30, color: "#3A3A3C", rows: 5, seatsPerRowBase: 5, mirrored: true },
  { id: "b2", label: "B2", top: 22, left: 70, width: 26, height: 34, color: "#8FD14F", rows: 6, seatsPerRowBase: 5, mirrored: false },
  { id: "c1", label: "C1", top: 62, left: 12, width: 24, height: 22, color: "#3A3A3C", rows: 4, seatsPerRowBase: 6, mirrored: true },
  { id: "c2", label: "C2", top: 62, left: 64, width: 24, height: 22, color: "#3A3A3C", rows: 4, seatsPerRowBase: 6, mirrored: false },
  { id: "d1", label: "D1", top: 66, left: 36, width: 28, height: 18, color: "#3A3A3C", rows: 3, seatsPerRowBase: 8, mirrored: false },
];

const ROW_LETTERS = "ABCDEFGHJKLMN".split("");

/**
 * Generate kursi buat 1 section - baris makin ke belakang (index makin
 * besar) makin panjang, bikin bentuk kipas/wedge. Tier harga: baris
 * depan = VVIP, tengah = VIP, belakang = Reguler.
 */
export function generateSeatsForSection(section: VenueSection): Seat[][] {
  const rows: Seat[][] = [];

  for (let r = 0; r < section.rows; r++) {
    const seatsInRow = section.seatsPerRowBase + r * 2; // makin belakang makin lebar
    const rowLetter = ROW_LETTERS[r];
    const tier: PriceTier = r < 2 ? "vvip" : r < section.rows - 1 ? "vip" : "regular";

    const rowSeats: Seat[] = [];
    for (let n = 1; n <= seatsInRow; n++) {
      // pola kursi nggak tersedia biar keliatan realistis (deterministik, bukan random tiap render)
      const isUnavailable = (r + n) % 7 === 0;
      rowSeats.push({
        id: `${section.id}-${rowLetter}${n}`,
        row: rowLetter,
        number: n,
        tier,
        status: isUnavailable ? "unavailable" : "available",
      });
    }

    rows.push(section.mirrored ? rowSeats.reverse() : rowSeats);
  }

  return rows;
}