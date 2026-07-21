"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { content } from "@/content";
import VoiceOrb from "./VoiceOrb";
import AnimatedStat from "./AnimatedStat";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 40, damping: 15 });
  const springY = useSpring(my, { stiffness: 40, damping: 15 });

  const orb1X = useTransform(springX, (v) => v * 18);
  const orb1Y = useTransform(springY, (v) => v * 18);
  const orb2X = useTransform(springX, (v) => v * -24);
  const orb2Y = useTransform(springY, (v) => v * -14);
  const orb3X = useTransform(springX, (v) => v * 12);
  const orb3Y = useTransform(springY, (v) => v * -10);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden border-b border-line px-6 py-28"
    >
      {/* Atmospheric gradient orbs — decoration only, never used as fills elsewhere */}
      <motion.div
        aria-hidden
        style={{ x: orb1X, y: orb1Y }}
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orbLavender opacity-40 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ x: orb2X, y: orb2Y }}
        className="pointer-events-none absolute -right-16 top-10 h-80 w-80 rounded-full bg-orbMint opacity-40 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ x: orb3X, y: orb3Y }}
        className="pointer-events-none absolute bottom-[-6rem] left-1/3 h-64 w-64 rounded-full bg-orbPeach opacity-30 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-content gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
      <div>
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
            <AnimatedStat key={s.label} value={s.value} label={s.label} />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
        className="flex justify-center lg:justify-end"
      >
        <VoiceOrb />
      </motion.div>
      </div>
    </section>
  );
}
