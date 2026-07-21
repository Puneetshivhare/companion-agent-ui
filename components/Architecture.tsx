"use client";

import { motion } from "framer-motion";
import { content } from "@/content";

export default function Architecture() {
  return (
    <section className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-content">
        <h2 className="text-[13px] font-medium uppercase tracking-wide text-mute">
          How it's built
        </h2>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          {content.architecture.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <div className="rounded-md border border-line px-4 py-3 text-[13px] font-medium">
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
