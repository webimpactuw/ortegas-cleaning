"use client";

import { useState } from "react";
import ServiceAreasList from "./ServiceAreasList";
import ServiceMap from "./ServiceMap";

const areas = [
  { name: "Auburn", coords: [47.3074, -122.2286], subtitle: "WA" },
  { name: "Sumner", coords: [47.2031, -122.2402], subtitle: "WA" },
  { name: "Bonney Lake", coords: [47.1773, -122.1831], subtitle: "WA" },
  { name: "Buckley", coords: [47.1630, -122.0270], subtitle: "WA" },
  { name: "Enumclaw", coords: [47.2042, -121.9915], subtitle: "WA" },
  { name: "Puyallup", coords: [47.1855, -122.2931], subtitle: "WA" },
  { name: "Covington", coords: [47.3594, -122.1168], subtitle: "WA" },
  { name: "Black Diamond", coords: [47.3087, -122.0023], subtitle: "WA" },
  { name: "Milton", coords: [47.2477, -122.3128], subtitle: "WA" },
  { name: "North Tacoma", coords: [47.2798, -122.3699], subtitle: "WA" },
  { name: "Edgewood", coords: [47.2500, -122.2936], subtitle: "WA" },
  { name: "Lake Tapps", coords: [47.2410, -122.1852], subtitle: "WA" },
  { name: "Orting", coords: [47.0977, -122.2039], subtitle: "WA" },
  { name: "Lakeland Hills", coords: [47.2560, -122.2138], subtitle: "WA" },
  { name: "Pacific", coords: [47.2644, -122.2500], subtitle: "WA" },
  { name: "Algona", coords: [47.2791, -122.2494], subtitle: "WA" },

];

export default function AreasWeServeSection() {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#214A60] text-center mb-12">
            Areas We Serve
        </h2>

        {/* Content layout*/}
        <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Tiles on the left */}
            <div className="flex-1">
                <ServiceAreasList areas={areas} onSelect={setSelectedArea} />
            </div>

            {/* Map on the right */}
            <div className="flex-2 h-150">
                <ServiceMap areas={areas} selectedArea={selectedArea} />
            </div>
        </div>
    </section>
  );
}