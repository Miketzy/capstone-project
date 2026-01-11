import React from "react";

const data = [
  { label: "Instagram", count: 850, percent: 85 },
  { label: "TikTok", count: 880, percent: 88 },
  { label: "Snapchat", count: 750, percent: 75 },
  { label: "YouTube", count: 920, percent: 92 },
  { label: "Discord", count: 600, percent: 60 },
  { label: "X", count: 450, percent: 45 },
  { label: "Facebook", count: 300, percent: 30 },
  { label: "Messenger", count: 700, percent: 70 },
  { label: "WhatsApp", count: 680, percent: 68 },
  { label: "Telegram", count: 400, percent: 40 },
  { label: "Reddit", count: 350, percent: 35 },
  { label: "Pinterest", count: 500, percent: 50 },
];

export default function Bargraph() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-semibold text-center mb-8">
        Most Popular Apps Among Teens
      </h2>

      {/* CHART AREA */}
      <div className="flex items-end gap-6 overflow-x-auto pb-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center min-w-[80px]">
            {/* VALUES ON TOP */}
            <div className="mb-2 text-sm font-semibold text-gray-700 text-center">
              <div>{item.count}</div>
              <div>{item.percent}%</div>
            </div>

            {/* BAR CONTAINER (FIXED HEIGHT) */}
            <div className="w-10 h-[220px] bg-gray-200 rounded-lg flex items-end">
              <div
                className="w-full bg-green-500 rounded-lg transition-all duration-500"
                style={{ height: `${item.percent}%` }}
              />
            </div>

            {/* LABEL */}
            <div className="mt-3 text-xs text-gray-600 text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
