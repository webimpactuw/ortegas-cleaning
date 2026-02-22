import Image from "next/image";
import Navbar from "@/components/Navbar";
import ServiceMap from "@/components/ServiceMap";
import AreasWeServeSection from "@/components/AreasWeServeSection";

// home to label page; to be changed
export default function Home() {
  return (
    <div>
        <Navbar/>
        <AreasWeServeSection/>
    </div>
  );
}
