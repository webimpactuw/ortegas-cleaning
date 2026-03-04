"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Dynamically import components that break SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

function MapUpdater({ selectedArea }) {
  const map = useMap();

  useEffect(() => {
    if (selectedArea) {
      map.setView(selectedArea.coords, 13, { animate: true });
    }
  }, [selectedArea, map]);

  return null;
}

export default function ServiceMap({ areas, selectedArea }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    import("leaflet").then((L) => {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    });
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-[#FFFEF8] p-4 rounded-2xl overflow-hidden shadow-lg h-150">
        <MapContainer
            center={[47.2462, -122.1793]}
            zoom={11}
            scrollWheelZoom={true}
            className="h-full w-full rounded-2xl"
        >
            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {areas.map((area) => (
                <Marker key={area.name} position={area.coords}>
                <Popup>{area.name}</Popup>
                </Marker>
            ))}

            {selectedArea && <MapUpdater selectedArea={selectedArea} />}
        </MapContainer>
    </div>
  );
}