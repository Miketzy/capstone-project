import {
  Bell,
  Filter,
  Menu,
  Search,
  Settings,
  Sun,
  UserCircle,
  Zap,
} from "lucide-react";
import React from "react";
import HeaderLeftSection from "./HeaderLeftSection";
import HeaderCenterSection from "./HeaderCenterSection";
import HeaderRightSection from "./HeaderRightSection";

function Header() {
  return (
    <>
      <div className="sticky top-0 z-40 bg-white backdrop-blur-xl border-b border-slate-200/50 px-6 py-4">
        <div className="flex items-center justify-between">
          {/*Left Section */}
          <HeaderLeftSection />

          {/*Center */}
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <HeaderCenterSection />
          </div>

          {/* Right */}
          <HeaderRightSection />
        </div>
      </div>
    </>
  );
}

export default Header;
