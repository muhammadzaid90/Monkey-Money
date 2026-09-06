"use client";

import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-card border border-border p-8"
      style={{
        background:
          "linear-gradient(120deg, #0b0c0f 0%, #12141a 40%, #151827 70%, #0b0c0f 100%)",
      }}
    >
      {/* fine grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* glow accents */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(34,211,238,0.18), transparent 45%), radial-gradient(circle at 100% 70%, rgba(236,72,153,0.14), transparent 40%)",
        }}
      />

      {/* decorative chart silhouette */}
      <svg
        className="pointer-events-none absolute bottom-0 right-0 h-full w-2/3 opacity-60"
        viewBox="0 0 600 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="hero-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,160 L60,150 L120,165 L180,120 L240,135 L300,90 L360,100 L420,60 L480,75 L540,30 L600,45 L600,200 L0,200 Z"
          fill="url(#hero-fill)"
        />
        <path
          d="M0,160 L60,150 L120,165 L180,120 L240,135 L300,90 L360,100 L420,60 L480,75 L540,30 L600,45"
          fill="none"
          stroke="url(#hero-line)"
          strokeWidth="2"
        />
      </svg>

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">
            Discipline builds freedom
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-tight">
            Smarter decisions.
            <br />A wealthier you.
          </h2>
        </div>
        <div className="hidden text-right text-[11px] uppercase tracking-widest text-muted sm:block">
          <p>Markets</p>
          <p>Knowledge</p>
          <p>Opportunity</p>
        </div>
      </div>
    </motion.div>
  );
}