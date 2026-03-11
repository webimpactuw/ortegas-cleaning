import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesHomePage from "@/components/ServicesHomePage";
import ServiceMap from "@/components/ServiceMap";
import AreasWeServeSection from "@/components/AreasWeServeSection";
import WhatOurClientsSay from "@/components/WhatOurClientsSay";

// home to label page; to be changed
export default function Home() {
  return (
    <div className="bg-linear-to-b from-[#EFF6FF] from-5% via-[#FFF9E0] via-35% to-[#FFFFFF] to-70%">
        <Navbar/>
        <Hero/>
        <ServicesHomePage/>
        <AreasWeServeSection/>
        <WhatOurClientsSay/>
    </div>
  );
}
