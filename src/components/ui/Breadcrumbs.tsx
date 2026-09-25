import {
  ChevronRight,
  House,
} from "lucide-react";

import { cn } from "@/lib/cn";

export interface BreadcrumbItem {

  label: string;

  href?: string;

}

interface BreadcrumbsProps {

  items?: BreadcrumbItem[];

  className?: string;

  showHome?: boolean;

}

function titleCase(value: string) {

  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) =>
      m.toUpperCase(),
    );

}

export default function Breadcrumbs({

  items,

  className,

  showHome = true,

}: BreadcrumbsProps) {

  const pathname =
  typeof window !== "undefined"
    ? window.location.pathname
    : "/";

  const autoItems =
    pathname
      .split("/")
      .filter(Boolean)
      .map((segment, index, array) => ({

        label: titleCase(segment),

        href:
          "/" +
          array
            .slice(0, index + 1)
            .join("/"),

      }));

  const breadcrumbs =
    items ?? autoItems;

  return (

    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center text-sm text-text-muted",
        className,
      )}
    >

      <ol className="flex flex-wrap items-center gap-2">

        {showHome && (

          <li>

            <a
              href="/"
              className="transition-colors hover:text-primary"
            >

              <House
                size={16}
              />

            </a>

          </li>

        )}

        {breadcrumbs.map(
          (item, index) => {

            const last =
              index ===
              breadcrumbs.length - 1;

            return (

              <li
                key={
                  item.href ??
                  item.label
                }
                className="flex items-center gap-2"
              >

                <ChevronRight
                  size={14}
                />

                {last ||
                !item.href ? (

                  <span className="font-medium text-foreground">

                    {item.label}

                  </span>

                ) : (

                  <a
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >

                    {item.label}

                  </a>

                )}

              </li>

            );

          },
        )}

      </ol>

    </nav>

  );

}









{/**

<Breadcrumbs />

or

<Breadcrumbs
  items={[
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Web Design",
    },
  ]}
/>

    */}