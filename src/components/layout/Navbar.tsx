import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

import Logo from "@/components/navigation/Logo";
import DesktopNavigation from "@/components/navigation/DesktopNavigation";
import MobileDrawer from "@/components/navigation/MobileDrawer";

import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/cn";

import { Menu, PhoneCall, ShieldCheck, ArrowRight } from "lucide-react";

import { LAYOUT } from "@/config/layout";
import contact from "@/config/contact";
import { nav } from "@/config/navigation";
import GetStartedButton from "@/widgets/get-started/GetStartedButton";
import { GetStartedIcon } from "@/components/icons/GetStartedIcon";

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

  // Safe navigation fallback targets
  const contactHref = nav?.contact?.href ?? "#";

  return (
    <>
      {/* Top Engineering Utility Status Bar - Slides up out of view smoothly */}
      <div
        className={cn(
          "relative z-50 border-b border-border/50 bg-surface-elevated/90 text-text transition-all duration-300 hidden md:block",
          scrolled ? "-mt-8 opacity-0 pointer-events-none" : "mt-0 opacity-100"
        )}
      >
        <Container className="flex items-center justify-between text-xs font-medium py-1.5">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-primary font-semibold">
              <ShieldCheck size={14} className="shrink-0" />
              <span>Heavy Equipment & Marine Fleet Ready</span>
            </span>
            <span className="text-border">|</span>
            <span className="text-text-muted hidden lg:inline">
              24/7 Rapid Site Assessment & Mobilization Across Nigeria
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {contact?.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-1.5 text-text-muted transition-colors hover:text-primary dark:hover:text-primary"
              >
                <PhoneCall size={13} className="text-primary" />
                <span>Dispatch: {contact.phone}</span>
              </a>
            )}
            <a
              href={contactHref}
              className="inline-flex items-center gap-1 font-semibold text-primary transition-all hover:translate-x-0.5"
            >
              <span>Submit Tender Request</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </Container>
      </div>

      {/* Main Sticky Navbar Container */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-colors duration-300",
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
          {/* Logo with Brand Safety Guards */}
          <Logo />

          {/* Center Navigation Links */}
          <DesktopNavigation pathname={pathname} />

          {/* Desktop Call to Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            {mounted && <ThemeToggle />}

            <GetStartedButton
              variant="primary"
              className="group flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-primary/20"
            >
              <GetStartedIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              <span>Get Estimate</span>
            </GetStartedButton>
          </div>

          {/* Mobile Quick Trigger Controls */}
          <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
            <GetStartedButton
              variant="ghost"
              size="icon"
              className="flex items-center justify-center p-2 text-primary hover:bg-primary/10 rounded-lg"
              aria-label="Request Mobilization"
            >
              <GetStartedIcon className="w-6 h-6" />
            </GetStartedButton>

            <Button
              variant="ghost"
              size="icon"
              className="flex items-center justify-center p-2 text-text hover:text-primary rounded-lg"
              onClick={() => setMobileOpen(true)}
              aria-label="Toggle Navigation Menu"
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