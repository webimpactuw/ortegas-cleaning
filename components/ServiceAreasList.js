"use client";

import DontSeeYourAreaTile from "./DontSeeYourAreaTile";
import MapTile from "./MapTile";

export default function ServiceAreasList({ areas, onSelect }) {
  return (
    <div>
        <ul className="flex flex-col gap-4 h-120 overflow-y-auto pr-2">
        {areas.map((area) => (
            <MapTile
            key={area.name}
            title={area.name}
            subtitle={area.subtitle}
            onClick={() => onSelect(area)}
            />
        ))}
        
        </ul>
        <div className="mt-4">
            <DontSeeYourAreaTile/>
        </div>
    </div>
  );
}