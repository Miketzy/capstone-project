import {
  BarChart3,
  Image,
  LayoutDashboard,
  Leaf,
  List,
  MessageSquare,
  PlusCircle,
} from "lucide-react";
import React from "react";

function SidebarMenu() {
  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "add", icon: Leaf, label: "Add Species" },
    { id: "list", icon: List, label: "List of Species" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "create", icon: PlusCircle, label: "Create Question" },
    { id: "request", icon: MessageSquare, label: "Contributor Request" },
    { id: "gallery", icon: Image, label: "Gallery" },
  ];

  return (
    <>
      {menuItems.map((item) => (
        <div key={item.id}>
          <button
            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 hover:bg-gray-200`}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </div>
          </button>
        </div>
      ))}
    </>
  );
}

export default SidebarMenu;
