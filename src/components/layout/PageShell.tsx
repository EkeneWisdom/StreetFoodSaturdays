import type { ComponentType } from "react";
import type { NavigationItem } from "@/config/navigation";
import AppProviders from "@/components/layout/AppProviders";

import HomePage from "@/react-pages/home";
import PrivacyPage from "@/react-pages/privacy";
import TermsPage from "@/react-pages/terms";
import ServicesPage from "@/react-pages/services";
import AboutPage from "@/react-pages/about";
import ContactPage from "@/react-pages/contact";
import FleetPage from "@/react-pages/fleet";
import ProjectsPage from "@/react-pages/projects";
import CompliancePage from "@/react-pages/compliance";
import galleryPage from "@/react-pages/gallery";
import careersPage from "@/react-pages/careers";
//import FAQPage from "@/react-pages/faq";

type PageKey = NavigationItem["key"];

// Accept any props dynamically
const pages: Record<string, ComponentType<any>> = {
  home: HomePage,
  services: ServicesPage,
  about: AboutPage,
  fleet: FleetPage,
  projects: ProjectsPage,
  compliance: CompliancePage,
  //faq: FAQPage,
  contact: ContactPage,
  privacy: PrivacyPage,
  terms: TermsPage,
  gallery: galleryPage,
  careers: careersPage,
};

interface PageShellProps {
  page: PageKey;
  pageProps?: Record<string, any>; // Flexible prop container for server data
}

export default function PageShell({ page, pageProps = {} }: PageShellProps) {
  const Page = pages[page];

  if (!Page) {
    throw new Error(
      `No React page component registered for navigation key: "${page}"`
    );
  }

  return (
    <AppProviders>
      <Page {...pageProps} />
    </AppProviders>
  );
}