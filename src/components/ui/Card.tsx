import { ReactNode } from "react";
import clsx from "clsx";

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-card border border-border bg-surface p-5 transition-all duration-200 hover:border-border hover:shadow-lg hover:shadow-black/20",
        className
      )}
    >
      {children}
    </div>
  );
}