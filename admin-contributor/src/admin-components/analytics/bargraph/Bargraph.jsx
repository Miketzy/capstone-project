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
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 sm:mb-6 md:mb-8">
        Number and Species
      </h2>

      {/* SCROLL HINT (mobile only) */}
      <p className="text-[11px] text-gray-400 text-center mb-2 sm:hidden">
        ← swipe to see more →
      </p>

      {/* CHART AREA */}
      <div className="flex items-end gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1 snap-start min-w-[52px] sm:min-w-[64px] md:min-w-[70px]"
          >
            {/* VALUES ON TOP */}
            <div className="mb-1 sm:mb-2 text-[11px] sm:text-sm font-semibold text-gray-700 text-center leading-tight">
              <div>{item.count}</div>
              <div>{item.percent}%</div>
            </div>

            {/* BAR CONTAINER (FIXED HEIGHT) */}
            <div className="w-full h-[130px] sm:h-[180px] md:h-[220px] bg-gray-200 rounded-lg flex items-end">
              <div
                className="w-full bg-green-500 rounded-lg transition-all duration-500"
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