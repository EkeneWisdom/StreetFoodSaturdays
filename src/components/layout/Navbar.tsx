import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

import Logo from "@/components/navigation/Logo";
import DesktopNavigation from "@/components/navigation/DesktopNavigation";
import MobileDrawer from "@/components/navigation/MobileDrawer";

import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/cn";

import { 
  Menu, 
  Flame, 
  Waves, 
  Utensils, 
  PhoneCall, 
  ChevronRight, 
  MapPin 
} from "lucide-react";

import { LAYOUT } from "@/config/layout";
import contact from "@/config/contact";
import { nav } from "@/config/navigation"; 

interface NavbarProps {
  pathname?: string;
}

export default function Navbar({ pathname = "" }: NavbarProps) {
  const scrolled = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Guard against hydration mismatches on client mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Reservation CTA Target & WhatsApp Link
  const reservationHref = nav?.reservation?.href ?? "#";
  const reservationTitle = nav?.reservation?.title ?? "Reserve Platter";
  const whatsappUrl = contact?.whatsappHref || (contact?.phone ? `https://wa.me/${String(contact.phone).replace(/\D/g, "")}` : "#");

  return (
    <>
      {/* Top Gourmet Culinary Banner - Slides up smoothly on scroll */}
      <div
        className={cn(
          "relative z-50 border-b border-border/50 bg-surface-elevated/90 text-text transition-all duration-300 hidden md:block",
          scrolled ? "-mt-9 opacity-0 pointer-events-none" : "mt-0 opacity-100"
        )}
      >
        <Container className="flex items-center justify-between text-xs font-medium py-1.5">
          {/* River & Fire Status Indicators */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-primary font-bold tracking-wide uppercase text-[11px]">
              <Flame size={13} className="animate-pulse text-primary shrink-0" />
              <span>Gourmet Woodfire Dining</span>
            </span>
            <span className="text-border/80">|</span>
            <span className="inline-flex items-center gap-1.5 text-secondary font-semibold text-[11px]">
              <Waves size={13} className="shrink-0" />
              <span>Mt. James Riverbed • Golden Spring</span>
            </span>
            <span className="text-border/80 hidden lg:inline">|</span>
            <span className="text-text-muted hidden lg:inline">
              Next Seating: 11:00 AM & 2:00 PM
            </span>
          </div>

          {/* Direct Concierge Contact & Directions Target */}
          <div className="flex items-center gap-4 shrink-0">
            {contact?.phone && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-text-muted transition-colors hover:text-primary"
              >
                <PhoneCall size={12} className="text-emerald-500" />
                <span>Concierge: {contact.phone}</span>
              </a>
            )}
            
            <a
              href={nav?.location?.href}
              className="inline-flex items-center gap-1 font-semibold text-primary transition-all hover:translate-x-0.5"
            >
              <MapPin size={12} />
              <span>Get Directions</span>
              <ChevronRight size={12} />
            </a>
          </div>
        </Container>
      </div>

      {/* Main Sticky Culinary Header Container */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border/80 bg-background/85 shadow-md backdrop-blur-xl"
            : "border-b border-border/30 bg-surface/50 backdrop-blur-sm"
        )}
      >
        <Container
          className="flex items-center justify-between transition-[height] duration-300 ease-in-out"
          style={{
            height: scrolled
              ? (LAYOUT?.navbar?.compactHeight ?? "64px")
              : (LAYOUT?.navbar?.expandedHeight ?? "80px"),
          }}
        >
          {/* Logo Component */}
          <Logo />

          {/* Desktop Navigation Links */}
          <DesktopNavigation pathname={pathname} />

          {/* Desktop Action Controls */}
          <div className="hidden items-center gap-3 lg:flex">
            {mounted && <ThemeToggle />}

            <a
              href={reservationHref}
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-primary-hover hover:scale-[1.02] hover:shadow-primary/25"
            >
              <Utensils size={16} className="transition-transform duration-200 group-hover:rotate-12" />
              <span>{reservationTitle}</span>
            </a>
          </div>

          {/* Mobile Quick Controls */}
          <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
            {mounted && <ThemeToggle />}

            <a
              href={reservationHref}
              className="inline-flex items-center justify-center p-2.5 rounded-xl bg-primary text-white font-bold shadow-sm transition-transform active:scale-95"
              aria-label="Reserve Platter"
            >
              <Utensils size={18} />
            </a>

            <Button
              variant="ghost"
              size="icon"
              className="flex items-center justify-center p-2 text-text hover:text-primary rounded-xl"
              onClick={() => setMobileOpen(true)}
              aria-label="Toggle Menu"
            >
              <Menu size={22} />
            </Button>
          </div>

          {/* Mobile Navigation Drawer */}
          <MobileDrawer
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            pathname={pathname}
            headerHeight={
              scrolled
                ? (LAYOUT?.navbar?.compactHeight ?? "64px")
                : (LAYOUT?.navbar?.expandedHeight ?? "80px")
            }
          />
        </Container>
      </header>
    </>
  );
}