"use client";

import { useEffect, useRef } from "react";

export default function TradingViewChart({
  symbol = "SP:SPX",
}: {
  symbol?: string;
}) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval: "D",
      theme: "dark",
      style: "1",
      locale: "en",
      backgroundColor: "rgba(11, 11, 13, 1)",
      allow_symbol_change: true,
    });

    container.current.appendChild(script);
  }, [symbol]);

  return <div ref={container} className="h-[500px] w-full" />;
}