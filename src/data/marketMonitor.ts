export type MarketCard = {
  symbol: string;
  name: string;
  price: string;
  change: string;
  percent: string;
  positive: boolean;
  spark: { v: number }[];
};

export type MarketTab = {
  key: string;
  label: string;
  cards: MarketCard[];
};

const genSpark = (trendUp: boolean) => {
  const points: { v: number }[] = [];
  let val = 100;
  let momentum = 0;

  for (let i = 0; i < 24; i++) {
    const nudge = (Math.random() - 0.5) * 2;
    momentum = momentum * 0.7 + nudge * 0.3;
    const drift = trendUp ? 0.35 : -0.35;
    val += momentum + drift;
    points.push({ v: Math.round(val * 10) / 10 });
  }
  return points;
};

export const marketTabs: MarketTab[] = [
  {
    key: "us",
    label: "US Market",
    cards: [
      { symbol: "SPX", name: "US 500 Index", price: "7,706.7", change: "-34.3", percent: "-0.44%", positive: false, spark: genSpark(false) },
      { symbol: "NDX", name: "Nasdaq 100", price: "24,912.1", change: "+112.4", percent: "+0.45%", positive: true, spark: genSpark(true) },
      { symbol: "DJ", name: "Dow Jones", price: "44,908.3", change: "-88.1", percent: "-0.20%", positive: false, spark: genSpark(false) },
      { symbol: "RUT", name: "Russell 2000", price: "2,301.9", change: "+18.7", percent: "+0.82%", positive: true, spark: genSpark(true) },
    ],
  },
  {
    key: "fx",
    label: "FX",
    cards: [
      { symbol: "EURUSD", name: "Euro / US Dollar", price: "1.16122", change: "-0.00", percent: "-0.12%", positive: false, spark: genSpark(true) },
      { symbol: "GBPUSD", name: "Pound / US Dollar", price: "1.34210", change: "+0.002", percent: "+0.16%", positive: true, spark: genSpark(true) },
      { symbol: "USDJPY", name: "Dollar / Yen", price: "148.32", change: "-0.41", percent: "-0.28%", positive: false, spark: genSpark(false) },
    ],
  },
  {
    key: "commodities",
    label: "Commodities",
    cards: [
      { symbol: "XAU", name: "Gold", price: "4,429.05", change: "+22.1", percent: "+0.50%", positive: true, spark: genSpark(true) },
      { symbol: "XAG", name: "Silver", price: "51.24", change: "+0.38", percent: "+0.75%", positive: true, spark: genSpark(true) },
      { symbol: "WTI", name: "Crude Oil", price: "68.12", change: "-1.02", percent: "-1.48%", positive: false, spark: genSpark(false) },
    ],
  },
  {
    key: "crypto",
    label: "Digital Assets",
    cards: [
      { symbol: "BTC", name: "Bitcoin / USD", price: "79,710", change: "-1,555.00", percent: "-1.91%", positive: false, spark: genSpark(true) },
      { symbol: "ETH", name: "Ethereum / USD", price: "2,452.5", change: "-55.10", percent: "-2.20%", positive: false, spark: genSpark(false) },
      { symbol: "SOL", name: "Solana / USD", price: "198.30", change: "+6.4", percent: "+3.34%", positive: true, spark: genSpark(true) },
    ],
  },
];