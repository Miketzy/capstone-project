import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search animals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

export default SearchBar;
