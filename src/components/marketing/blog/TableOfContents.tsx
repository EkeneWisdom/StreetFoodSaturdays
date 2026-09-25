import {
  useEffect,
  useState,
  type HTMLAttributes,
} from "react";

import { cn } from "@/lib/cn";

export interface TocItem {

  id: string;

  heading: string;

  level?: 2 | 3;

}

interface TableOfContentsProps
  extends HTMLAttributes<HTMLElement> {

  items: TocItem[];

}

export default function TableOfContents({

  items,

  className,

  ...props

}: TableOfContentsProps) {

  const [active, setActive] =
    useState("");

  useEffect(() => {

    const observer =
      new IntersectionObserver(

        (entries) => {

          const visible =
            entries.find(
              (e) => e.isIntersecting,
            );

          if (visible) {

            setActive(
              visible.target.id,
            );

          }

        },

        {

          rootMargin:
            "-20% 0px -70% 0px",

        },

      );

    items.forEach((item) => {

      const el =
        document.getElementById(
          item.id,
        );

      if (el) observer.observe(el);

    });

    return () =>
      observer.disconnect();

  }, [items]);

  
  function scrollTo(id: string) {

    const element =
      document.getElementById(id);

    if (!element) return;

    const offset = 110;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `#${id}`,
    );

  }

  return (

    <aside

      className={cn(

        "sticky top-28 hidden lg:block",

        className,

      )}

      {...props}

    >

      <div className="rounded-2xl border border-border bg-surface p-6">

        <h3 className="mb-5 font-semibold">

          Contents

        </h3>

        <nav>

          <ul className="space-y-2">

            {items.map((item) => (

              <li key={item.id}>

                <button

                  type="button"

                  onClick={() =>
                    scrollTo(item.id)
                  }

                  className={cn(

                    "block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",

                    item.level === 3 &&
                      "pl-8",

                    active === item.id

                      ? "bg-primary text-primary-foreground"

                      : "text-text-muted hover:bg-muted",

                  )}

                >

                  {item.heading}

                </button>

              </li>

            ))}

          </ul>

        </nav>

      </div>

    </aside>

  );

}