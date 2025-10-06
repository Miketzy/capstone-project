import React from "react";
import { Zap } from "lucide-react";
import UserProfile from "./UserProfile";

function Sidebar() {
  return (
    <>
      <div className="sidebar hidden md:flex sticky top-0 z-40">
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
          <UserProfile />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
