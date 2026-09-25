import {
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

import FAQItem from "./FAQItem";
import slugify from "@/lib/slugify";

export interface AccordionItem {
  id?: string;

  question: string;

  answer: ReactNode;

  icon?: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];

  allowMultiple?: boolean;

  defaultOpen?: number[];
}

export default function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
}: AccordionProps) {
  const [open, setOpen] =
    useState<number[]>(defaultOpen);

  function getItemId(item: AccordionItem) {
    return item.id ?? slugify(item.question);
  }

  function toggle(index: number) {
    const id = getItemId(items[index]);

    if (allowMultiple) {
      setOpen((current) =>
        current.includes(index)
          ? current.filter((i) => i !== index)
          : [...current, index],
      );
    } else {
      setOpen((current) =>
        current[0] === index
          ? []
          : [index],
      );
    }

    const nextHash =
      window.location.hash === `#${id}`
        ? ""
        : `#${id}`;

    history.replaceState(
      null,
      "",
      nextHash || window.location.pathname,
    );

  }

  useEffect(() => {
    const id = decodeURIComponent(
      window.location.hash.replace(/^#/, ""),
    );

    if (!id) return;

    const index = items.findIndex(
      (item) => getItemId(item) === id,
    );

    if (index < 0) return;

    setOpen(
      allowMultiple
        ? (current) =>
            current.includes(index)
              ? current
              : [...current, index]
        : [index],
    );
  }, [items, allowMultiple]);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const id = getItemId(item);

        return (
          <FAQItem
            key={id}
            id={id}
            question={item.question}
            answer={item.answer}
            icon={item.icon}
            open={open.includes(index)}
            onToggle={() => toggle(index)}
          />
        );
      })}
    </div>
  );
}






{/*

import {
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

import FAQItem from "./FAQItem";
import slugify from "@/lib/slugify";

export interface AccordionItem {
  id?: string;

  question: string;

  answer: ReactNode;

  icon?: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];

  allowMultiple?: boolean;

  defaultOpen?: number[];
}

export default function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
}: AccordionProps) {

  const [open, setOpen] =
    useState<number[]>(defaultOpen);

  function toggle(index: number) {
    const id =
      items[index].id ??
      items[index].question
        .toLowerCase()
        .replace(/\s+/g, "-");

    if (allowMultiple) {
      setOpen(current =>
        current.includes(index)
          ? current.filter(i => i !== index)
          : [...current, index],
      );
    } else {
      setOpen(current =>
        current[0] === index
          ? []
          : [index],
      );
    }

    if (
      window.location.hash !== `#${id}`
    ) {
      history.replaceState(
        null,
        "",
        `#${id}`,
      );
    }
  }

  useEffect(() => {

    const hash =
      window.location.hash.replace("#", "");

    if (!hash) return;

    const index = items.findIndex(
      item =>
        ( item.id ?? 
          slugify(item.question)
        ) === hash,
    );

    if (index >= 0) {

      setOpen([index]);

      setTimeout(() => {

        document
          .getElementById(hash)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

      }, 150);

    }

  }, [items]);

  return (

    <div className="space-y-4">

      {items.map((item, index) => {

        const id =
          item.id ??
          slugify(item.question);

        return (

          <FAQItem
            key={id}
            id={id}
            question={item.question}
            answer={item.answer}
            icon={item.icon}
            open={open.includes(index)}
            onToggle={() => toggle(index)}
          />

        );

      })}

    </div>

  );

}

*/}