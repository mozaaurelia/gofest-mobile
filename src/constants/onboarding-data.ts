import { TKey } from "./i18n";

export type OnboardingStep = {
  key: string;
  icon: "search" | "tickets" | "qr";
  titleKey: TKey;
  descriptionKey: TKey;
};

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    key: "search",
    icon: "search",
    titleKey: "onb1Title",
    descriptionKey: "onb1Desc",
  },
  {
    key: "tickets",
    icon: "tickets",
    titleKey: "onb2Title",
    descriptionKey: "onb2Desc",
  },
  {
    key: "qr",
    icon: "qr",
    titleKey: "onb3Title",
    descriptionKey: "onb3Desc",
  },
];