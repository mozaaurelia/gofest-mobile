export type OnboardingStep = {
  key: string;
  icon: "search" | "tickets" | "qr";
  title: string;
  description: string;
};

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    key: "search",
    icon: "search",
    title: "Temukan Festival Favoritmu",
    description: "Jelajahi ratusan konser dan festival musik dari berbagai genre dan kota di seluruh Indonesia.",
  },
  {
    key: "tickets",
    icon: "tickets",
    title: "Pesan Tiket Sat Set",
    description: "Pilih kategori, checkout, selesai - nggak perlu antre lama buat dapetin tiket incaran.",
  },
  {
    key: "qr",
    icon: "qr",
    title: "Tiket Digital di Genggaman",
    description: "E-tiket dengan QR code langsung tersimpan di app, tinggal scan pas hari-H.",
  },
];