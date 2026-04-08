"use client";

import Link from "next/link";

export default function DontSeeYourAreaTile() {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg bg-[#FFFEF8] shadow hover:shadow-lg transition-shadow w-full text-left">
        <h3 className="font-bold text-2xl text-[#4A4A4A]">Check out our full list here</h3>
        <p className="text-[#4A4A4A] font-[inter]">Take a look at our complete list of service areas here. Don't see your location? Let us know!</p>
        <Link href="/services" className="rounded-[8px] text-white px-6 py-2 bg-[#224a60] w-fit font-[inter]">View more</Link>
    </div>
  );
}