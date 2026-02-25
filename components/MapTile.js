"use client";

export default function MapTile({ title, subtitle, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="flex items-center gap-4 p-4 rounded-lg bg-[#FFFEF8] shadow hover:shadow-lg transition-shadow w-full text-left"
      >
        <img src="https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png" className="w-4 h-6"></img>
        <div>
          <h3 className="font-bold text-[#214A60]">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
      </button>
    </li>
  );
}