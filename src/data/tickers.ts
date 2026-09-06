export type Ticker = {
  symbol: string;
  price: string;
  change: string;
  percent: string;
  positive: boolean;
};

export const tickers: Ticker[] = [
  { symbol: "AAPL", price: "319.97", change: "-8.24", percent: "-2.51%", positive: false },
  { symbol: "MSFT", price: "499.70", change: "-10.42", percent: "-2.04%", positive: false },
  { symbol: "NVDA", price: "230.36", change: "+1.91", percent: "+0.84%", positive: true },
  { symbol: "TSLA", price: "354.08", change: "-22.29", percent: "-5.92%", positive: false },
  { symbol: "AMZN", price: "258.51", change: "-0.39", percent: "-0.15%", positive: false },
  { symbol: "GOOGL", price: "338.46", change: "-4.02", percent: "-1.17%", positive: false },
  { symbol: "BTC", price: "79,710", change: "-1,555.00", percent: "-1.91%", positive: false },
  { symbol: "ETH", price: "2,452.5", change: "-55.10", percent: "-2.20%", positive: false },
  { symbol: "EUR/USD", price: "1.16122", change: "-0.00", percent: "-0.12%", positive: false },
];