import { profile } from "../data/profile";
import { zhProfileContent } from "../data/profile.zh";
import type { Locale } from "../i18n/LocaleContext";
import type { Profile } from "../types/profile";

export function getLocalizedProfile(locale: Locale): Profile {
  if (locale === "en") return profile;

  return {
    ...profile,
    title: zhProfileContent.title,
    summary: zhProfileContent.summary,
    introParagraphs: zhProfileContent.introParagraphs,
    strengths: zhProfileContent.strengths
  };
}
