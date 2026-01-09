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
  { month: "January", value: 82 },
  { month: "February", value: 55 },
  { month: "March", value: 82 },
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
    <>
      <h2 className="text-base md:text-lg font-semibold mb-2 md:mb-4">
        My First Dataset
      </h2>

      {/* Responsive height */}
      <div className="w-full h-[260px] md:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" tick={{ fontSize: 10 }} interval={0} />

            <YAxis tick={{ fontSize: 10 }} />

            <Tooltip />
            <Legend wrapperStyle={{ fontSize: "12px" }} />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              fill="#bbf7d0"
              strokeWidth={2}
              name="My First dataset"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default AreaChartCard;
