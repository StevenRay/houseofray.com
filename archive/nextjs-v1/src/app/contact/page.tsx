"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    // TODO: Implement form submission (e.g., to Formspree, Netlify Forms, or custom API)
    // For now, simulate a submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormState("success");
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <header className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-purple">Contact</h1>
        <p className="text-lg text-purple-light">
          For inquiries regarding choreography commissions, guest artist
          residencies, master classes, or speaking engagements.
        </p>
      </header>

      {formState === "success" ? (
        <div
          className="bg-cream-dark border border-mauve-light rounded-lg p-8 text-center"
          role="status"
          aria-live="polite"
        >
          <p className="text-lg text-purple font-medium mb-2">
            Thank you for your message.
          </p>
          <p className="text-purple-light">
            I&apos;ll be in touch soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-purple-dark mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              className="w-full px-4 py-3 bg-cream border border-mauve rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-shadow text-purple-dark"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-purple-dark mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              spellCheck="false"
              className="w-full px-4 py-3 bg-cream border border-mauve rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-shadow text-purple-dark"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-purple-dark mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              autoComplete="off"
              placeholder="Commission inquiry, masterclass booking…"
              className="w-full px-4 py-3 bg-cream border border-mauve rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-shadow text-purple-dark placeholder:text-mauve-dark"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-purple-dark mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell me about your project or event…"
              className="w-full px-4 py-3 bg-cream border border-mauve rounded-lg focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-shadow resize-y text-purple-dark placeholder:text-mauve-dark"
            />
          </div>

          <button
            type="submit"
            disabled={formState === "submitting"}
            className="w-full sm:w-auto px-8 py-3 bg-gold text-purple-dark font-medium rounded-lg hover:bg-gold-light disabled:bg-mauve disabled:cursor-not-allowed transition-colors focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
          >
            {formState === "submitting" ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending…
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
