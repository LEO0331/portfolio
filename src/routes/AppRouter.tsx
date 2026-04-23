import { HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { LocaleProvider } from "../i18n/LocaleContext";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import routeConfig from "./routeConfig.json";

const pageElementByBaseRouteKey: Record<string, JSX.Element> = {
  home: <HomePage />,
  projects: <ProjectsPage />,
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

function AppShell(): JSX.Element {
  return (
    <LocaleProvider>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}

export function AppRouter(): JSX.Element {
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
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<AppShell />}>
          {routesWithElement.map((route) => (
            <Route key={route.key} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
