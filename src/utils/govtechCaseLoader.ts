import type { Locale } from "../i18n/LocaleContext";
import type { GovTechCase, GovTechCaseId } from "../types/govtechCase";

type CaseLoader = () => Promise<GovTechCase>;

// Keep runtime imports case-specific; the canonical catalogue remains available
// to data tooling without forcing every detailed route to download every case.
const loaders = {
  en: {
    "bin-policy": () => import("../data/govtechBinPolicy").then(module => module.binPolicyCase),
    "civic-1999": () => import("../data/govtechCivic1999").then(module => module.civic1999Case),
    "heavy-rain-preparedness": () => import("../data/govtechHeavyRain").then(module => module.heavyRainCase),
    "urban-renewal": () => import("../data/govtechUrbanRenewal").then(module => module.urbanRenewalCase),
    "shade-equity": () => import("../data/govtechShadeEquity").then(module => module.shadeEquityCase),
    "neihu-congestion": () => import("../data/govtechNeihuCongestion").then(module => module.neihuCongestionCase),
    "bus-service": () => import("../data/govtechBusService").then(module => module.busServiceCase),
    "wifi-allocation": () => import("../data/govtechWifiAllocation").then(module => module.wifiAllocationCase),
    "bridge-inspection": () => import("../data/govtechBridgeInspection").then(module => module.bridgeInspectionCase),
    "senior-community-care": () => import("../data/govtechSeniorCommunityCare").then(module => module.seniorCommunityCareCase),
    "food-hygiene-inspection": () => import("../data/govtechFoodHygieneInspection").then(module => module.foodHygieneInspectionCase),
    "fire-rescue-access": () => import("../data/govtechFireRescueAccess").then(module => module.fireRescueAccessCase)
  },
  zh: {
    "bin-policy": () => import("../data/govtechBinPolicy.zh").then(module => module.binPolicyCaseZh),
    "civic-1999": () => import("../data/govtechCivic1999.zh").then(module => module.civic1999CaseZh),
    "heavy-rain-preparedness": () => import("../data/govtechHeavyRain.zh").then(module => module.heavyRainCaseZh),
    "urban-renewal": () => import("../data/govtechUrbanRenewal.zh").then(module => module.urbanRenewalCaseZh),
    "shade-equity": () => import("../data/govtechShadeEquity.zh").then(module => module.shadeEquityCaseZh),
    "neihu-congestion": () => import("../data/govtechNeihuCongestion.zh").then(module => module.neihuCongestionCaseZh),
    "bus-service": () => import("../data/govtechBusService.zh").then(module => module.busServiceCaseZh),
    "wifi-allocation": () => import("../data/govtechWifiAllocation.zh").then(module => module.wifiAllocationCaseZh),
    "bridge-inspection": () => import("../data/govtechBridgeInspection.zh").then(module => module.bridgeInspectionCaseZh),
    "senior-community-care": () => import("../data/govtechSeniorCommunityCare.zh").then(module => module.seniorCommunityCareCaseZh),
    "food-hygiene-inspection": () => import("../data/govtechFoodHygieneInspection.zh").then(module => module.foodHygieneInspectionCaseZh),
    "fire-rescue-access": () => import("../data/govtechFireRescueAccess.zh").then(module => module.fireRescueAccessCaseZh)
  }
} satisfies Record<Locale, Record<GovTechCaseId, CaseLoader>>;

export async function loadGovTechCase(locale: Locale, slug: string): Promise<GovTechCase | undefined> {
  const localizedLoaders = loaders[locale];
  if (!Object.prototype.hasOwnProperty.call(localizedLoaders, slug)) return undefined;
  return localizedLoaders[slug as GovTechCaseId]();
}
