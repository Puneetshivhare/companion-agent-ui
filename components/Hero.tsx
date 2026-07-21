"use client";

import { motion } from "framer-motion";
import { content } from "@/content";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line px-6 py-28">
      {/* Atmospheric gradient orbs — decoration only, never used as fills elsewhere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orbLavender opacity-40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-10 h-80 w-80 rounded-full bg-orbMint opacity-40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-6rem] left-1/3 h-64 w-64 rounded-full bg-orbPeach opacity-30 blur-3xl"
      />

      <div className="relative mx-auto max-w-content">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-5 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-mute"
        >
          <span aria-hidden>{content.icon}</span>
          {content.status}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="max-w-[760px] text-[44px] font-light leading-[1.08] tracking-tight text-ink sm:text-[58px]"
        >
          {content.tagline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="mt-6 max-w-[560px] text-[16px] leading-relaxed tracking-[0.01em] text-copy"
        >
          {content.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {content.badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-line bg-surfaceCard px-3 py-1 text-[12px] text-mute"
            >
              {b}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.32 }}
          className="mt-12 grid grid-cols-3 gap-8 border-t border-line pt-8 sm:max-w-[480px]"
        >
          {content.stats.map((s) => (
            <div key={s.label}>
              <p className="text-[22px] font-light tracking-tight text-ink">
                {s.value}
              </p>
              <p className="text-[12px] text-mute">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
