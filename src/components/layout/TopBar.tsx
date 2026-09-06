"use client";

import { Search, Bell, Moon } from "lucide-react";
import LinkAccountModal from "@/components/dashboard/LinkAccountModal";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-3">
      <div className="flex w-full max-w-sm items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
        <Search size={15} className="text-muted" />
        <input
          type="text"
          placeholder="Search symbols, assets, or topics..."
          className="w-full bg-transparent text-[13px] text-foreground placeholder:text-muted focus:outline-none"
        />
        <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted">
          ⌘K
        </kbd>
      </div>

      <div className="flex items-center gap-4">
        <LinkAccountModal />
        <button className="text-muted transition-colors hover:text-foreground">
          <Moon size={17} />
        </button>
        <button className="relative text-muted transition-colors hover:text-foreground">
          <Bell size={17} />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent" />
        </button>
        <div className="flex items-center gap-2 border-l border-border pl-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-cyan text-[12px] font-bold text-white">
            JD
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-[12px] font-medium leading-tight">John Doe</p>
            <p className="text-[10px] leading-tight text-muted">Pro Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}