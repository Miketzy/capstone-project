import React from "react";
import { Zap } from "lucide-react";

function Sidebar() {
  return (
    <>
      <div className="sidebar hidden">
        <div className="sidebar-logo">
          <div className="logo-layout">
            <div className="logo">
              <Zap className="Zap-layout" />
            </div>

            {/*Conditional Rendering*/}
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-[#379564] to-[#22573b] bg-clip-text ">
                <strong>Dav-Or BioExplorer</strong>
              </h1>
              <p className="text-xs bg-gradient-to-r from-[#379564] to-[#22573b] bg-clip-text ">
                Admin Panel
              </p>
            </div>
          </div>
        </div>

        {/*Navigation display a dynamic menu*/}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto"></nav>

        {/*user profile*/}
        <div className="p-4 border-t border-slate-200/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-[#379564] to-[#22573b]">
            <img
              src=""
              alt="user"
              className="w-10 h-10 rounded-full ring-2 ring-blue-500"
            />
            <div className="flex-1 min-2-0">
              <div className="flex-1 min-2-0">
                <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                  Michael John G. Margate
                </p>
                <p className="text-xs text-slate-200 truncate">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
