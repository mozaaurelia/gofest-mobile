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