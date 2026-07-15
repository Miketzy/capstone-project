import React from "react";

const data = [
  { label: "Mammals", count: 850, percent: 85 },
  { label: "Fish", count: 880, percent: 88 },
  { label: "Birds", count: 750, percent: 75 },
  { label: "Reptiles", count: 920, percent: 92 },
  { label: "Amphibians", count: 600, percent: 60 },
  { label: "Insects", count: 450, percent: 45 },
  { label: "Arachnids", count: 300, percent: 30 },
  { label: "Mollusks", count: 700, percent: 70 },
  { label: "Echinoderms", count: 680, percent: 68 },
  { label: "Cnidarians", count: 400, percent: 40 },
  { label: "Worms", count: 350, percent: 35 },
  { label: "Sponges", count: 500, percent: 50 },
];

export default function Bargraph() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 sm:mb-8">
        Number and Species
      </h2>

      <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-3 sm:gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* NUMBER + PERCENTAGE */}
            <div className="mb-1 sm:mb-2 text-[11px] sm:text-sm font-semibold text-gray-700 text-center leading-tight">
              <div>{item.count}</div>
              <div className="text-gray-400">{item.percent}%</div>
            </div>

            {/* BAR */}
            <div className="w-full h-[110px] sm:h-[160px] md:h-[200px] bg-gray-100 rounded-lg flex items-end overflow-hidden">
              <div
                className="w-full bg-green-600 rounded-t-lg transition-all duration-500"
                style={{ height: `${item.percent}%` }}
              />
            </div>

            {/* LABEL */}
            <div className="mt-1 sm:mt-2 text-[9px] sm:text-xs text-gray-600 text-center break-words leading-tight">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}