import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type AppLang = "id" | "en";

const STORAGE_KEY = "go-fest/language";

const en = {
  greeting: "Hello",
  searchPlaceholder: "Search concerts, artists, or venues...",
  priceFrom: "From",
  viewConcert: "View Concert",
  seeAll: "See all",
  sectionPopular: "Popular Concerts",
  sectionLatest: "Latest Concerts",
  sectionUpcoming: "Upcoming Concerts",
  categoryPopular: "Popular",
  languageTitle: "Choose Language",
  profileLanguage: "Language",
  aboutTitle: "About Go fest!",
  aboutTagline: "One platform for all your favorite music events",
  aboutDescTitle: "About Us",
  aboutFeaturesTitle: "Why Go fest!?",
  aboutDesc1: "Go fest! helps you discover concerts and music festivals across Indonesia — from stadium shows to indie gigs, all in one place.",
  aboutDesc2: "Browse by category, pick your seat, and get digital tickets in minutes. Just scan your e-ticket on the big day and skip the queue.",
  aboutStatConcerts: "500+",
  aboutStatConcertsLabel: "Concerts & Festivals",
  aboutStatCities: "40+",
  aboutStatCitiesLabel: "Cities",
  aboutStatUsers: "120K",
  aboutStatUsersLabel: "Happy Users",
  aboutFeatureTicket: "Easy Ticketing",
  aboutFeatureTicketSub: "Buy tickets in minutes, no more queuing",
  aboutFeatureCalendar: "Full Event Info",
  aboutFeatureCalendarSub: "Dates, schedules & seat maps in one place",
  aboutFeatureMap: "Find Venues",
  aboutFeatureMapSub: "Locations & directions to every venue",
  aboutFeatureShield: "Safe & Secure",
  aboutFeatureShieldSub: "Secure payments backed by 24/7 support",
  aboutFooter: "Made with love for music lovers in Indonesia",
  aboutCopyright: "© 2026 Go fest!. All rights reserved.",
  authLoginGreeting: "Hello again!",
  authLoginSub: "Sign in to keep finding your favorite fests",
  authRegisterGreeting: "Create a new account",
  authRegisterSub: "Join now, discover your favorite concerts",
  buyTicket: "Buy Ticket",
  promoNewTickets: "New tickets available!",
  promoTicketInfo: "View Ticket Info",
  detailSales: "Ticket Sales Info",
  detailSalesSub: "Schedule & how to buy tickets",
  detailSeatMap: "Seat Map",
  detailSeatMapSub: "View and find your seat",
  detailWristband: "Wristband Exchange",
  detailWristbandSub: "Exchange your wristband first to skip the queue",
  detailQuestions: "Any Questions?",
  detailQuestionsSub: "Quick answers for your questions",
  detailGuide: "Event Guide",
  detailGuideSub: "Things to prepare before the big day",
  skip: "Skip",
  getStarted: "Get Started",
  authTagline: "One platform for concert & festival tickets",
  socialOr: "Or continue with",
  loginQuestion: "Don't have an account?",
  loginAction: "Sign up here",
  registerQuestion: "Already have an account?",
  registerAction: "Log in here",
  inputShow: "Show",
  inputHide: "Hide",
  labelName: "Name",
  labelEmail: "Email",
  labelPassword: "Password",
  phEmail: "you@email.com",
  phName: "Full name",
  loginButton: "Log in",
  registerButton: "Sign up",
  errName: "Name is required",
  errEmail: "Email is required",
  errPassword: "Password is required",
  onb1Title: "Find Your Favorite Festival",
  onb1Desc: "Explore hundreds of concerts and music festivals across genres and cities throughout Indonesia.",
  onb2Title: "Book Tickets Effortlessly",
  onb2Desc: "Pick a category, check out, done - no long lines for your dream tickets.",
  onb3Title: "Digital Tickets in Your Hands",
  onb3Desc: "E-tickets with QR codes stored right in the app, just scan on the big day.",
};

const idDict: Record<keyof typeof en, string> = {
  greeting: "Halo",
  searchPlaceholder: "Cari konser, artis, atau venue...",
  priceFrom: "Mulai dari",
  viewConcert: "Lihat Konser",
  seeAll: "Lihat semua",
  sectionPopular: "Konser Populer",
  sectionLatest: "Konser Terbaru",
  sectionUpcoming: "Konser Mendatang",
  categoryPopular: "Populer",
  languageTitle: "Pilih Bahasa",
  profileLanguage: "Bahasa",
  aboutTitle: "Tentang Go fest!",
  aboutTagline: "Satu platform buat semua event musik favoritmu",
  aboutDescTitle: "Tentang Kami",
  aboutFeaturesTitle: "Kenapa Go fest!?",
  aboutDesc1: "Go fest! bantu kamu nemuin konser dan festival musik di seluruh Indonesia — dari show stadion sampai gigs indie, semua dalam satu tempat.",
  aboutDesc2: "Browsing kategori, pilih kursi, dan langsung dapet tiket digital dalam hitungan menit. Tinggal scan e-tiket di hari-H tanpa perlu antre.",
  aboutStatConcerts: "500+",
  aboutStatConcertsLabel: "Konser & Festival",
  aboutStatCities: "40+",
  aboutStatCitiesLabel: "Kota",
  aboutStatUsers: "120K",
  aboutStatUsersLabel: "Pengguna Puas",
  aboutFeatureTicket: "Tiket Sat Set",
  aboutFeatureTicketSub: "Beli tiket dalam hitungan menit, nggak perlu antre",
  aboutFeatureCalendar: "Info Event Lengkap",
  aboutFeatureCalendarSub: "Tanggal, jadwal & denah kursi dalam satu tempat",
  aboutFeatureMap: "Cari Venue",
  aboutFeatureMapSub: "Lokasi & petunjuk arah ke setiap venue",
  aboutFeatureShield: "Aman & Terpercaya",
  aboutFeatureShieldSub: "Pembayaran aman dengan dukungan 24/7",
  aboutFooter: "Dibuat dengan cinta buat pecinta musik di Indonesia",
  aboutCopyright: "© 2026 Go fest!. Semua hak dilindungi.",
  authLoginGreeting: "Halo lagi!",
  authLoginSub: "Masuk buat lanjut cari fest favoritmu",
  authRegisterGreeting: "Buat akun baru",
  authRegisterSub: "Gabung sekarang, temukan konser favoritmu",
  buyTicket: "Beli Tiket",
  promoNewTickets: "Tiket baru tersedia!",
  promoTicketInfo: "Lihat Info Tiket",
  detailSales: "Info Penjualan Tiket",
  detailSalesSub: "Jadwal & cara pembelian tiket",
  detailSeatMap: "Denah Kursi",
  detailSeatMapSub: "Lihat dan cari kursi kamu",
  detailWristband: "Penukaran Wristband",
  detailWristbandSub: "Tukar wristband dulu biar nggak antre",
  detailQuestions: "Ada Pertanyaan?",
  detailQuestionsSub: "Jawaban cepat buat pertanyaanmu",
  detailGuide: "Panduan Event",
  detailGuideSub: "Hal yang perlu disiapin sebelum hari-H",
  skip: "Lewati",
  getStarted: "Mulai",
  authTagline: "Satu platform tiket konser & festival",
  socialOr: "Atau lanjutkan dengan",
  loginQuestion: "Belum punya akun?",
  loginAction: "Daftar di sini",
  registerQuestion: "Sudah punya akun?",
  registerAction: "Masuk di sini",
  inputShow: "Lihat",
  inputHide: "Sembunyikan",
  labelName: "Nama",
  labelEmail: "Email",
  labelPassword: "Password",
  phEmail: "kamu@email.com",
  phName: "Nama lengkap",
  loginButton: "Masuk",
  registerButton: "Daftar",
  errName: "Nama wajib diisi",
  errEmail: "Email wajib diisi",
  errPassword: "Password wajib diisi",
  onb1Title: "Temukan Festival Favoritmu",
  onb1Desc: "Jelajahi ratusan konser dan festival musik dari berbagai genre dan kota di seluruh Indonesia.",
  onb2Title: "Pesan Tiket Sat Set",
  onb2Desc: "Pilih kategori, checkout, selesai - nggak perlu antre lama buat dapetin tiket incaran.",
  onb3Title: "Tiket Digital di Genggaman",
  onb3Desc: "E-tiket dengan QR code langsung tersimpan di app, tinggal scan pas hari-H.",
};

export type TKey = keyof typeof en;

export const LANGS: { value: AppLang; label: string }[] = [
  { value: "id", label: "Bahasa Indonesia" },
  { value: "en", label: "English" },
];

type I18nContextValue = {
  lang: AppLang;
  setLang: (l: AppLang) => void;
  t: (key: TKey) => string;
};

const I18nContext = createContext<I18nContextValue>({
  lang: "id",
  setLang: () => {},
  t: (key) => idDict[key],
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<AppLang>("id");

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((stored) => {
        if (stored === "en" || stored === "id") setLangState(stored);
      })
      .catch(() => {});
  }, []);

  const setLang = useCallback((l: AppLang) => {
    setLangState(l);
    AsyncStorage.setItem(STORAGE_KEY, l).catch(() => {});
  }, []);

  const t = useCallback((key: TKey) => (lang === "en" ? en[key] : idDict[key]), [lang]);

  const value = useMemo<I18nContextValue>(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}