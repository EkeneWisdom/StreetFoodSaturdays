import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import Button from "@/components/ui/Button";

import TestimonialCard, {
  type TestimonialCardProps,
} from "./TestimonialCard";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface TestimonialSliderProps {
  items: TestimonialCardProps[];
}

export default function TestimonialSlider({
  items,
}: TestimonialSliderProps) {

  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    [],
  );

  const [emblaRef, emblaApi] =
    useEmblaCarousel(
      {
        loop: true,
        align: "start",
      },
      [autoplay],
    );

  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const [scrollSnaps, setScrollSnaps] =
    useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(
      emblaApi.selectedScrollSnap(),
    );
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(
      emblaApi.scrollSnapList(),
    );

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    autoplay.reset();
  }, [emblaApi, autoplay]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    autoplay.reset();
  }, [emblaApi, autoplay]);

  return (
    <div className="space-y-8">

      <div
        ref={emblaRef}
        className="overflow-hidden"
      >
        <div className="-ml-6 flex">

          {items.map((item) => (

            <div
              key={item.name}
              className="
                min-w-0
                flex-[0_0_100%]
                pl-6

                md:flex-[0_0_50%]

                lg:flex-[0_0_33.333%]
              "
            >
              <TestimonialCard
                {...item}
              />
            </div>

          ))}

        </div>
      </div>

      <div className="flex flex-col items-center gap-6">

        <div className="flex gap-3">

          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </Button>

        </div>

        <div className="flex items-center gap-2">

          {scrollSnaps.map((_, index) => (

            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => {
                emblaApi?.scrollTo(index);
                autoplay.reset();
              }}
              className={
                index === selectedIndex
                  ? "h-2.5 w-8 rounded-full bg-primary transition-all duration-300"
                  : "h-2.5 w-2.5 rounded-full bg-border transition-all duration-300 hover:bg-primary/40"
              }
            />

          ))}

        </div>

      </div>

    </div>
  );
}