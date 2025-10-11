import {
  BarChart3,
  Image,
  LayoutDashboard,
  Leaf,
  List,
  MessageSquare,
  PlusCircle,
} from "lucide-react";
import React, { useState } from "react";

function SidebarMenu() {
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "add", icon: Leaf, label: "Add Species" },
    { id: "list", icon: List, label: "List of Species" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "create", icon: PlusCircle, label: "Create Question" },
    {
      id: "request",
      icon: MessageSquare,
      label: "Contributor Request",
      count: "1",
    },
    { id: "gallery", icon: Image, label: "Gallery" },
  ];

  return (
    <>
      {menuItems.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => setActive(item.id)}
            className={`group w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
              active === item.id
                ? "bg-gradient-to-r from-[#379564] to-[#22573b] text-white shadow-md"
                : "hover:bg-gradient-to-r hover:from-[#379564] hover:to-[#22573b] hover:text-white"
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon
                className={`w-5 h-5  ${
                  active === item.id
                    ? "text-white"
                    : "text-gray-600 group-hover:text-white"
                }`}
              />
              <span
                className={`font-medium  ml-2 ${
                  active === item.id
                    ? "text-white"
                    : "text-gray-800 group-hover:text-white"
                }`}
              >
                {item.label}
              </span>
              <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full ">
                {item.count}
              </span>
            </div>
          </button>
        </div>
      ))}
    </>
  );
}

export default SidebarMenu;
