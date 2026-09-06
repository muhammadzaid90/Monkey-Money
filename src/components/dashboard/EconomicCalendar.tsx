"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { CalendarDays } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { calendarEvents } from "@/data/calendar";

const dayTabs = ["Today", "Tomorrow", "This Week"];

export default function EconomicCalendar() {
  const [day, setDay] = useState(dayTabs[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-card border border-border bg-surface p-4"
    >
      <SectionHeader
        icon={<CalendarDays size={14} />}
        title="Economic Calendar"
        action="View All →"
        color="cyan"
      />

      <div className="mb-3 flex items-center gap-1">
        {dayTabs.map((d) => (
          <button
            key={d}
            onClick={() => setDay(d)}
            className={clsx(
              "rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors",
              day === d
                ? "bg-accent-cyan text-black"
                : "bg-surface-hover text-muted hover:text-foreground"
            )}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="space-y-0.5">
        <div className="grid grid-cols-[50px_45px_1fr_60px_60px] gap-2 px-2 py-1.5 text-[10px] font-medium uppercase tracking-wide text-muted">
          <span>Time</span>
          <span></span>
          <span>Event</span>
          <span className="text-right">Fcst</span>
          <span className="text-right">Prev</span>
        </div>
        {calendarEvents.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: i * 0.04 }}
            className="grid grid-cols-[50px_45px_1fr_60px_60px] items-center gap-2 rounded-lg px-2 py-2 text-[12px] transition-colors hover:bg-surface-hover"
          >
            <span className="tabular-nums text-muted">{e.time}</span>
            <span className="text-[11px] font-medium">{e.currency}</span>
            <span className="flex items-center gap-1.5">
              {e.event}
              <span className="flex gap-0.5">
                {[...Array(3)].map((_, idx) => (
                  <span
                    key={idx}
                    className={clsx(
                      "h-1 w-1 rounded-full",
                      idx < e.impact ? "bg-accent" : "bg-border"
                    )}
                  />
                ))}
              </span>
            </span>
            <span className="text-right tabular-nums text-muted">{e.forecast}</span>
            <span className="text-right tabular-nums text-muted">{e.previous}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}