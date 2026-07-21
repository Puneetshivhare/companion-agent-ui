"use client";

import { motion } from "framer-motion";
import { content } from "@/content";

export default function Features() {
  return (
    <section className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-content">
        <h2 className="text-[13px] font-medium uppercase tracking-wide text-mute">
          What it does
        </h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {content.features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white p-7"
            >
              <p className="text-[15px] font-semibold">{f.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-mute">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
