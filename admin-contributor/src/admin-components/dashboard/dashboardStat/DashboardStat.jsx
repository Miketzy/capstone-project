import React from "react";

function DashboardStat() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Contributor Count */}
      <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
        <h1 className="text-sm text-gray-500">Contributor Count</h1>
        <p className="text-3xl font-bold mt-2">128</p>
      </div>

      {/* User Count */}
      <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
        <h1 className="text-sm text-gray-500">User Count</h1>
        <p className="text-3xl font-bold mt-2">1,024</p>
      </div>
    </div>
  );
}

export default DashboardStat;
