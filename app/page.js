import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesHomePage from "@/components/ServicesHomePage";

// home to label page; to be changed
export default function Home() {
  return (
    <div className="bg-linear-to-b from-[#EFF6FF] from-10% via-[#FFF9E0] via-50% to-[#FFFFFF] to-70%">
        <Navbar/>
        <Hero/>
        <ServicesHomePage/>
        home

    </div>
  );
}
