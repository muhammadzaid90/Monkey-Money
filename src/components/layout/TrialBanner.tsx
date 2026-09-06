"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, X } from "lucide-react";

export default function TrialBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-accent/15 via-accent/5 to-transparent px-5 py-2">
            <div className="flex items-center gap-2 text-[12px]">
              <Clock size={14} className="text-accent" />
              <span className="text-foreground/90">
                You have <span className="font-semibold text-accent">7 trial days</span> remaining
              </span>
              <button className="ml-1 font-semibold text-accent-cyan underline underline-offset-2 hover:opacity-80">
                Choose a plan
              </button>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="text-muted hover:text-foreground"
            >
              <X size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}