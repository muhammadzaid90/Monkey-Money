export type RadarItem = {
  symbol: string;
  tag: "Breakout" | "Macro" | "Earnings" | "Momentum" | "Trend";
  description: string;
  price: string;
  percent: string;
  positive: boolean;
};

export const tradingRadar: RadarItem[] = [
  { symbol: "NVDA", tag: "Breakout", description: "Breaking key resistance at $125. Bullish momentum building.", price: "$128.24", percent: "+3.21%", positive: true },
  { symbol: "EURUSD", tag: "Macro", description: "ECB signals dovish tone. Potential continuation lower.", price: "1.0920", percent: "+0.33%", positive: true },
  { symbol: "AAPL", tag: "Earnings", description: "Earnings in 3 days. Options pricing higher volatility (±4.8%).", price: "$225.18", percent: "+1.12%", positive: true },
  { symbol: "GOLD", tag: "Trend", description: "Holding support at $3,640. Eyes on $3,720 next.", price: "$3,664.65", percent: "+0.85%", positive: true },
  { symbol: "SOL", tag: "Momentum", description: "Strong on-chain activity and institutional inflows.", price: "$162.40", percent: "+2.31%", positive: true },
];

export const radarTabs = ["Top Opportunities", "Breakouts", "Earnings", "Macro Plays"];