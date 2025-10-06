import React from "react";
import {
  Bell,
  Filter,
  Menu,
  Search,
  Settings,
  Sun,
  UserCircle,
} from "lucide-react";

function HeaderRightSection() {
  return (
    <>
      <div className="flex items-center space-x-3">
        {/* toggle */}
        <button className="p-2.5 rounded xl text-slate-600 hover:bg-slate-100 transition-colors">
          <Sun className="w-5 h-5 " />
        </button>

        {/* Notification */}
        <button className="relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/*Setting */}
        <button className="p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-color">
          <Settings className="w-5 h-5" />
        </button>

        {/*user Profile */}
        <div className="flex items-center space-x-3 pl-3 border-l border-slate-200 ">
          <UserCircle className="w-8 h-8 rounded-full ring-2 ring-blue-500" />
        </div>
      </div>
    </>
  );
}

export default HeaderRightSection;
