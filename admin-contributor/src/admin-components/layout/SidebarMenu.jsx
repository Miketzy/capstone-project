import {
  BarChart3,
  Image,
  LayoutDashboard,
  Leaf,
  List,
  MessageSquare,
  PawPrint,
  PlusCircle,
} from "lucide-react";
import React from "react";

function SidebarMenu({ currentPage, onPageChange }) {
  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Species Directory" },
    { id: "add", icon: Leaf, label: "Add Species" },
    { id: "list", icon: List, label: "List of Species" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "create", icon: PlusCircle, label: "Create Question" },
    {
      id: "request",
      icon: MessageSquare,
      label: "Contributor Request",
      count: "10",
    },
    { id: "gallery", icon: Image, label: "Gallery" },
  ];

  return (
    <>
      {menuItems.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => onPageChange(item.id)} // 🔥 calls parent function
            className={`group  w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 cursor-pointer ${
              currentPage === item.id
                ? "bg-gradient-to-r from-[#379564] to-[#22573b] text-white shadow-md"
                : "hover:bg-gradient-to-r hover:from-[#379564] hover:to-[#22573b] hover:text-white"
            }`}
          >
            <div className="relative flex items-center space-x-3">
              {/* Icon */}
              <item.icon
                className={`w-5 h-5 ${
                  currentPage === item.id
                    ? "text-white"
                    : "text-black group-hover:text-white"
                }`}
              />

              {/* Badge for md and smaller */}
              {item.count && (
                <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full lg:hidden">
                  {item.count}
                </span>
              )}

              {/* Label */}
              <span
                className={`font-medium ml-2 hidden lg:inline ${
                  currentPage === item.id
                    ? "text-white"
                    : "text-black group-hover:text-white"
                }`}
              >
                {item.label}
              </span>

              {/* Badge for lg and larger */}
              {item.count && (
                <span className="hidden lg:inline px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                  {item.count}
                </span>
              )}
            </div>
            <PawPrint
              className={`absolute hidden lg:right-1 w-3 h-3 opacity-0 translate-y-1 transition-all duration-300
    ${
      currentPage === item.id
        ? "opacity-90 translate-y-0 text-white/90"
        : "group-hover:opacity-80 group-hover:translate-y-0 text-white/50"
    }`}
            />
          </button>
        </div>
      ))}
    </>
  );
}

export default SidebarMenu;
