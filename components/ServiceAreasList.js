"use client";

import DontSeeYourAreaTile from "./DontSeeYourAreaTile";
import MapTile from "./MapTile";

export default function ServiceAreasList({ areas, onSelect }) {
  return (
    <ul className="flex flex-col gap-4">
      {areas.map((area) => (
        <MapTile
          key={area.name}
          title={area.name}
          subtitle={area.subtitle}
          onClick={() => onSelect(area)}
        />
      ))}
      <DontSeeYourAreaTile/>
    </ul>
  );
}