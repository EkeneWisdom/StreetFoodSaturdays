import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import branding from "@/config/branding";
import site from "@/config/site";
import { nav } from "@/config/navigation";

type Props = {
  className?: string;
  showText?: boolean;
  compact?: boolean;
};

export default function Logo({
  className,
  showText = true,
  compact = false,
}: Props) {
  const homeHref = nav?.home?.href ?? "#";
  const [isDark, setIsDark] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    // Initial theme check
    const checkIsDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkIsDark();

    // Listen for dark class changes on <html> (when theme toggle is clicked)
    const observer = new MutationObserver(() => {
      checkIsDark();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const logoSrc = isDark
    ? branding?.logoDark || branding?.logoLight
    : branding?.logoLight;

  return (
    <a
      href={homeHref}
      className={cn(
        "group flex items-center gap-3 shrink-0 transition-all duration-200 hover:opacity-90 active:scale-[0.98]",
        className
      )}
    >
      {/* Brand Icon / Logo Image */}
      <div className="relative flex items-center justify-center shrink-0">
        {logoSrc && !imgFailed ? (
          <img
            key={logoSrc} // Key forces immediate re-render when image URL changes
            src={logoSrc}
            alt={site?.name ?? "Logo"}
            width={40}
            height={40}
            fetchPriority="high"
            decoding="async"
            onError={() => setImgFailed(true)}
            className={cn(
              "h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105",
              compact && "h-8"
            )}
          />
        ) : (
          /* Fallback Initial Badge if images fail to load */
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover text-white font-bold shadow-md shadow-primary/20",
              compact && "h-8 w-8 text-sm"
            )}
          >
            {site?.name ? site.name.charAt(0).toUpperCase() : "B"}
          </div>
        )}
      </div>

      {/* Brand Text & Tagline */}
      {showText && (
        <div className="leading-tight flex flex-col justify-center">
          <span
            className={cn(
              "block font-heading font-extrabold tracking-tight text-text transition-colors duration-200 group-hover:text-primary",
              compact ? "text-base" : "text-lg"
            )}
          >
            {site?.shortName}
          </span>

          {!compact && site?.tagline && (
            <p className="text-[11px] font-medium text-text-muted leading-none mt-0.5 tracking-wide">
              {site.tagline}
            </p>
          )}
          
        </div>
      )}
    </a>
  );
}