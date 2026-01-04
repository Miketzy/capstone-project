import React from "react";

function RequesttSearchBar({ search, setSearch }) {
  return (
    <div className="w-full md:w-1/3">
      <input
        type="text"
        placeholder="Search name or species..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

export default RequesttSearchBar;
