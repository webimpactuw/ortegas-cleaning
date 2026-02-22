"use client";

import { useState } from "react";
import ServiceAreasList from "./ServiceAreasList";
import ServiceMap from "./ServiceMap";

const areas = [
  { name: "Lake Stevens, WA", coords: [48.0086, -122.1059], subtitle: "Vernon Rd and 14th St SE" },
  { name: "Auburn, WA", coords: [47.2759, -122.2235], subtitle: "401 37th St SE" },
  { name: "Seattle, WA", coords: [47.5784, -122.3033], subtitle: "98144 area" },
  { name: "Abcdefgh", coords: [47.6730, -122.1215], subtitle: "321 North Road, Northside" },
  { name: "Lmnopqrs", coords: [47.6730, -122.1215], subtitle: "654 South Lane, Southside" },
];

export default function AreasWeServeSection() {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Tiles on the left */}
      <div className="flex-1">
        <ServiceAreasList areas={areas} onSelect={setSelectedArea} />
      </div>

      {/* Map on the right */}
      <div className="flex-2 min-h-[500px]">
        <ServiceMap areas={areas} selectedArea={selectedArea} />
      </div>
    </div>
  );
}