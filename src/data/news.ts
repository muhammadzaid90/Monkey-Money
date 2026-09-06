export type NewsItem = {
  headline: string;
  source: string;
  time: string;
  ticker: string;
};

export const news: NewsItem[] = [
  { headline: "Tesla Stock Falls 6% as NHTSA Probes Its Cybercabs", source: "gurufocus.com", time: "57m", ticker: "TSLA" },
  { headline: "Google Turns Three Everyday Apps Into Paid Gemini Microphones", source: "gurufocus.com", time: "1h", ticker: "GOOGL" },
  { headline: "Pineapple Financial Puts $1B in Mortgage Records on Injective", source: "Cointelegraph", time: "1h", ticker: "NVDA" },
  { headline: "VAST Data and CrowdStrike Deliver First-of-Its-Kind Cybersecurity Platform", source: "manilatimes.net", time: "1h", ticker: "NVDA" },
  { headline: "Tech and AI Sectors Surge Amid Broader Market Consolidation", source: "thestockmarketwatch.com", time: "2h", ticker: "TSLA" },
];