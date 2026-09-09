import type { ComponentType } from "react";
import { CalendarCheck, MapPin, ShieldCheck, Ticket } from "lucide-react-native";
import { TKey } from "./i18n";

export type AboutFeature = {
  icon: ComponentType<{ size: number; color: string; strokeWidth: number }>;
  titleKey: TKey;
  subtitleKey: TKey;
};

export const ABOUT_FEATURES: AboutFeature[] = [
  { icon: Ticket, titleKey: "aboutFeatureTicket", subtitleKey: "aboutFeatureTicketSub" },
  { icon: CalendarCheck, titleKey: "aboutFeatureCalendar", subtitleKey: "aboutFeatureCalendarSub" },
  { icon: MapPin, titleKey: "aboutFeatureMap", subtitleKey: "aboutFeatureMapSub" },
  { icon: ShieldCheck, titleKey: "aboutFeatureShield", subtitleKey: "aboutFeatureShieldSub" },
];