"use client";

import { useState } from "react";
import Link from "next/link";
import ServiceMap from "./ServiceMap";

function PinIcon() {
  return (
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
      <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" fill="#F97316" />
      <circle cx="7" cy="7" r="2.5" fill="white" />
    </svg>
  );
}

const areas = [
  { name: "Algona",         coords: [47.2791, -122.2494], subtitle: "WA", address: "Vernon Rd and 14th St SE" },
  { name: "Auburn",         coords: [47.3074, -122.2286], subtitle: "WA", address: "401 37th St SE" },
  { name: "Black Diamond",  coords: [47.3087, -122.0023], subtitle: "WA", address: "98144 area" },
  { name: "Bonney Lake",    coords: [47.1773, -122.1831], subtitle: "WA", address: "98144 area" },
  { name: "Buckley",        coords: [47.1630, -122.0270], subtitle: "WA", address: "321 North Road, Northside" },
  { name: "Covington",      coords: [47.3594, -122.1168], subtitle: "WA", address: "654 South Lane, Southside" },
  { name: "Edgewood",       coords: [47.2500, -122.2936], subtitle: "WA", address: "401 37th St SE" },
  { name: "Enumclaw",       coords: [47.2042, -121.9915], subtitle: "WA", address: "Vernon Rd and 14th St SE" },
  { name: "Lakeland Hills", coords: [47.2560, -122.2138], subtitle: "WA", address: "321 North Road, Northside" },
  { name: "Lake Tapps",     coords: [47.2410, -122.1852], subtitle: "WA", address: "654 South Lane, Southside" },
  { name: "Milton",         coords: [47.2477, -122.3128], subtitle: "WA", address: "654 South Lane, Southside" },
  { name: "North Tacoma",   coords: [47.2798, -122.3699], subtitle: "WA", address: "654 South Lane, Southside" },
  { name: "Orting",         coords: [47.0977, -122.2039], subtitle: "WA", address: "654 South Lane, Southside" },
  { name: "Pacific",        coords: [47.2644, -122.2500], subtitle: "WA", address: "654 South Lane, Southside" },
  { name: "Puyallup",       coords: [47.1855, -122.2931], subtitle: "WA", address: "654 South Lane, Southside" },
  { name: "Sumner",         coords: [47.2031, -122.2402], subtitle: "WA", address: "Vernon Rd and 14th St SE" },
];

export default function ServicesAreasSection() {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <section>
      {/* Dark heading banner */}
      <div className="bg-[#2E4E65] py-10 text-center">
        <h2 className="font-[Playfair_Display] text-4xl font-bold text-white">
          Areas We Serve
        </h2>
      </div>

      {/* Map + tiles on light blue */}
      <div className="bg-[#EFF6FF] py-10 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">

          {/* Full-width map — tall */}
          <div className="relative w-full border-black rounded-2xl shadow-md">
            <ServiceMap
              areas={areas}
              selectedArea={selectedArea}
            />
            {/* Border overlay — sits above Leaflet tile layers */}
            <div className="absolute inset-0 rounded-2xl border border-gray-200 pointer-events-none z-[1000]" />
          </div>

          {/* 4-column area tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-5">
            {areas.map((area) => (
              <button
                key={area.name}
                onClick={() => setSelectedArea(area)}
                className="flex items-start gap-2.5 bg-[#FFFEF8] rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#D8B76B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#D8B76B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p className="font-medium text-[#2E4E65] font-[inter] text-base leading-5">
                    {area.name}, {area.subtitle}
                  </p>
                  <p className="text-gray-600 text-xs font-[inter] mt-0.5">{area.address}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Don't see your area? — centered white card */}
          <div className="bg-[#FFFEF8] rounded-xl p-6 shadow-sm max-w-sm mx-auto mt-2">
            <p className="font-bold text-[#4A4A4A80] text-base mb-1 font-[inter]">
              Don&apos;t see your area?
            </p>
            <p className="text-[#4A4A4A80] text-sm font-[inter] mb-4">
              We may still service your location! Contact us to find out.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-2 rounded-3xl bg-[#4A6B8A] font-semibold text-white font-[inter] text-sm hover:bg-[#2E5E78] transition-colors"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
