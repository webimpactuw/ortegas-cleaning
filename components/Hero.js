import Link from "next/link";
import Image from "next/image";
import hero_icon from "../public/hero_icon.png";

export default function Hero() {
    return (
        <div className="flex flex-col items-center gap-[16px]">
            
            <Image src={hero_icon} alt="ortega's cleaning logo" className="z-1"></Image>

            <div className="text-[#4A4A4ACC] w-[630px] text-[20px] text-center">
                Delivering detailed, reliable residential and commercial 
                cleaning services across King County
            </div>

            <Link className="px-8 py-4 bg-linear-to-r from-[#2C3E50] 
                            to-[#4A90E2] rounded-[16px] text-white" 
                href="/contact">Get Your Free Quote</Link>

        </div>
    );
}