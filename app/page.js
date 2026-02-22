import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// home to label page; to be changed
export default function Home() {
  return (
    <div className="bg-linear-to-b from-[#EFF6FF] from-10% via-[#FFF9E0] via-40% to-[#FFFFFF] h-[1750px] to-70%">
        <Navbar/>
        home
        <Hero/>
    </div>
  );
}
