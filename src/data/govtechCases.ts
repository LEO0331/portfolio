import { fireRescueAccessCase } from "./govtechFireRescueAccess";
import { foodHygieneInspectionCase } from "./govtechFoodHygieneInspection";
import { seniorCommunityCareCase } from "./govtechSeniorCommunityCare";
import { bridgeInspectionCase } from "./govtechBridgeInspection";
import { wifiAllocationCase } from "./govtechWifiAllocation";
import { busServiceCase } from "./govtechBusService";
import { neihuCongestionCase } from "./govtechNeihuCongestion";
import { shadeEquityCase } from "./govtechShadeEquity";
import { urbanRenewalCase } from "./govtechUrbanRenewal";
import { heavyRainCase } from "./govtechHeavyRain";
import type { GovTechCase } from "../types/govtechCase";
import { civic1999Case } from "./govtechCivic1999";

import { binPolicyCase } from "./govtechBinPolicy";
export { BIN_SOURCE_SHA, binSource, binPolicyCase } from "./govtechBinPolicy";

export const govtechCases: GovTechCase[] = [binPolicyCase, civic1999Case, heavyRainCase, urbanRenewalCase, shadeEquityCase, neihuCongestionCase, busServiceCase, wifiAllocationCase, bridgeInspectionCase, seniorCommunityCareCase, foodHygieneInspectionCase, fireRescueAccessCase];
