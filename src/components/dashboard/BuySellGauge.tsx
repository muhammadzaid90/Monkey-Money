"use client";

import { motion } from "framer-motion";
import { Gauge as GaugeIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { buySellGauge } from "@/data/buySellGauge";

export default function BuySellGauge() {
  const { value, sell, neutral, buy } = buySellGauge;
  const angle = (value / 100) * 180 - 90;
  const label = value > 60 ? "Buy" : value < 40 ? "Sell" : "Neutral";
  const labelColor =
    value > 60 ? "text-positive" : value < 40 ? "text-negative" : "text-muted";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-card border border-border bg-surface p-4"
    >
      <SectionHeader icon={<GaugeIcon size={14} />} title="Sentiment Signal" color="cyan" />

      <div className="flex flex-col items-center py-2">
        <svg viewBox="0 0 200 120" className="w-full max-w-[200px]">
          <defs>
            <linearGradient id="buysell-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#8b8d98" />
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
            stroke="url(#buysell-gradient)"
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
          <p className={`text-lg font-semibold ${labelColor}`}>{label}</p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 border-t border-border pt-3 text-center">
        <div>
          <p className="text-[11px] text-muted">Sell</p>
          <p className="text-[15px] font-semibold text-negative">{sell}</p>
        </div>
        <div>
          <p className="text-[11px] text-muted">Neutral</p>
          <p className="text-[15px] font-semibold text-foreground">{neutral}</p>
        </div>
        <div>
          <p className="text-[11px] text-muted">Buy</p>
          <p className="text-[15px] font-semibold text-positive">{buy}</p>
        </div>
      </div>
    </motion.div>
  );
}