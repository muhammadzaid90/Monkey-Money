import { ReactNode } from "react";
import clsx from "clsx";

export default function SectionHeader({
  icon,
  title,
  subtitle,
  action,
  color = "cyan",
}: {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  action?: string;
  color?: "cyan" | "pink" | "purple";
}) {
  const colorMap = {
    cyan: "bg-accent-cyan/10 text-accent-cyan",
    pink: "bg-accent/10 text-accent",
    purple: "bg-purple-500/10 text-purple-400",
  };

  return (
    <div className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div
          className={clsx(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-md",
            colorMap[color]
          )}
        >
          {icon}
        </div>
        <div>
          <p className="text-[13px] font-semibold leading-none">{title}</p>
          {subtitle && (
            <p className="mt-1 text-[11px] text-muted">{subtitle}</p>
          )}
        </div>
      </div>
      {action && (
        <button className="shrink-0 text-[11px] font-medium text-muted transition-colors hover:text-foreground">
          {action}
        </button>
      )}
    </div>
  );
}