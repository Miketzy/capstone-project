import UserProfile from "./UserProfile";
import Logo from "./Logo";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";

function Sidebar({ currentPage, onPageChange }) {
  return (
    <>
      <div
        className="lg:w-72 md:w-20 transition duration-300 ease-in-out bg-white backdrop-blur-xl border-r border-slate-200/50
  flex flex-col relative hidden md:block  z-10"
      >
        <div className="sidebar-logo">
          <Logo />
        </div>

        {/*Navigation display a dynamic menu*/}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <SidebarMenu currentPage={currentPage} onPageChange={onPageChange} />
        </nav>

        {/*user profile*/}

        <div className="p-4 border-t border-slate-200/50">
          <UserProfile />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
