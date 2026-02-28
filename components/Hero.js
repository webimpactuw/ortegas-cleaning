import Link from "next/link";
import Image from "next/image";
import hero_icon from "../public/hero_icon.png";
import Bubble from "./Bubble";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Hero() {
    return (
        <div className="flex flex-col items-center gap-[16px]">

            <Bubble size={130}  top="20%"  left="56%"/>
            <Bubble size={180}  top="32%" left="63%"/>
            <Bubble size={90}  top="17%"  left="66%"/>
            <Bubble size={90} top="45%" left="29%"/>
            <Bubble size={50} top="55%" left="35%"/>

            <Image src={hero_icon} alt="ortega's cleaning logo" className="z-1"></Image>

            <div className="text-[#4A4A4ACC] w-[630px] text-[1.2rem] text-center font-[inter]">
                Delivering detailed, reliable residential and commercial 
                cleaning services across King County
            </div>

            <Link className="px-8 py-4 bg-linear-to-r from-[#2C3E50] 
                            to-[#4A90E2] rounded-[16px] text-[0.9rem] text-white font-[inter]" 
                href="/contact">Get Your Free Quote</Link>

        </div>
    );
}