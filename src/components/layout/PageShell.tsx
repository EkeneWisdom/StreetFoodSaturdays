import type { ComponentType } from "react";
import type { NavigationItem } from "@/config/navigation";
import AppProviders from "@/components/layout/AppProviders";

import HomePage from "@/react-pages/home";
import PrivacyPage from "@/react-pages/privacy";
import TermsPage from "@/react-pages/terms";
import MenuPage from "@/react-pages/menu";
import AboutPage from "@/react-pages/about";
import ContactPage from "@/react-pages/contact";
import GuidePage from "@/react-pages/guide";
import ExperiencePage from "@/react-pages/experience";
import ReservationPage from "@/react-pages/reservation";
import LocationPage from "@/react-pages/location";
//import FAQPage from "@/react-pages/faq";

type PageKey = NavigationItem["key"];

// Accept any props dynamically
const pages: Record<string, ComponentType<any>> = {
  home: HomePage,
  menu: MenuPage,
  about: AboutPage,
  guide: GuidePage,
  experience: ExperiencePage,
  reservation: ReservationPage,
  //faq: FAQPage,
  contact: ContactPage,
  privacy: PrivacyPage,
  terms: TermsPage,
  location: LocationPage,
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