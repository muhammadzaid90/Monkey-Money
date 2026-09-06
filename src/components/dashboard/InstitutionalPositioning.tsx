"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const positions = [
  { symbol: "SPX", percent: 72 },
  { symbol: "QQQ", percent: 68 },
  { symbol: "BTC", percent: 61 },
  { symbol: "GOLD", percent: 54 },
];

export default function InstitutionalPositioning() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-card border border-border bg-surface p-4"
    >
      <SectionHeader icon={<Building2 size={14} />} title="Institutional Positioning" color="purple" />
      <div className="space-y-3.5">
        {positions.map((p, i) => (
          <div key={p.symbol}>
            <div className="mb-1.5 flex items-center justify-between text-[12px]">
              <span className="font-medium">{p.symbol}</span>
              <span className="text-muted">{p.percent}% Long</span>
            </div>
            <div className="flex h-1.5 overflow-hidden rounded-full bg-border">
              <motion.div
                className="bg-positive"
                initial={{ width: 0 }}
                animate={{ width: `${p.percent}%` }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              />
              <div
                className="bg-negative/60"
                style={{ width: `${100 - p.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}