"use client";

import Link from "next/link";

export default function DontSeeYourAreaTile() {
  return (
    <li className="flex flex-col gap-4 p-4 rounded-lg bg-[#FFFEF8] shadow hover:shadow-lg transition-shadow w-full text-left">
        <h3 className="font-bold text-2xl text-[#4A4A4A]">Don't see your area?</h3>
        <p className="text-[#4A4A4A]">We may still service your location! Contact us to find out.</p>
        <Link href="/contact" className="rounded-[8px] text-white px-6 py-2 bg-[#224a60] w-fit">Contact Us</Link>
    </li>
  );
}