import React from "react";
import { Search, X } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative w-full">
      {/* Search icon */}
      <Search
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        size={18}
      />

      <input
        type="text"
        placeholder="Search animals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-10 pr-10 py-2.5 sm:py-2 text-base sm:text-sm border border-gray-300 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />

      {/* Clear button - only shows when there's text */}
      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;