"use client";

import { motion } from "framer-motion";

export default function Gauge({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const angle = (value / 100) * 180 - 90;

  return (
    <div className="flex flex-col items-center py-2">
      <svg viewBox="0 0 200 120" className="w-full max-w-[200px]">
        <defs>
          <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <path
          d="M 15 100 A 85 85 0 0 1 185 100"
          fill="none"
          stroke="var(--border)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <motion.path
          d="M 15 100 A 85 85 0 0 1 185 100"
          fill="none"
          stroke="url(#gauge-gradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray="267"
          initial={{ strokeDashoffset: 267 }}
          animate={{ strokeDashoffset: 267 - (267 * value) / 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.line
          x1="100"
          y1="100"
          x2="100"
          y2="35"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ rotate: -90 }}
          animate={{ rotate: angle }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "100px 100px" }}
        />
        <circle cx="100" cy="100" r="4.5" fill="white" />
      </svg>
      <div className="-mt-2 text-center">
        <p className="text-2xl font-semibold tabular-nums">{value}</p>
        <span className="mt-1 inline-block rounded-md bg-accent-cyan/10 px-2 py-0.5 text-[11px] font-medium text-accent-cyan">
          {label}
        </span>
      </div>
    </div>
  );
}