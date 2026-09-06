"use client";

import { motion } from "framer-motion";
import { news } from "@/data/news";
import { Newspaper } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function LatestNews() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className="rounded-card border border-border bg-surface p-4"
    >
            <SectionHeader icon={<Newspaper size={14} />} title="Latest News" action="View All →" color="purple" />
      <div className="mt-3 space-y-3">
        {news.map((item, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0.15 + i * 0.05 }}
            className="group block rounded-lg p-2 -mx-2 transition-colors hover:bg-surface-hover"
          >
            <p className="text-[13px] font-medium leading-snug text-foreground/90 group-hover:text-foreground">
              {item.headline}
            </p>
                        <div className="mt-1 flex items-center gap-2 text-[11px] text-muted">
              <span className="h-1 w-1 rounded-full bg-muted" />
              <span>{item.time}</span>
              <span>{item.source}</span>
              <span className="rounded bg-accent/10 px-1.5 py-0.5 font-medium text-accent">
                {item.ticker}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}