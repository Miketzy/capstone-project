import React, { useState } from "react";
import { Filter, Search } from "lucide-react";

function HeaderCenterSection({ onSearch, onFilterClick }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <div className="relative w-full max-w-md">
      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/80 pointer-events-none" />

      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search Anything"
        aria-label="Search"
        className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-xl 
             bg-gradient-to-r from-[#379564] to-[#22573b] 
             text-white placeholder-white/70
             focus:outline-none focus:ring-2 focus:ring-emerald-300 
             focus:border-transparent transition-all"
      />

      <button
        type="button"
        onClick={onFilterClick}
        aria-label="Open filters"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg
               text-white/80 hover:text-white hover:bg-white/10 transition-colors"
      >
        <Filter className="w-4 h-4" />
      </button>
    </div>
  );
}

export default HeaderCenterSection;