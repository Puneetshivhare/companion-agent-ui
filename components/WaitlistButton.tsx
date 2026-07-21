"use client";

import { useState, FormEvent } from "react";
import { content } from "@/content";

// Shared Formspree form for all project waitlists — submissions are tagged
// with the project name via a hidden field. Replace with your own endpoint
// from https://formspree.io once created.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_ME";

export default function WaitlistButton({
  label = "Login",
  variant = "nav",
}: {
  label?: string;
  variant?: "nav" | "cta";
}) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, project: content.projectName }),
      });
    } catch {
      // Fail silently — the visitor still gets a confirmation either way.
    }
    setStatus("sent");
  }

  const triggerClass =
    variant === "nav"
      ? "rounded-md border border-line px-4 py-2 text-[13px] font-medium text-ink transition-transform duration-300 ease-out hover:scale-[1.04]"
      : "inline-block rounded-md bg-ink px-6 py-3 text-[13px] font-medium text-white transition-transform duration-300 ease-out hover:scale-[1.04]";

  return (
    <>
      <button onClick={() => setOpen(true)} className={triggerClass}>
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/40 px-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-[420px] rounded-lg bg-white p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {status === "sent" ? (
              <>
                <p className="text-[16px] font-semibold">You&apos;re on the list.</p>
                <p className="mt-2 text-[13px] leading-relaxed text-mute">
                  Thanks — I&apos;ll reach out when there&apos;s a slot to try{" "}
                  {content.projectName}.
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-md bg-ink px-4 py-2 text-[13px] font-medium text-white"
                >
                  Close
                </button>
              </>
            ) : (
              <>
                <p className="text-[16px] font-semibold">Join the waitlist</p>
                <p className="mt-2 text-[13px] leading-relaxed text-mute">
                  This is a personal project and isn&apos;t publicly hosted (rate limits + data
                  resourcing). Leave your email and I&apos;ll reach out — or fork the repo and
                  run it yourself.
                </p>
                <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-md border border-line px-3 py-2 text-[13px] outline-none focus:border-ink"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-line px-3 py-2 text-[13px] outline-none focus:border-ink"
                  />
                  <div className="flex gap-2 pt-1">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="flex-1 rounded-md bg-ink px-4 py-2 text-[13px] font-medium text-white disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending..." : "Join waitlist"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-md border border-line px-4 py-2 text-[13px] font-medium text-ink"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
