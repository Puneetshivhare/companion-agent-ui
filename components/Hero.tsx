"use client";

import { motion } from "framer-motion";
import { content } from "@/content";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-content">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-4 flex items-center gap-2 text-[12px] font-medium uppercase tracking-wide text-amber"
        >
          <span aria-hidden>{content.icon}</span>
          {content.status}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="max-w-[720px] text-[44px] font-semibold leading-[1.1] tracking-tight sm:text-[56px]"
        >
          {content.tagline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-mute"
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
              className="rounded-full border border-line px-3 py-1 text-[12px] text-mute"
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
              <p className="text-[26px] font-semibold tracking-tight">
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
