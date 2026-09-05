import TradingViewChart from "@/components/dashboard/TradingViewChart";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <TradingViewChart symbol="SP:SPX" />
    </div>
  );
}