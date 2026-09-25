import {
  useEffect,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  X,
  MessageCircle,
} from "lucide-react";

import GetStartedForm from "./GetStartedForm";

import contact from "@/config/contact";
import { getStartedServices, getStartedTimeframes, type GetStartedService } from "./getStartedConfig";

interface GetStartedModalProps {
  open: boolean;
  onClose: () => void;
  initialService?: GetStartedService;
}

export default function GetStartedModal({
  open,
  onClose,
  initialService,
}: GetStartedModalProps) {

  useEffect(() => {

    if (!open) return;

    const previous =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previous;
    };

  }, [open]);

  function openWhatsApp(
    answers: Record<string, string>,
  ) {

    const phone =
      contact.whatsapp?.replace(
        /\D/g,
        "",
      );

    if (!phone) return;

    const message = [
      "Hi Sure Pipeline, I'd like to get started.",
      "",

      "1. What does your business do?",
      answers.business ?? "",
      "",

      "2. Where is your business based?",
      answers.location ?? "",
      "",

      "3. Do you currently have a website?",
      answers.website ?? "",
      "",

      "4. What do you already have online?",
      answers.presence
        ? answers.presence.split("||").join(", ")
        : "",
      "",

      "5. How do customers currently find you?",
      answers.discovery ?? "",
      "",

      "6. What would you like customers to do?",
      answers.goal ?? "",
      "",

      "7. Services requested:",
      answers.services
        ? answers.services
            .split("||")
            .map(
              (value) =>
                getStartedServices.find(
                  (service) =>
                    service.value === value,
                )?.label ?? value,
            )
            .join(", ")
        : "",
      "",

      "8. Desired timeframe:",
      getStartedTimeframes.find(
        (timeframe) =>
          timeframe.value ===
          answers.timeframe,
      )?.label ?? answers.timeframe ?? "",
    ].join("\n");
    

    const url =
      `https://wa.me/${phone}?text=` +
      encodeURIComponent(message);

    window.open(
      url,
      "_blank",
      "noopener,noreferrer",
    );

    onClose();
  }

  return (
    <AnimatePresence>
      {open && (

        <motion.div
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-black/40
            p-4
            backdrop-blur-md
            md:p-6
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onMouseDown={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {
              onClose();
            }

          }}
        >

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="get-started-title"
            className="
              relative
              w-full
              max-w-2xl
              overflow-hidden
              rounded-[2rem]
              border
              border-white/20
              bg-background
              shadow-2xl
            "
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 24,
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
            }}
          >

            {/* Header */}

            <div className="flex items-start justify-between gap-6 p-6 pb-2 md:p-8 md:pb-3">

              <div>

                <p className="text-sm font-medium text-primary">
                  Let's get started
                </p>

                <h2
                  id="get-started-title"
                  className="mt-2 text-2xl font-bold tracking-tight md:text-3xl"
                >
                  Tell us a little about your business.
                </h2>

                <p className="mt-2 text-sm text-text-muted md:text-base">
                  A few quick answers will help us
                  understand what your business needs.
                </p>

              </div>

              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="
                  shrink-0
                  rounded-full
                  p-2
                  text-text-muted
                  transition
                  hover:bg-muted
                  hover:text-foreground
                "
              >
                <X size={20} />
              </button>

            </div>

            {/* Form */}

            <div className="p-6 pt-5 md:p-8 md:pt-6">

              <GetStartedForm
                initialService={initialService}
                onComplete={openWhatsApp}
              />

            </div>

            {/* Footer */}

            <div className="border-t border-border bg-muted/30 px-6 py-4 md:px-8">

              <div className="flex items-center gap-2 text-xs text-text-muted">

                <MessageCircle
                  size={14}
                  className="text-primary"
                />

                <span>
                  Your answers will be sent to us
                  on WhatsApp so we can respond
                  personally.
                </span>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}
    </AnimatePresence>
  );
}