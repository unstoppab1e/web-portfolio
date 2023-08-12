"use client";
import BreakLines from "@/components/BreakLines";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import { DM_Mono } from "next/font/google";

const mono = DM_Mono({
  subsets: ["latin"],
  weight: '400',
  variable: '--dm-mono',
})

export default function Home() {
  
  return (
    <main className="flex flex-col font-mono text-base max-w-2xl mx-auto pt-14 pb-24 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className={`${mono.variable} dark:bg-[#111215] dark:text-[#A1A1AA] h-full selection:bg-gray-50 dark:selection:bg-gray-800`}>
        <Description />
        <Overview />
        <BreakLines />
      </div>
      <Footer />
    </main>
  )
}