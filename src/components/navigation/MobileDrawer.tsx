import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ShieldCheck, PhoneCall, Mail, ChevronRight, ArrowRight } from "lucide-react";

import { navigation } from "@/config/navigation";
import site from "@/config/site";
import contact from "@/config/contact";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Logo from "@/components/navigation/Logo";

import MobileNavItem from "./MobileNavItem";
import Portal from "@/components/ui/Portal";
import GetStartedButton from "@/widgets/get-started/GetStartedButton";
import { GetStartedIcon } from "@/components/icons/GetStartedIcon";

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

  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Overlay with Heavy Glass Blur */}
            <motion.div
              className="fixed inset-0 z-[90] bg-slate-950/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* Slide-out Drawer Panel */}
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
              {/* Header Bar */}
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
                    className="rounded-lg text-text hover:text-primary hover:bg-primary/10"
                    aria-label="Close navigation menu"
                  >
                    <X size={22} />
                  </Button>
                </div>
              </div>

              {/* Status Ribbon Callout */}
              <div className="border-b border-border/40 bg-primary/10 px-6 py-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-bold text-primary uppercase tracking-wider">
                    <ShieldCheck size={14} className="shrink-0" />
                    <span>Heavy Equipment & Marine Fleet Ready</span>
                  </span>
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>

              {/* Navigation Links Scrollable Area */}
              <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                <div className="flex flex-col gap-1">
                  <span className="mb-2 text-[11px] font-bold uppercase tracking-widest text-text-muted">
                    Navigation
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

                {/* Direct Action Hub */}
                <div className="pt-4 border-t border-border/60 space-y-3">
                  <GetStartedButton
                    variant="primary"
                    fullWidth
                    className="group flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-bold text-white shadow-lg transition-all hover:bg-primary-hover"
                  >
                    <GetStartedIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                    <span>Request For Quote</span>
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </GetStartedButton>

                  {/* Direct Dispatch Line Contact Strip */}
                  {(contact?.phone || site?.email) && (
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-text-muted">
                        Contact us
                      </span>

                      {contact?.phone && (
                        <a
                          href={`tel:${contact.phone}`}
                          className="flex items-center justify-between rounded-lg border border-border/60 bg-surface-elevated/40 p-3 text-xs font-semibold text-text transition-colors hover:border-primary hover:text-primary"
                        >
                          <div className="flex items-center gap-2.5">
                            <PhoneCall size={15} className="text-primary shrink-0" />
                            <span>{contact.phone}</span>
                          </div>
                          <ChevronRight size={14} className="text-text-muted" />
                        </a>
                      )}

                      {site?.email && (
                        <a
                          href={`mailto:${site.email}`}
                          className="flex items-center justify-between rounded-lg border border-border/60 bg-surface-elevated/40 p-3 text-xs font-semibold text-text transition-colors hover:border-primary hover:text-primary"
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <Mail size={15} className="text-primary shrink-0" />
                            <span className="truncate">{site.email}</span>
                          </div>
                          <ChevronRight size={14} className="text-text-muted" />
                        </a>
                      )}
                    </div>
                  )}
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