"use client";

import { motion } from "framer-motion";
import { content } from "@/content";

export default function Features() {
  return (
    <section className="border-b border-line bg-canvasSoft px-6 py-20">
      <div className="mx-auto max-w-content">
        <h2 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-mute">
          What it does
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {content.features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-surfaceCard p-7 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
            >
              <p className="text-[16px] font-medium text-ink">{f.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-copy">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
