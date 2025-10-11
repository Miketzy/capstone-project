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
    {
      id: "dashboard",
      icon: LayoutDashboard,
      link: "",
      label: "Dashboard",
      active: true,
    },
    {
      id: "add",
      icon: Leaf,
      link: "",
      label: "Add Species",
    },
    {
      id: "list",
      icon: List,
      link: "",
      label: "List of Species",
      active: true,
    },
    {
      id: "analytics",
      icon: BarChart3,
      link: "",
      label: "Analytics",
      active: true,
    },
    {
      id: "create",
      icon: PlusCircle,
      link: "",
      label: "Create Question",
    },

    {
      id: "request",
      icon: MessageSquare,
      link: "",
      label: "Contributor Request",
    },
    {
      id: "gallery",
      icon: Image,
      link: "",
      label: "Gallery",
    },
  ];
  return (
    <>
      {menuItems.map((item) => {
        <div key={item.id}>
          <button
            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200`}
          >
            <div className="flex items-center space-x-3">
              <item.icon className={`w-5 h-5`} />
            </div>
          </button>
        </div>;
      })}
    </>
  );
}

export default SidebarMenu;
