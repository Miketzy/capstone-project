import UserProfile from "./UserProfile";
import Logo from "./Logo";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";

function Sidebar({ collapsed, onToggle, currentPage, onPageChange }) {
  const [expandedItem, setExpandedItem] = useState(new Set(["analytics"]));

  const toggleExpanded = (itemid) => {
    const newExpanded = new Set(expandedItem);
    if (newExpanded.has(itemid)) {
      newExpanded.delete(itemid);
    } else {
      newExpanded.add(itemid);
    }

    setExpandedItem(newExpanded);
  };
  return (
    <>
      <div
        className={`${
          collapsed ? "w-20" : "w-72"
        } transition duration-300 ease-in-out bg-white backdrop-blur-xl border-r border-slate-200/50
  flex flex-col relative hidden md:block  z-10`}
      >
        <div className="sidebar-logo">
          <Logo />
        </div>

        {/*Navigation display a dynamic menu*/}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <SidebarMenu />
        </nav>

        {/*user profile*/}
        {!collapsed && (
          <div className="p-4 border-t border-slate-200/50">
            <UserProfile />
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
