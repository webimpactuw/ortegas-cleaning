import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesHomePage from "@/components/ServicesHomePage";
import ServiceMap from "@/components/ServiceMap";
import AreasWeServeSection from "@/components/AreasWeServeSection";
import WhatOurClientsSay from "@/components/WhatOurClientsSay";
import SpottlessSpaceBanner from "@/components/SpotlessSpaceBanner";

// home to label page; to be changed
export default function Home() {
  return (
    <div className="bg-linear-to-b from-[#EFF6FF] via-[#F9EBDC] via-30% to-[#FFFFFF] to-60%">
        <Navbar/>
        <Hero/>
        <ServicesHomePage/>
        <AreasWeServeSection/>
        <WhatOurClientsSay/>
        <SpottlessSpaceBanner/>
    </div>
  );
}
