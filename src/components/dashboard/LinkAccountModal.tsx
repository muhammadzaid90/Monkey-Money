"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Link2, ShieldCheck } from "lucide-react";

export default function LinkAccountModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-cyan px-4 py-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        <Link2 size={15} />
        Link Account
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-card border border-border bg-surface p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-[15px] font-semibold">Link Broker Account</p>
                <button
                  onClick={() => setOpen(false)}
                  className="text-muted hover:text-foreground"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-lg bg-surface-hover p-3 text-[12px] text-muted">
                <ShieldCheck size={16} className="shrink-0 text-accent-cyan" />
                Secure connection prototype — no real broker integration in this
                version.
              </div>

              <div className="mt-4 space-y-2">
                {["MT5", "Interactive Brokers", "Alpaca"].map((broker) => (
                  <button
                    key={broker}
                    className="w-full rounded-lg border border-border px-3 py-2.5 text-left text-[13px] font-medium transition-colors hover:border-accent-cyan/40 hover:bg-surface-hover"
                  >
                    {broker}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setOpen(false)}
                className="mt-4 w-full rounded-lg bg-accent py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}