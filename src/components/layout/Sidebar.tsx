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
      { label: "Exness Rewards", icon: Trophy },
    ],
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="flex h-screen w-60 flex-col border-r border-border bg-surface px-3 py-4">
      <div className="mb-6 flex items-center gap-2 px-2">
        <div className="flex h-7 w-7 items-center justify-center rounded bg-accent font-bold text-white">
          M
        </div>
        <span className="text-lg font-semibold">monkey money</span>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wide text-muted">
              {section.title}
            </p>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.label;
                return (
                  <button
                    key={item.label}
                    onClick={() => setActive(item.label)}
                    className={clsx(
                      "flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-foreground/80 hover:bg-white/5"
                    )}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}