"use client";

import { useEffect, useRef, useState } from "react";
import ContactCard from "@/components/contact/ContactCard";
import ContactForm, {
  getErrors,
  type FormData,
  type FormField,
  type SubmitStatus,
} from "@/components/contact/ContactForm";

const EMAIL = "andrewbeaver@live.ca";

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactContent() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>(
    {}
  );
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState<string>("");

  const errors = getErrors(formData);
  const isFormValid = Object.keys(errors).length === 0;
  const isSubmitting = submitStatus === "submitting";
  const successResetRef = useRef<HTMLButtonElement>(null);

  // Move focus to "Send another message" button when success panel appears
  useEffect(() => {
    if (submitStatus === "success") {
      successResetRef.current?.focus();
    }
  }, [submitStatus]);

  // Handlers

  function handleChange(field: FormField, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleBlur(field: FormField) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function handleReset() {
    setFormData(EMPTY_FORM);
    setTouched({});
    setSubmitStatus("idle");
    setSubmitError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Mark all fields touched to show any remaining errors
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isFormValid) return;

    setSubmitStatus("submitting");
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus("success");
        return;
      }

      let message = "Something went wrong. Please try again.";
      const contentType = res.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) {
        const body = await res.json();
        if (body?.error) message = body.error;
      } else if (res.status === 503) {
        message =
          "Email service is temporarily unavailable. Please try again later.";
      }
      setSubmitError(message);
      setSubmitStatus("error");
    } catch {
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
      setSubmitStatus("error");
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section
      className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      {/* Page header */}
      <div className="mb-12 animate-[fadeIn_0.4s_ease]">
        <h1
          id="contact-heading"
          className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight sm:text-5xl"
        >
          Get in Touch
        </h1>
        <p className="mt-3 text-lg text-slate-500 dark:text-slate-400 max-w-xl">
          Let's build something!
        </p>
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] items-start animate-[fadeIn_0.5s_0.1s_ease_both]">
        <ContactForm
          formData={formData}
          touched={touched}
          errors={errors}
          submitStatus={submitStatus}
          submitError={submitError}
          isSubmitting={isSubmitting}
          successResetRef={successResetRef}
          onFieldChange={handleChange}
          onFieldBlur={handleBlur}
          onSubmit={handleSubmit}
          onReset={handleReset}
        />

        <ContactCard email={EMAIL} copied={copied} onCopy={handleCopy} />
      </div>
    </section>
  );
}
