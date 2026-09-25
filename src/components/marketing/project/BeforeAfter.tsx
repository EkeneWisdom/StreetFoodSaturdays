import {
  useRef,
  useState,
  useEffect,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { motion } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";

import { FadeUp } from "@/components/motion";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";

interface BeforeAfterProps
  extends HTMLAttributes<HTMLDivElement> {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: ReactNode;
  afterLabel?: ReactNode;
  initialPosition?: number;
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  initialPosition = 50,
  className,
  ...props
}: BeforeAfterProps) {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const dragging =
    useRef(false);

  const [position, setPosition] =
    useState(initialPosition);

  const [showPercent, setShowPercent] =
    useState(false);

  function update(clientX: number) {
    const rect =
      containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    const value =
      ((clientX - rect.left) / rect.width) * 100;

    setPosition(
      Math.max(
        0,
        Math.min(100, value),
      ),
    );
  }

  useEffect(() => {
    function mouseMove(e: MouseEvent) {
      if (!dragging.current) return;
      update(e.clientX);
    }

    function mouseUp() {
      dragging.current = false;
      setShowPercent(false);
    }

    window.addEventListener(
      "mousemove",
      mouseMove,
    );

    window.addEventListener(
      "mouseup",
      mouseUp,
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        mouseMove,
      );

      window.removeEventListener(
        "mouseup",
        mouseUp,
      );
    };
  }, []);

  return (
    <FadeUp>
      <Card
        className={cn(
          "overflow-hidden p-0",
          className,
        )}
        {...props}
      >
        <div
          ref={containerRef}
          className="relative aspect-[16/10] overflow-hidden select-none"
        >
          {/* Before */}

          <img
            src={beforeImage}
            alt="Before"
            draggable={false}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* After */}

          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{
              width: `${position}%`,
            }}
          >
            <img
              src={afterImage}
              alt="After"
              draggable={false}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Divider */}

          <motion.div
            animate={{
              left: `${position}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="absolute inset-y-0 w-1 bg-white shadow-xl"
            style={{
              transform:
                "translateX(-50%)",
            }}
          >
            <button
              type="button"
              aria-label="Comparison slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(
                position,
              )}
              role="slider"
              tabIndex={0}
              onMouseDown={() => {
                dragging.current = true;
                setShowPercent(true);
              }}
              onTouchStart={() => {
                dragging.current = true;
                setShowPercent(true);
              }}
              onTouchMove={(e) =>
                update(
                  e.touches[0].clientX,
                )
              }
              onTouchEnd={() => {
                dragging.current = false;
                setShowPercent(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") {
                  setPosition((p) =>
                    Math.max(0, p - 2),
                  );
                }

                if (e.key === "ArrowRight") {
                  setPosition((p) =>
                    Math.min(100, p + 2),
                  );
                }
              }}
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-14
                w-14
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border-4
                border-white
                bg-primary
                text-white
                shadow-2xl
                transition-transform
                hover:scale-110
                active:scale-95
                cursor-ew-resize
              "
            >
              <ChevronsLeftRight
                size={22}
              />
            </button>

            {showPercent && (
              <div
                className="
                  absolute
                  left-1/2
                  -top-12
                  -translate-x-1/2
                  rounded-full
                  bg-black/75
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-white
                "
              >
                {Math.round(position)}%
              </div>
            )}
          </motion.div>

          {/* Labels */}

          <span
            className="
              absolute
              left-5
              top-5
              rounded-full
              bg-black/60
              px-4
              py-2
              text-sm
              text-white
            "
          >
            {beforeLabel}
          </span>

          <span
            className="
              absolute
              right-5
              top-5
              rounded-full
              bg-black/60
              px-4
              py-2
              text-sm
              text-white
            "
          >
            {afterLabel}
          </span>
        </div>
      </Card>
    </FadeUp>
  );
}