"use client";

import { useState } from "react";
import clsx from "clsx";
import {
  LayoutDashboard,
  TrendingUp,
  Target,
  Activity,
  Calendar,
  Clock,
  BarChart3,
  Search,
  Grid3x3,
  Trophy,
  Menu,
  X,
} from "lucide-react";

type NavItem = { label: string; icon: React.ElementType };
type NavSection = { title: string; items: NavItem[] };

const sections: NavSection[] = [
  {
    title: "Trading",
    items: [
      { label: "Dashboard", icon: LayoutDashboard },
      { label: "Trading Desk", icon: TrendingUp },
      { label: "Options Flow", icon: Target },
    ],
  },
  {
    title: "Macroeconomics",
    items: [
      { label: "Macro Desk", icon: Activity },
      { label: "Alpha Calendar", icon: Calendar },
      { label: "Earnings Calendar", icon: Clock },
    ],
  },
  {
    title: "Investing",
    items: [
      { label: "Investor Desk", icon: BarChart3 },
      { label: "Stock Screener", icon: Search },
      { label: "Quad Score", icon: Grid3x3 },
      { label: "Rewards", icon: Trophy },
    ],
  },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      <div className="flex items-center gap-2.5 border-b border-border px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white transition-transform duration-300 hover:scale-110 hover:rotate-6">
          M
        </div>
        <span className="text-[15px] font-semibold tracking-tight">
          Monkey Money
        </span>
      </div>

      <nav className="flex-1 space-y-7 overflow-y-auto px-3 py-5">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="mb-2.5 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted">
              {section.title}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.label;
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      setActive(item.label);
                      onNavigate?.();
                    }}
                    className={clsx(
                      "group relative flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-200",
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-foreground/70 hover:bg-surface-hover hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-r bg-accent" />
                    )}
                    <Icon
                      size={16}
                      strokeWidth={2}
                      className={clsx(
                        "transition-transform duration-200 group-hover:scale-125",
                        isActive && "scale-110"
                      )}
                    />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-border px-4 py-4">
        <div className="rounded-lg bg-surface-hover px-3 py-2.5">
          <p className="text-[11px] font-medium text-muted">Premium Plan</p>
          <p className="text-[13px] font-semibold">7 trial days left</p>
        </div>
      </div>
    </>
  );
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar trigger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground lg:hidden"
      >
        <Menu size={18} />
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-surface lg:flex">
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresenceDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

// Separated so framer-motion's AnimatePresence import only affects the mobile drawer
import { AnimatePresence, motion } from "framer-motion";

function AnimatePresenceDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          />
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-border bg-surface lg:hidden"
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-4 text-muted hover:text-foreground"
            >
              <X size={18} />
            </button>
            <SidebarContent onNavigate={onClose} />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}