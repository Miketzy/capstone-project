import React from "react";

function HeaderCenterSection() {
  return (
    <>
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
        <input
          type="text"
          placeholder="Search Anything"
          className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl 
             bg-gradient-to-r from-[#379564] to-[#22573b] 
             text-white placeholder-slate-200
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition-all"
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5
                 text-white hover:text-slate-600"
        >
          <Filter />
        </button>
      </div>
    </>
  );
}

export default HeaderCenterSection;
