"use client";

import { motion } from "framer-motion";
import { content } from "@/content";

const states = ["Idle", "Listening", "Thinking", "Speaking"];

// A static mockup of the state-driven voice UI described in the feature list
// below — illustrative, not a live/functional preview.
function Waveform({ active }: { active: boolean }) {
  const bars = [6, 14, 22, 12, 26, 10, 18, 8, 20, 14, 24, 9];
  return (
    <div className="flex h-9 items-end gap-[3px]">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-ink"
          style={{ height: h }}
          animate={active ? { scaleY: [1, 1.6, 0.7, 1.3, 1] } : { scaleY: 1 }}
          transition={{
            duration: 1.1,
            repeat: active ? Infinity : 0,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Architecture() {
  return (
    <section className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-content">
        <h2 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-mute">
          Voice preview
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex flex-col items-start gap-6 rounded-2xl border border-line bg-surfaceCard p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white">
              ▶
            </span>
            <div>
              <p className="text-[15px] font-medium text-ink">
                Sakshi — calm, low-latency voice
              </p>
              <p className="text-[13px] text-mute">
                Mockup of the in-call state UI — not a live demo
              </p>
            </div>
          </div>
          <Waveform active />
        </motion.div>

        <div className="mt-4 flex flex-wrap gap-2">
          {states.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-surfaceStrong px-3 py-1 text-[12px] text-mute"
            >
              {s}
            </span>
          ))}
        </div>

        <h3 className="mt-14 text-[12px] font-semibold uppercase tracking-[0.08em] text-mute">
          How it&apos;s built
        </h3>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {content.architecture.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <div className="rounded-full border border-line bg-surfaceCard px-4 py-2 text-[13px] font-medium text-ink">
                {step}
              </div>
              {i < content.architecture.length - 1 && (
                <span className="hidden text-mute sm:inline">→</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
