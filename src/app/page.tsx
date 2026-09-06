"use client";

import { motion } from "framer-motion";
import TradingViewChart from "@/components/dashboard/TradingViewChart";
import MarketMonitor from "@/components/dashboard/MarketMonitor";
import HeroBanner from "@/components/dashboard/HeroBanner";
import TradingRadar from "@/components/dashboard/TradingRadar";
import MacroSnapshot from "@/components/dashboard/MacroSnapshot";
import InstitutionalPositioning from "@/components/dashboard/InstitutionalPositioning";
import MarketSentiment from "@/components/dashboard/MarketSentiment";
import CryptoOverview from "@/components/dashboard/CryptoOverview";
import LatestNews from "@/components/dashboard/LatestNews";
import AcademyPreview from "@/components/dashboard/AcademyPreview";
import Card from "@/components/ui/Card";
import EconomicCalendar from "@/components/dashboard/EconomicCalendar";
import BuySellGauge from "@/components/dashboard/BuySellGauge";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-6"
    >
      <HeroBanner />

      <MarketMonitor />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="h-full overflow-hidden p-0">
            <TradingViewChart symbol="TVC:SPX" />
          </Card>
        </div>
                <div className="space-y-4">
          <TradingRadar />
          <MacroSnapshot />
          <BuySellGauge />
        </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <InstitutionalPositioning />
        <MarketSentiment />
        <CryptoOverview />
      </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <EconomicCalendar />
        <LatestNews />
        <AcademyPreview />
      </div>
    </motion.div>
  );
}