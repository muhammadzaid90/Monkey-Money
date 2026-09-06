import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import TopTicker from "@/components/layout/TopTicker";
import TopBar from "@/components/layout/TopBar";
import TrialBanner from "@/components/layout/TrialBanner";

const geologica = Geologica({ subsets: ["latin"], variable: "--font-geologica" });

export const metadata: Metadata = {
  title: "Monkey Money",
  description: "Financial education and trading terminal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geologica.variable} font-sans bg-background text-foreground antialiased`}>
        <div className="flex h-screen w-full overflow-hidden">
          <Sidebar />
          <div className="flex min-w-0 flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <TrialBanner />
            <TopTicker />
            <TopBar />
            <main className="relative min-w-0 flex-1 p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.06),transparent_50%)]" />
              <div className="relative">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}