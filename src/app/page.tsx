"use client";

import { motion } from "framer-motion";
import TradingViewChart from "@/components/dashboard/TradingViewChart";
import MarketMonitor from "@/components/dashboard/MarketMonitor";
import HeroBanner from "@/components/dashboard/HeroBanner";
import TradingRadar from "@/components/dashboard/TradingRadar";
import MacroSnapshot from "@/components/dashboard/MacroSnapshot";
import BuySellGauge from "@/components/dashboard/BuySellGauge";
import InstitutionalPositioning from "@/components/dashboard/InstitutionalPositioning";
import MarketSentiment from "@/components/dashboard/MarketSentiment";
import CryptoOverview from "@/components/dashboard/CryptoOverview";
import EconomicCalendar from "@/components/dashboard/EconomicCalendar";
import LatestNews from "@/components/dashboard/LatestNews";
import AcademyPreview from "@/components/dashboard/AcademyPreview";
import Card from "@/components/ui/Card";

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

      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        <div className="lg:w-2/3">
          <Card className="overflow-hidden p-0">
            <TradingViewChart symbol="TVC:SPX" />
          </Card>
        </div>
        <div className="flex flex-col gap-4 lg:w-1/3">
          <TradingRadar />
          <MacroSnapshot />
          <BuySellGauge />
        </div>
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