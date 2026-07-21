"use client";

import { motion } from "framer-motion";

const bars = [10, 22, 34, 20, 40, 16, 28, 14, 32, 22, 38, 16, 26, 12];

export default function VoiceOrb() {
  return (
    <div className="relative flex aspect-square w-full max-w-[360px] items-center justify-center">
      {/* Expanding sound rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute rounded-full border border-ink/10"
          style={{ width: "100%", height: "100%" }}
          initial={{ opacity: 0.5, scale: 0.55 }}
          animate={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
        />
      ))}

      {/* The orb itself — soft breathing motion */}
      <motion.div
        className="relative flex h-[68%] w-[68%] items-center justify-center rounded-full shadow-[0_20px_60px_-15px_rgba(168,197,232,0.55)]"
        style={{
          background:
            "radial-gradient(circle at 30% 28%, #e8f4ee 0%, #c8b8e0 32%, #a8c8e8 60%, #f4c5a8 100%)",
        }}
        animate={{ scale: [1, 1.035, 0.99, 1], rotate: [0, 2, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex h-10 items-end gap-[3px]">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              className="w-[3px] rounded-full bg-white/80"
              style={{ height: h }}
              animate={{ scaleY: [1, 1.5, 0.6, 1.3, 1] }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                delay: i * 0.06,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
