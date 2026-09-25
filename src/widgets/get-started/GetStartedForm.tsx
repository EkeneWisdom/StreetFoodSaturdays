import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";

import Button from "@/components/ui/Button";

import {
  getStartedQuestions,
} from "./getStartedQuestions";

import {
  getStartedServices,
  getStartedTimeframes,
} from "./getStartedConfig";

import type {
  GetStartedService,
} from "./getStartedConfig";

interface GetStartedFormProps {
  initialService?: GetStartedService;

  onComplete: (
    answers: Record<string, string>,
  ) => void;
}

export default function GetStartedForm({
  initialService,
  onComplete,
}: GetStartedFormProps) {

  const [step, setStep] = useState(0);

  const [answers, setAnswers] =
    useState<Record<string, string>>({});
  
  const inputRef = 
    useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setAnswers((current) => ({
      ...current,
      services:
        initialService ??
        current.services ??
        getStartedServices
          .map((service) => service.value)
          .join("||"),
    }));
  }, [initialService]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  const question =
    getStartedQuestions[step];

  const answer =
    answers[question.id] ?? "";

  const progress =
    ((step + 1) /
      getStartedQuestions.length) *
    100;

  function updateAnswer(value: string) {
    setAnswers((current) => ({
      ...current,
      [question.id]: value,
    }));
  }

  function next() {
    if (!answer.trim()) return;

    if (
      step ===
      getStartedQuestions.length - 1
    ) {
      onComplete(answers);
      return;
    }

    setStep((current) => current + 1);
  }

  function previous() {
    setStep((current) =>
      Math.max(0, current - 1),
    );
  }

  function toggleMultiSelect(
    option: string,
  ) {
    if (option === "None") {
      updateAnswer(
        answer === "None" ? "" : "None",
      );
      return;
    }

    const selected =
      answer
        .split("||")
        .filter(Boolean)
        .filter(
          (item) => item !== "None",
        );

    const next =
      selected.includes(option)
        ? selected.filter(
            (item) => item !== option,
          )
        : [...selected, option];

    updateAnswer(next.join("||"));
  }

  function renderServices() {
    const selected =
      answer
        .split("||")
        .filter(Boolean);

    return (
      <div className="flex flex-wrap gap-3">
        {getStartedServices.map(
          (service) => {
            const isSelected =
              selected.includes(
                service.value,
              );

            return (
              <button
                key={service.value}
                type="button"
                onClick={() =>
                  toggleMultiSelect(
                    service.value,
                  )
                }
                className={`
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    isSelected
                      ? "border-secondary bg-secondary text-white"
                      : "border-border bg-surface text-text hover:border-secondary hover:text-secondary"
                  }
                `}
              >
                <span>
                  {service.label}
                </span>

                {isSelected && (
                  <Check
                    size={16}
                    className="shrink-0"
                  />
                )}
              </button>
            );
          },
        )}
      </div>
    );
  }

  function renderTimeframe() {
    return (
      <div className="flex flex-wrap gap-3">
        {getStartedTimeframes.map(
          (timeframe) => {
            const selected =
              answer === timeframe.value;

            return (
              <button
                key={timeframe.value}
                type="button"
                onClick={() =>
                  updateAnswer(
                    timeframe.value,
                  )
                }
                className={`
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    selected
                      ? "border-secondary bg-secondary text-white"
                      : "border-border bg-surface text-text hover:border-secondary hover:text-secondary"
                  }
                `}
              >
                <span>
                  {timeframe.label}
                </span>

                {selected && (
                  <Check size={16} />
                )}
              </button>
            );
          },
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Progress */}

      <div>
        <div className="mb-3 flex justify-between text-sm text-text-muted">
          <span>
            Question {step + 1} of{" "}
            {getStartedQuestions.length}
          </span>

          <span>
            {Math.round(progress)}%
          </span>
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Question */}

      <div className="space-y-4">

        <h3 className="text-2xl font-semibold tracking-tight">
          {question.question}
        </h3>

        {question.id === "services"
          ? renderServices()
          : question.id === "timeframe"
            ? renderTimeframe()
            : question.type === "multi-select"
              ? (
                <div className="flex flex-wrap gap-3">
                  {question.options?.map(
                    (option) => {
                      const selected =
                        answer
                          .split("||")
                          .filter(Boolean)
                          .includes(option);

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            toggleMultiSelect(
                              option,
                            )
                          }
                          className={`
                            rounded-full
                            border
                            px-4
                            py-2.5
                            text-sm
                            font-medium
                            transition-colors
                            ${
                              selected
                                ? "border-secondary bg-secondary text-white"
                                : "border-border bg-surface text-text hover:border-secondary hover:text-secondary"
                            }
                          `}
                        >
                          {option}
                        </button>
                      );
                    },
                  )}
                </div>
              )
              : (
                <textarea
                  ref={inputRef}
                  value={answer}
                  onChange={(event) =>
                    updateAnswer(
                      event.target.value,
                    )
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" &&
                      !event.shiftKey
                    ) {
                      event.preventDefault();
                      next();
                    }
                  }}
                  rows={4}
                  placeholder={
                    question.placeholder
                  }
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-border
                    bg-background
                    px-5
                    py-4
                    text-base
                    outline-none
                    transition
                    placeholder:text-text-muted
                    focus:border-primary
                    focus:ring-4
                    focus:ring-primary/10
                  "
                />
              )}

      </div>

      {/* Actions */}

      <div className="flex items-center justify-between gap-3">

        <Button
          type="button"
          variant="ghost"
          disabled={step === 0}
          onClick={previous}
          leftIcon={
            <ArrowLeft size={16} />
          }
        >
          Back
        </Button>

        <Button
          type="button"
          variant="secondary"
          disabled={!answer.trim()}
          onClick={next}
          rightIcon={
            <ArrowRight size={16} />
          }
        >
          {step ===
          getStartedQuestions.length - 1
            ? "Continue to WhatsApp"
            : "Next"}
        </Button>

      </div>

    </div>
  );
}