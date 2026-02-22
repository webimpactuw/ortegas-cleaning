import Link from "next/link";
import Image from "next/image";
import House from "../public/House.svg";
import Building from "../public/Building.svg";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function ServicesHomePage() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-[Playfair_Display] font-semibold text-[44px] leading-[40px] tracking-[0px] text-center text-[#2E4E65] mb-4">Our Services</h3>
      <p className="font-[inter] font-normal text-[20px] leading-[28px] tracking-[0px] text-center text-[#4A4A4ACC] mb-6">Tailored cleaning services designed to meet your specific needs</p>
      <div className="flex">
        <div className="w-[559.998291015625] h-[478] opacity-100 rounded-[16px] border-[1.67px] [column-span:1] mr-3 border-[#FFDB88] [box-shadow:0px_4px_6px_-4px_#0000001A] [box-shadow:0px_10px_15px_-3px_#0000001A] bg-white">
          <div className="flex justify-center items-center w-[63.99305725097656] h-[63.99305725097656] mt-[49px] ml-[34.01px] rounded-[16px] pl-0 opacity-100 bg-[#D4E2ED66] ml-">
            <Image src={House} alt="House"/>
          </div>
          <h5 className="font-[Playfair_Display] font-semibold text-[36px] leading-[32px] tracking-[0px] text-[#4A6B8A] ml-[34.01px] mt-[33px]">House Cleaning</h5>
          <p className="w-[458] h-[48] mt-[13.02px] ml-[34.01px] opacity-100 font-[inter] font-normal text-[20px] leading-[24px] tracking-[0px] text-[#4A4A4AB2]">Comprehensive residential cleaning services tailored to your home's unique needs.</p>
          <ul className="w-[496.0069580078125] h-[147.9340362548828] mt-[30px] ml-[52.01px] gap-[12px] opacity-100 font-[inter] font-normal text-[20px] leading-[24px] tracking-[0px] text-[#4A4A4ACC] list-disc marker:text-[#4A6B8A]">
            <li className="mb-[20px]">Deep cleaning of all rooms</li>
            <li className="mb-[20px]">Kitchen and bathroom sanitization</li>
            <li className="mb-[20px]">Dusting, vacuuming, and mopping</li>
            <li>Window and mirror cleaning</li>
          </ul>
        </div>
        <div className="w-[559.998291015625] h-[478] opacity-100 rounded-[16px] border-[1.67px] [column-span:1] ml-3 border-[#134661FC] [box-shadow:0px_4px_6px_-4px_#0000001A] [box-shadow:0px_10px_15px_-3px_#0000001A] bg-white">
          <div className="flex justify-center items-center w-[63.99305725097656] h-[63.99305725097656] mt-[49px] ml-[34.01px] rounded-[16px] pl-0 opacity-100 bg-[#D4E2ED66] ml-">
            <Image src={Building} alt="Building"/>
          </div>
          <h5 className="font-[Playfair_Display] font-semibold text-[36px] leading-[32px] tracking-[0px] text-[#4A6B8A] ml-[34.01px] mt-[33px]">Office Cleaning</h5>
          <p className="w-[458] h-[48] mt-[13.02px] ml-[34.01px] opacity-100 font-[inter] font-normal text-[20px] leading-[24px] tracking-[0px] text-[#4A4A4AB2]">Professional commercial cleaning to maintain a pristine work environment.</p>
          <ul className="w-[496.0069580078125] h-[147.9340362548828] mt-[30px] ml-[52.01px] gap-[12px] opacity-100 font-[inter] font-normal text-[20px] leading-[24px] tracking-[0px] text-[#4A4A4ACC] list-disc marker:text-[#4A6B8A]">
            <li className="mb-[20px]">Desk and workspace sanitization</li>
            <li className="mb-[20px]">Common area maintenance</li>
            <li className="mb-[20px]">Restroom deep cleaning</li>
            <li>Flexible scheduling options</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
