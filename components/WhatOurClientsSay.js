import Link from "next/link";
import Image from "next/image";
import hero_icon from "../public/hero_icon.png";
import Bubble from "./Bubble";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function WhatOurClientsSay() {
    return (
        <div className="flex flex-col items-center bg-[#FAF8F5]">
            <h1 className="font-[Playfair_Display]">What Our Clients Say</h1>
            
            <div>Hear from our satisfied customers</div>
            
            <Link href="#" className="rounded-[16px] text-white font-[Inter] font-[600]
                                    text-[0.8rem] px-6 py-2 bg-[#2E4E65]">
                    All reviews →
            </Link>
        </div>
    );
}