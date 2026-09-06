import { tickers } from "@/data/tickers";
import clsx from "clsx";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

function TickerItem({ t, first }: { t: (typeof tickers)[number]; first: boolean }) {
  const Arrow = t.positive ? ArrowUpRight : ArrowDownRight;
  return (
    <div
      className={clsx(
        "flex shrink-0 items-center gap-2 px-4 py-3 text-[13px]",
        !first && "border-l border-border"
      )}
    >
      <span className="font-semibold text-foreground">{t.symbol}</span>
      <span className="tabular-nums text-foreground/90">{t.price}</span>
      <span
        className={clsx(
          "flex items-center gap-0.5 tabular-nums font-medium",
          t.positive ? "text-positive" : "text-negative"
        )}
      >
        <Arrow size={13} className="animate-bounce-subtle" />
        {t.percent}
      </span>
    </div>
  );
}

export default function TopTicker() {
  return (
    <div className="w-full overflow-hidden border-b border-border bg-surface">
      <div className="flex w-max animate-ticker">
        {[...tickers, ...tickers].map((t, i) => (
          <TickerItem key={i} t={t} first={i === 0} />
        ))}
      </div>
    </div>
  );
}