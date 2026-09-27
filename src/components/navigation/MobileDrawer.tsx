import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  X, 
  Flame, 
  Waves, 
  Utensils, 
  ChevronRight, 
  ArrowRight, 
  MapPin, 
} from "lucide-react";
import { FaWhatsapp as FaWhatsappIcon } from "react-icons/fa6";

import { navigation, nav } from "@/config/navigation";
import site from "@/config/site";
import contact from "@/config/contact";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Logo from "@/components/navigation/Logo";

import MobileNavItem from "./MobileNavItem";
import Portal from "@/components/ui/Portal";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  headerHeight: number | string;
  pathname?: string;
}

export default function MobileDrawer({
  open,
  onClose,
  headerHeight,
  pathname = "",
}: MobileDrawerProps) {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Reservation CTA Target & WhatsApp Link
  const reservationHref = nav?.reservation?.href ?? "#";
  const reservationTitle = nav?.reservation?.title ?? "Reserve Platter";
  const whatsappUrl = contact?.whatsappHref || (contact?.phone ? `https://wa.me/${String(contact.phone).replace(/\D/g, "")}` : "#");

  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Overlay with Ambient Glass Blur */}
            <motion.div
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* Slide-out Mobile Navigation Drawer */}
            <motion.aside
              className="fixed right-0 top-0 z-[100] flex h-screen w-full max-w-sm flex-col border-l border-border/80 bg-surface/95 shadow-2xl backdrop-blur-2xl dark:bg-surface-elevated/95"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 35,
              }}
            >
              {/* Top Drawer Header Bar */}
              <div
                className="flex items-center justify-between border-b border-border/60 px-6 shrink-0 bg-surface-elevated/40"
                style={{
                  height: typeof headerHeight === "number" ? `${headerHeight}px` : headerHeight,
                }}
              >
                <Logo />

                <div className="flex items-center gap-2">
                  <ThemeToggle />

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="rounded-xl text-text hover:text-primary hover:bg-primary/10"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </Button>
                </div>
              </div>

              {/* Riverfront Status Ribbon */}
              <div className="border-b border-border/40 bg-primary/10 px-6 py-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-bold text-primary uppercase tracking-wider text-[11px]">
                    <Flame size={13} className="animate-pulse shrink-0" />
                    <span>Gourmet Woodfire Dining</span>
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-secondary">
                    <Waves size={12} />
                    <span>Mt. James River</span>
                  </span>
                </div>
              </div>

              {/* Navigation Links Scrollable Body */}
              <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                <div className="flex flex-col gap-1">
                  <span className="mb-2 text-[11px] font-extrabold uppercase tracking-widest text-text-muted">
                    Explore SFS
                  </span>

                  {navigation
                    ?.filter((item) => item?.navbar)
                    .map((item) => (
                      <MobileNavItem
                        key={item?.href ?? item?.title}
                        item={item}
                        pathname={pathname}
                        onNavigate={onClose}
                      />
                    ))}
                </div>

                {/* Direct Action & Reservation Callout Hub */}
                <div className="pt-4 border-t border-border/60 space-y-3">
                  <a
                    href={reservationHref}
                    onClick={onClose}
                    className="group flex items-center justify-center gap-2.5 rounded-xl bg-primary py-3.5 px-4 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover active:scale-98"
                  >
                    <Utensils size={18} />
                    <span>{reservationTitle}</span>
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </a>

                  {/* Direct WhatsApp Concierge & Location Assistance */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-text-muted">
                      Direct Concierge
                    </span>

                    {contact?.phone && (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-bold text-emerald-600 dark:text-emerald-400 transition-colors hover:border-emerald-500"
                      >
                        <div className="flex items-center gap-2.5">
                          <FaWhatsappIcon size={16} className="text-emerald-500 shrink-0" />
                          <span>WhatsApp: {contact.phone}</span>
                        </div>
                        <ChevronRight size={14} className="text-emerald-500/70" />
                      </a>
                    )}

                    <a
                      href={nav?.location?.href}
                      onClick={onClose}
                      className="flex items-center justify-between rounded-xl border border-border/60 bg-surface-elevated/40 p-3 text-xs font-semibold text-text transition-colors hover:border-primary hover:text-primary"
                    >
                      <div className="flex items-center gap-2.5">
                        <MapPin size={15} className="text-secondary shrink-0" />
                        <span>Golden Spring Directions</span>
                      </div>
                      <ChevronRight size={14} className="text-text-muted" />
                    </a>
                  </div>
                </div>
              </nav>

              {/* Drawer Footer */}
              <div className="border-t border-border/60 bg-surface-elevated/30 p-4 text-center text-xs text-text-muted shrink-0">
                <p>{site?.copyright}</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}