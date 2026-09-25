import { useState } from "react";

import {
  FadeUp,
} from "@/components/motion";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Field from "@/components/ui/Field";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Textarea from "@/components/ui/Textarea";
import FormMessage from "@/components/ui/FormMessage";

interface ContactFormProps {

  heading?: string;

  description?: string;

  submitLabel?: string;

  onSubmit?: (
    data: ContactFormData,
  ) => Promise<void> | void;

}

export interface ContactFormData {

  name: string;

  email: string;

  company: string;

  subject: string;

  message: string;

}

export default function ContactForm({

  heading = "Send us a message",

  description = "Tell us about your project and we'll get back to you shortly.",

  submitLabel = "Send Message",

  onSubmit,

}: ContactFormProps) {

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ) {

    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    const form =
      new FormData(e.currentTarget);

    const data: ContactFormData = {

      name: String(form.get("name") ?? ""),

      email: String(form.get("email") ?? ""),

      company: String(form.get("company") ?? ""),

      subject: String(form.get("subject") ?? ""),

      message: String(form.get("message") ?? ""),

    };

    try {

      await onSubmit?.(data);

      setSuccess(true);

      e.currentTarget.reset();

    } catch {

      setError(
        "Unable to send your message.",
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <FadeUp>

      <Card className="space-y-8">

        <div>

          <h3 className="text-2xl font-semibold">

            {heading}

          </h3>

          <p className="mt-2 text-text-muted">

            {description}

          </p>

        </div>

        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >

          <div className="grid gap-6 md:grid-cols-2">

            <Field>

              <Label htmlFor="name">

                Full Name

              </Label>

              <Input
                id="name"
                name="name"
                required
              />

            </Field>

            <Field>

              <Label htmlFor="email">

                Email

              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                required
              />

            </Field>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <Field>

              <Label htmlFor="company">

                Company

              </Label>

              <Input
                id="company"
                name="company"
              />

            </Field>

            <Field>

              <Label htmlFor="subject">

                Subject

              </Label>

              <Input
                id="subject"
                name="subject"
                required
              />

            </Field>

          </div>

          <Field>

            <Label htmlFor="message">

              Message

            </Label>

            <Textarea
              id="message"
              name="message"
              rows={6}
              required
            />

          </Field>

          {success && (

            <FormMessage
              variant="success"
            >
              Your message has been sent.
            </FormMessage>

          )}

          {error && (

            <FormMessage
              variant="error"
            >
              {error}
            </FormMessage>

          )}

          <Button
            type="submit"
            loading={loading}
          >
            {submitLabel}
          </Button>

        </form>

      </Card>

    </FadeUp>

  );

}