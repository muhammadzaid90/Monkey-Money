"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import clsx from "clsx";
import { marketTabs } from "@/data/marketMonitor";

export default function MarketMonitor() {
  const [active, setActive] = useState(marketTabs[0].key);
  const tab = marketTabs.find((t) => t.key === active)!;

  return (
    <div>
      <div className="mb-4 flex items-center gap-1 rounded-lg border border-border bg-surface p-1 w-fit">
        {marketTabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={clsx(
              "relative rounded-md px-4 py-1.5 text-[13px] font-medium transition-colors",
              active === t.key
                ? "text-white"
                : "text-muted hover:text-foreground"
            )}
          >
            {active === t.key && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-md bg-accent"
                transition={{ type: "spring", duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{t.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {tab.cards.map((card, i) => {
            const color = card.positive ? "#22c55e" : "#ef4444";
            const gradientId = `spark-gradient-${card.symbol}`;
            return (
              <motion.div
                key={card.symbol}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                                className="group rounded-card border border-border bg-surface p-3.5 transition-all duration-200 hover:border-accent/40 hover:shadow-lg hover:shadow-black/20"
              >
                <div className="flex items-start justify-between">
                                  <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-cyan/20 text-[10px] font-bold text-foreground">
                    {card.symbol.slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold">{card.symbol}</p>
                    <p className="text-[11px] text-muted">{card.name}</p>
                  </div>
                </div>
                  <span
                    className={clsx(
                      "rounded-md px-1.5 py-0.5 text-[11px] font-medium",
                      card.positive
                        ? "bg-positive/10 text-positive"
                        : "bg-negative/10 text-negative"
                    )}
                  >
                    {card.percent}
                  </span>
                </div>

                                <p className="mt-2.5 text-lg font-semibold tabular-nums tracking-tight">
                  {card.price}
                </p>

                <div className="mt-1.5 h-9">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={card.spark} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
                      <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={color} stopOpacity={0.35} />
                          <stop offset="100%" stopColor={color} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="v"
                        stroke={color}
                        strokeWidth={2}
                        fill={`url(#${gradientId})`}
                        dot={false}
                        isAnimationActive={true}
                        animationDuration={800}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}