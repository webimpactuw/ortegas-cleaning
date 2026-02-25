import Image from "next/image";
import Navbar from "@/components/Navbar";
import ServicesHomePage from "@/components/ServicesHomePage";
import ServiceMap from "@/components/ServiceMap";
import AreasWeServeSection from "@/components/AreasWeServeSection";

// home to label page; to be changed
export default function Home() {
  return (
    <div>
        <Navbar/>
        <AreasWeServeSection/>
        <ServicesHomePage/>
    </div>
  );
}
