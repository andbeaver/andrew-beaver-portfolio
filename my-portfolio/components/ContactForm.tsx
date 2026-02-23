"use client";

import { RefObject } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export const SUBJECTS = [
  "Job Opportunity",
  "Freelance Inquiry",
  "Collaboration",
  "General Question",
] as const;

export type FormField = "name" | "email" | "subject" | "message";
export type SubmitStatus = "idle" | "submitting" | "success" | "error";

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Validation helpers ───────────────────────────────────────────────────────

export function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function getErrors(data: FormData) {
  const errors: Partial<Record<FormField, string>> = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.subject) errors.subject = "Please select a subject.";
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface ContactFormProps {
  formData: FormData;
  touched: Partial<Record<FormField, boolean>>;
  errors: Partial<Record<FormField, string>>;
  submitStatus: SubmitStatus;
  submitError: string;
  isSubmitting: boolean;
  successResetRef: RefObject<HTMLButtonElement | null>;
  onFieldChange: (field: FormField, value: string) => void;
  onFieldBlur: (field: FormField) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
}

// ─── Shared error message ─────────────────────────────────────────────────────

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p
      id={id}
      role="alert"
      className="text-xs text-red-500 flex items-center gap-1 animate-[fadeIn_0.2s_ease]"
    >
      <svg
        aria-hidden="true"
        className="w-3 h-3 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      {message}
    </p>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactForm({
  formData,
  touched,
  errors,
  submitStatus,
  submitError,
  isSubmitting,
  successResetRef,
  onFieldChange,
  onFieldBlur,
  onSubmit,
  onReset,
}: ContactFormProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <h2
        id="contact-form-heading"
        className="text-lg font-semibold text-slate-900 dark:text-white mb-6"
      >
        Send a Message
      </h2>

      {/* ── Success state ── */}
      {submitStatus === "success" && (
        <div
          role="status"
          aria-label="Message sent successfully"
          className="flex flex-col items-center text-center gap-4 py-8 animate-[slideUp_0.45s_cubic-bezier(0.16,1,0.3,1)]"
        >
          <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center animate-[scaleIn_0.35s_0.2s_cubic-bezier(0.34,1.56,0.64,1)_both]">
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-emerald-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              Message sent!
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
          </div>
          <button
            ref={successResetRef}
            type="button"
            onClick={onReset}
            className="mt-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded transition-colors"
          >
            Send another message
          </button>
        </div>
      )}

      {/* ── Form (hidden after success) ── */}
      {submitStatus !== "success" && (
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-5"
          aria-labelledby="contact-form-heading"
          noValidate
        >
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-name"
              className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest"
            >
              Name{" "}
              <span aria-hidden="true" className="text-red-400">
                *
              </span>
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={(e) => onFieldChange("name", e.target.value)}
              onBlur={() => onFieldBlur("name")}
              placeholder="Your name"
              disabled={isSubmitting}
              required
              aria-required="true"
              aria-invalid={!!(touched.name && errors.name)}
              aria-describedby={
                touched.name && errors.name ? "contact-name-error" : undefined
              }
              className={`border rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus-visible:ring-2 focus:border-transparent focus:-translate-y-px focus:shadow-sm transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed ${
                touched.name && errors.name
                  ? "border-red-400 focus-visible:ring-red-300"
                  : "border-slate-200 dark:border-slate-600 focus-visible:ring-indigo-400"
              }`}
            />
            {touched.name && errors.name && (
              <FieldError id="contact-name-error" message={errors.name} />
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-email"
              className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest"
            >
              Email{" "}
              <span aria-hidden="true" className="text-red-400">
                *
              </span>
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => onFieldChange("email", e.target.value)}
              onBlur={() => onFieldBlur("email")}
              placeholder="your@email.com"
              disabled={isSubmitting}
              required
              aria-required="true"
              aria-invalid={!!(touched.email && errors.email)}
              aria-describedby={
                touched.email && errors.email
                  ? "contact-email-error"
                  : undefined
              }
              className={`border rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus-visible:ring-2 focus:border-transparent focus:-translate-y-px focus:shadow-sm transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed ${
                touched.email && errors.email
                  ? "border-red-400 focus-visible:ring-red-300"
                  : "border-slate-200 dark:border-slate-600 focus-visible:ring-indigo-400"
              }`}
            />
            {touched.email && errors.email && (
              <FieldError id="contact-email-error" message={errors.email} />
            )}
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-subject"
              className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest"
            >
              Subject{" "}
              <span aria-hidden="true" className="text-red-400">
                *
              </span>
            </label>
            <select
              id="contact-subject"
              value={formData.subject}
              onChange={(e) => onFieldChange("subject", e.target.value)}
              onBlur={() => onFieldBlur("subject")}
              disabled={isSubmitting}
              required
              aria-required="true"
              aria-invalid={!!(touched.subject && errors.subject)}
              aria-describedby={
                touched.subject && errors.subject
                  ? "contact-subject-error"
                  : undefined
              }
              className={`border rounded-lg px-4 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus-visible:ring-2 focus:border-transparent focus:-translate-y-px transition-all duration-150 appearance-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${
                touched.subject && errors.subject
                  ? "border-red-400 focus-visible:ring-red-300 text-slate-400"
                  : formData.subject
                  ? "border-slate-200 dark:border-slate-600 focus-visible:ring-indigo-400 text-slate-900 dark:text-white"
                  : "border-slate-200 dark:border-slate-600 focus-visible:ring-indigo-400 text-slate-400 dark:text-slate-500"
              }`}
            >
              <option value="" disabled>
                Select a subject&hellip;
              </option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s} className="text-slate-900">
                  {s}
                </option>
              ))}
            </select>
            {touched.subject && errors.subject && (
              <FieldError
                id="contact-subject-error"
                message={errors.subject}
              />
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="contact-message"
                className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest"
              >
                Message{" "}
                <span aria-hidden="true" className="text-red-400">
                  *
                </span>
              </label>
              <span
                id="contact-message-counter"
                aria-live="polite"
                aria-atomic="true"
                className={`text-xs tabular-nums transition-colors ${
                  formData.message.trim().length > 0 &&
                  formData.message.trim().length < 10
                    ? "text-red-400"
                    : "text-slate-400"
                }`}
              >
                {formData.message.trim().length} / 10 min
              </span>
            </div>
            <textarea
              id="contact-message"
              rows={6}
              value={formData.message}
              onChange={(e) => onFieldChange("message", e.target.value)}
              onBlur={() => onFieldBlur("message")}
              placeholder="What's on your mind?"
              disabled={isSubmitting}
              required
              aria-required="true"
              aria-invalid={!!(touched.message && errors.message)}
              aria-describedby={[
                "contact-message-counter",
                touched.message && errors.message
                  ? "contact-message-error"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              className={`border rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus-visible:ring-2 focus:border-transparent focus:shadow-sm transition-all duration-150 resize-none disabled:opacity-60 disabled:cursor-not-allowed ${
                touched.message && errors.message
                  ? "border-red-400 focus-visible:ring-red-300"
                  : "border-slate-200 dark:border-slate-600 focus-visible:ring-indigo-400"
              }`}
            />
            {touched.message && errors.message && (
              <FieldError
                id="contact-message-error"
                message={errors.message}
              />
            )}
          </div>

          {/* Error banner */}
          {submitStatus === "error" && (
            <div
              role="alert"
              aria-live="assertive"
              className="flex items-start gap-3 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 px-4 py-3 text-sm text-red-700 dark:text-red-400 animate-[fadeIn_0.3s_ease]"
            >
              <svg
                aria-hidden="true"
                className="mt-0.5 w-4 h-4 shrink-0 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{submitError}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
            className="relative flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200 active:translate-y-0 active:shadow-none active:bg-indigo-800 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none text-white font-semibold text-sm rounded-lg px-6 py-3 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          >
            {isSubmitting && (
              <svg
                aria-hidden="true"
                className="w-4 h-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {isSubmitting ? "Sending\u2026" : "Send Message"}
          </button>
        </form>
      )}

      {/* Response time */}
      {submitStatus !== "success" && (
        <p className="mt-4 text-xs text-slate-400 dark:text-slate-500 text-center flex items-center justify-center gap-1.5">
          <svg
            aria-hidden="true"
            className="w-3.5 h-3.5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          I typically respond within 24&ndash;48 hours.
        </p>
      )}
    </div>
  );
}
