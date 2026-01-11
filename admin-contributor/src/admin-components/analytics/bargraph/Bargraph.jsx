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

function Bargraph() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-semibold text-center mb-6">
        Most Popular Apps Among Teens
      </h2>

      <div className="flex items-end justify-between h-64 gap-4 overflow-x-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[60px] flex-1"
          >
            {/* Numbers on top */}
            <div className="mb-2 text-sm font-semibold text-gray-700 text-center">
              <div>{item.count}</div>
              <div>{item.percent}%</div>
            </div>

            {/* Bar */}
            <div className="w-full bg-gray-200 rounded-lg h-full flex items-end">
              <div
                className="w-full bg-green-500 rounded-lg transition-all duration-500"
                style={{ height: `${item.percent}%` }}
              />
            </div>

            {/* Label */}
            <div className="mt-3 text-sm text-gray-600 text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bargraph;
