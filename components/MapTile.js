"use client";

export default function MapTile({ title, subtitle, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="flex items-center gap-4 p-4 rounded-lg bg-white shadow hover:shadow-lg transition-shadow w-full text-left"
      >
        <span className="text-red-500 text-2xl flex-shrink-0">o</span>
        <div>
          <h3 className="font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </button>
    </li>
  );
}