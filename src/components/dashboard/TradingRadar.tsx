"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Star, Target } from "lucide-react";
import { tradingRadar, radarTabs } from "@/data/tradingRadar";

const tagColors: Record<string, string> = {
  Breakout: "bg-accent-cyan/10 text-accent-cyan",
  Macro: "bg-accent/10 text-accent",
  Earnings: "bg-yellow-500/10 text-yellow-400",
  Trend: "bg-accent-cyan/10 text-accent-cyan",
  Momentum: "bg-accent/10 text-accent",
};

export default function TradingRadar() {
  const [tab, setTab] = useState(radarTabs[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-card border border-border bg-surface p-4"
    >
      <SectionHeader icon={<Target size={14} />} title="Trading Radar" action="View All →" color="pink" />

      <div className="mt-3 flex items-center gap-1 overflow-x-auto">
        {radarTabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={clsx(
              "shrink-0 rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors",
              tab === t
                ? "bg-accent text-white"
                : "text-muted hover:text-foreground"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-3 space-y-1">
        {tradingRadar.slice(0, 1).map((item, i) => (
          <motion.div
            key={item.symbol}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: i * 0.05 }}
            className="group flex items-center justify-between rounded-lg p-2.5 transition-colors hover:bg-surface-hover"
          >
            <div className="flex-1 pr-3">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold">{item.symbol}</span>
                <span
                  className={clsx(
                    "rounded px-1.5 py-0.5 text-[10px] font-medium",
                    tagColors[item.tag]
                  )}
                >
                  {item.tag}
                </span>
              </div>
              <p className="mt-0.5 text-[12px] leading-snug text-muted">
                {item.description}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <div className="text-right">
                <p className="text-[13px] font-semibold tabular-nums">
                  {item.price}
                </p>
                <p
                  className={clsx(
                    "text-[11px] tabular-nums",
                    item.positive ? "text-positive" : "text-negative"
                  )}
                >
                  {item.percent}
                </p>
              </div>
              <Star
                size={15}
                className="text-muted opacity-0 transition-opacity group-hover:opacity-100 hover:text-accent"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}