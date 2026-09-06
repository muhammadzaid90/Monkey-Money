"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { Globe, TrendingUp, TrendingDown, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { macroSnapshot } from "@/data/macroSnapshot";

export default function MacroSnapshot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.05 }}
      className="rounded-card border border-border bg-surface p-4"
    >
      <SectionHeader icon={<Globe size={14} />} title="Macro Snapshot" color="cyan" />
      <div className="grid grid-cols-2 gap-3">
        {macroSnapshot.map((item) => {
          const Icon = item.neutral ? Minus : item.positive ? TrendingUp : TrendingDown;
          return (
            <div
              key={item.label}
              className="rounded-lg border border-border p-3 transition-colors hover:border-accent-cyan/30"
            >
              <div className="flex items-center justify-between">
                <p className="text-[11px] text-muted">{item.label}</p>
                <Icon
                  size={13}
                  className={clsx(
                    item.neutral
                      ? "text-muted"
                      : item.positive
                      ? "text-positive"
                      : "text-negative"
                  )}
                />
              </div>
              <p className="mt-1 text-[16px] font-semibold tabular-nums">
                {item.value}
              </p>
              <p
                className={clsx(
                  "mt-0.5 text-[11px] tabular-nums",
                  item.neutral
                    ? "text-muted"
                    : item.positive
                    ? "text-positive"
                    : "text-negative"
                )}
              >
                {item.percent}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}