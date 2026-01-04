import {
  LayoutDashboard,
  List,
  Leaf,
  PlusCircle,
  MessageSquare,
  BarChart3,
  Image,
} from "lucide-react";

function Navbar({ currentPage, onPageChange }) {
  const navItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "add", icon: Leaf, label: "Add" },
    { id: "list", icon: List, label: "List" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "create", icon: PlusCircle, label: "Create" },
    { id: "request", icon: MessageSquare, label: "Request" },
    { id: "gallery", icon: Image, label: "Gallery" },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full bg-white border-t border-slate-200 shadow-md">
      <div className="grid grid-cols-7 place-items-center py-3 px-2">
        {navItems.map(({ id, icon: Icon, label }) => {
          const isActive = currentPage === id;

          return (
            <button
              key={id}
              onClick={() => onPageChange(id)}
              className="flex flex-col items-center justify-center w-full relative"
            >
              {/* Icon */}
              <div
                className={`
                  p-2.5 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#379564] to-[#22573b] -translate-y-3 shadow-lg"
                      : "hover:bg-slate-100"
                  }
                `}
              >
                <Icon
                  className={`w-6 h-6 ${
                    isActive ? "text-white" : "text-[#22573b]"
                  }`}
                />
              </div>

              {/* Label */}
              <span
                className={`
                  mt-1 text-[10px] font-medium transition-all duration-300
                  ${
                    isActive
                      ? "opacity-100 text-[#22573b]"
                      : "opacity-0 h-0 overflow-hidden"
                  }
                `}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
