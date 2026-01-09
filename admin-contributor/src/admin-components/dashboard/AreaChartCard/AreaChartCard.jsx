import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "April", value: 82 },
  { month: "May", value: 55 },
  { month: "June", value: 54 },
  { month: "July", value: 40 },
  { month: "August", value: 48 },
  { month: "September", value: 52 },
  { month: "October", value: 60 },
  { month: "November", value: 70 },
  { month: "December", value: 78 },
];

function AreaChartCard() {
  return (
    <div className="w-full h-[350px] bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">My First Dataset</h2>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            fill="#bbf7d0"
            strokeWidth={3}
            name="My First dataset"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaChartCard;
