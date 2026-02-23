import ServiceCard from "./ServiceCard";
import House from "../public/House.svg";
import Building from "../public/Building.svg";

export default function ServicesHomePage() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-[Playfair_Display] font-semibold text-[44px] leading-[40px] tracking-[0px] text-center text-[#2E4E65] mb-4">Our Services</h3>
      <p className="font-[inter] font-normal text-[20px] leading-[28px] tracking-[0px] text-center text-[#4A4A4ACC] mb-6">Tailored cleaning services designed to meet your specific needs</p>
      <div className="flex">
        <ServiceCard
          icon={House}
          title="House Cleaning"
          description="Comprehensive residential cleaning services tailored to your home's unique needs."
          features={[
            "Deep cleaning of all rooms",
            "Kitchen and bathroom sanitization",
            "Dusting, vacuuming, and mopping",
            "Window and mirror cleaning"
          ]}
          borderColor="border-[#FFDB88]"
        />
        <ServiceCard
          icon={Building}
          title="Office Cleaning"
          description="Professional commercial cleaning to maintain a pristine work environment."
          features={[
            "Desk and workspace sanitization",
            "Common area maintenance",
            "Restroom deep cleaning",
            "Flexible scheduling options"
          ]}
          borderColor="border-[#134661FC]"
        />
      </div>
    </div>
  );
}