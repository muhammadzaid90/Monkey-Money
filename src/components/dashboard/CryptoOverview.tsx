"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { cryptoOverview } from "@/data/sentiment";
import { Bitcoin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CryptoOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="rounded-card border border-border bg-surface p-4"
    >
      <p className="text-[13px] font-semibold">Crypto Overview</p>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <div>
          <p className="text-[11px] text-muted">Market Cap</p>
          <p className="text-[15px] font-semibold tabular-nums">
            {cryptoOverview.marketCap}
          </p>
        </div>
        <div>
          <p className="text-[11px] text-muted">Volume 24h</p>
          <p className="text-[15px] font-semibold tabular-nums">
            {cryptoOverview.volume24h}
          </p>
        </div>
      </div>

      <div className="mt-4">
              <SectionHeader icon={<Bitcoin size={14} />} title="Crypto Overview" color="cyan" />
        <div className="flex h-2 overflow-hidden rounded-full bg-border">
          <motion.div
            className="bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${cryptoOverview.btcDominance}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="bg-foreground/40"
            initial={{ width: 0 }}
            animate={{ width: `${cryptoOverview.ethDominance}%` }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          />
        </div>
        <div className="mt-1.5 flex justify-between text-[11px] text-muted">
          <span>BTC {cryptoOverview.btcDominance}%</span>
          <span>ETH {cryptoOverview.ethDominance}%</span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {cryptoOverview.assets.map((a) => (
          <div key={a.symbol} className="flex items-center justify-between text-[13px]">
            <span className="font-medium">{a.symbol}</span>
            <span className={clsx(a.positive ? "text-positive" : "text-negative")}>
              {a.percent}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}