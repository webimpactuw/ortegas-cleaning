import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ServicesPageCards from "@/components/ServicesPageCards";
import ServicesAreasSection from "@/components/ServicesAreasSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Services() {
    return (
        <div className="bg-linear-to-b from-[#EFF6FF] via-[#F9EBDC] via-20% to-[#FFFFFF] to-70%">
            <Navbar />
            <ServicesHero />
            <ServicesPageCards />
            <ServicesAreasSection />
            <WhyChooseUs />
        </div>
    );
}