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
    <MapContainer
      center={[47.6062, -122.3321]}
      zoom={11}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
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
  );
}