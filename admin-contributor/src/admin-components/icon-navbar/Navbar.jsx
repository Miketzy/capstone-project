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
    { id: "dashboard", icon: LayoutDashboard },
    { id: "add", icon: Leaf },
    { id: "list", icon: List },
    { id: "analytics", icon: BarChart3 },
    { id: "create", icon: PlusCircle },
    { id: "request", icon: MessageSquare },
    { id: "gallery", icon: Image },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full bg-white text-black text-center border-t border-slate-200 shadow-md">
      <div className="grid grid-cols-7 place-items-center py-3 px-5">
        {navItems.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onPageChange(id)} // ✅ notify parent (App)
            className={`relative p-2.5 rounded-xl transition-all duration-300 ${
              currentPage === id
                ? "bg-gradient-to-r from-[#379564] to-[#22573b]"
                : "hover:bg-slate-100"
            }`}
          >
            <Icon
              className={`w-6 h-6 ${
                currentPage === id ? "text-white" : "text-[#22573b]"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
