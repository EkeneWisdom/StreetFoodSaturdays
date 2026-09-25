import { cn } from "@/lib/cn";

export interface LogoItem {
  name: string;
  logo: string;
  href?: string;
}

interface LogoCloudProps {
  items: LogoItem[];
  monochrome?: boolean;
}

export default function LogoCloud({
  items,
  monochrome = true,
}: LogoCloudProps) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
      {items.map((item) => {
        const logo = (
          <img
            src={item.logo}
            alt={item.name}
            className={cn(
              "mx-auto h-10 w-auto object-contain transition-all",
              monochrome
                ? "opacity-70 grayscale hover:opacity-100 hover:grayscale-0"
                : "opacity-100",
            )}
          />
        );

        return item.href ? (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            {logo}
          </a>
        ) : (
          <div key={item.name}>
            {logo}
          </div>
        );
      })}
    </div>
  );
}