import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { LocaleProvider, useLocale } from "../i18n/LocaleContext";
import { copy } from "../i18n/copy";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import routeConfig from "./routeConfig.json";

const ProjectsPage = lazy(() => import("../pages/ProjectsPage").then((module) => ({ default: module.ProjectsPage })));
const GridlineEngineeringPage = lazy(() => import("../pages/GridlineEngineeringPage").then((module) => ({ default: module.GridlineEngineeringPage })));
const GovTechPage = lazy(() => import("../pages/GovTechPage").then((module) => ({ default: module.GovTechPage })));
const GovTechCaseStudyPage = lazy(() => import("../pages/GovTechCaseStudyPage").then((module) => ({ default: module.GovTechCaseStudyPage })));

const pageElementByBaseRouteKey: Record<string, JSX.Element> = {
  home: <HomePage />,
  projects: <ProjectsPage />,
  "engineering-gridline": <GridlineEngineeringPage />,
  govtech: <GovTechPage />,
  "govtech-bin-policy": <GovTechCaseStudyPage slug="bin-policy" />,
  "govtech-civic-1999": <GovTechCaseStudyPage slug="civic-1999" />,
  "govtech-heavy-rain-preparedness": <GovTechCaseStudyPage slug="heavy-rain-preparedness" />,
  "govtech-urban-renewal": <GovTechCaseStudyPage slug="urban-renewal" />,
  "govtech-shade-equity": <GovTechCaseStudyPage slug="shade-equity" />,
  "govtech-neihu-congestion": <GovTechCaseStudyPage slug="neihu-congestion" />,
  "govtech-fire-rescue-access": <GovTechCaseStudyPage slug="fire-rescue-access" />,
  "govtech-river-water-quality": <GovTechCaseStudyPage slug="river-water-quality" />,
  "govtech-food-hygiene-inspection": <GovTechCaseStudyPage slug="food-hygiene-inspection" />,
  "govtech-senior-community-care": <GovTechCaseStudyPage slug="senior-community-care" />,
  "govtech-bridge-inspection": <GovTechCaseStudyPage slug="bridge-inspection" />,
  "govtech-wifi-allocation": <GovTechCaseStudyPage slug="wifi-allocation" />,
  "govtech-bus-service": <GovTechCaseStudyPage slug="bus-service" />,
  about: <AboutPage />,
  contact: <ContactPage />,
  "not-found": <NotFoundPage />
};

function getPageElementForRouteKey(routeKey: string): JSX.Element | undefined {
  if (routeKey in pageElementByBaseRouteKey) {
    return pageElementByBaseRouteKey[routeKey];
  }
  if (routeKey.endsWith("-zh")) {
    return pageElementByBaseRouteKey[routeKey.slice(0, -3)];
  }
  return undefined;
}

function RouteLoading(): JSX.Element {
  const { locale } = useLocale();
  return <p role="status" className="mx-auto max-w-6xl px-4 py-12">{copy[locale].nav.loadingPage}</p>;
}

function AppShell(): JSX.Element {
  return (
    <LocaleProvider>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Suspense fallback={<RouteLoading />}><Outlet /></Suspense>
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}

export function AppRouter(): JSX.Element {
  const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";
  const routesWithElement = routeConfig.routes.map((route) => {
    const element = getPageElementForRouteKey(route.key);
    if (!element) {
      throw new Error(`Route config key "${route.key}" is missing a mapped page element.`);
    }
    return {
      ...route,
      element
    };
  });

  return (
    <BrowserRouter basename={routerBase}>
      <Routes>
        <Route element={<AppShell />}>
          {routesWithElement.map((route) => (
            <Route key={route.key} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
