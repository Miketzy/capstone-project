import React from "react";
import { Menu } from "lucide-react";

function HeaderLeftSection({
  title = "Dashboard",
  userName = "Michael",
  onMenuClick,
}) {
  return (
    <div className="flex items-center gap-3">
      {/* Mobile: hamburger menu + logo */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          className="hidden md:block w-5 h-5 p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div
          className="w-8 h-8 bg-gradient-to-r from-[#379564] to-[#22573b] rounded-xl
                     flex items-center justify-center shadow-lg"
        >
          <img
            src="/images/Bio.png"
            alt="Dav-Or BioExplorer logo"
            className="w-4 h-4"
          />
        </div>
      </div>

      {/* Desktop: title + greeting */}
      <div className="hidden md:block">
        <h1 className="text-2xl font-black bg-gradient-to-r from-[#379564] to-[#22573b] bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-sm text-slate-500">
          Welcome, {userName}! We’re glad to have you here
        </p>
      </div>
    </div>
  );
}

export default HeaderLeftSection;