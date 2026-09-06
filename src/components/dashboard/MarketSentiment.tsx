"use client";

import { motion } from "framer-motion";
import { Gauge as GaugeIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Gauge from "@/components/ui/Gauge";
import { fearGreed } from "@/data/sentiment";

export default function MarketSentiment() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.05 }}
      className="rounded-card border border-border bg-surface p-4"
    >
      <SectionHeader icon={<GaugeIcon size={14} />} title="Market Sentiment" subtitle="Fear & Greed Index" color="pink" />
      <Gauge value={fearGreed.value} label={fearGreed.label} />
    </motion.div>
  );
}