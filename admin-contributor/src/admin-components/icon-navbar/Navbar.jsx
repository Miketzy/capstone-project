import {
  LayoutDashboard,
  List,
  Leaf,
  PlusCircle,
  MessageSquare,
  BarChart3,
  Users,
  Image,
} from "lucide-react";
import { useState } from "react";
function Navbar() {
  const [active, setActive] = useState("dashboard");

  const navItems = [
    { id: "dashboard", icon: LayoutDashboard },
    { id: "add species", icon: Leaf },
    { id: "list", icon: List },
    { id: "Analytic", icon: BarChart3 },
    { id: "createQuestion", icon: PlusCircle },
    { id: "contributorRequest", icon: MessageSquare },
    { id: "gallery", icon: Image },
  ];
  return (
    <>
      <div className="fixed bottom-0 left-0 z-40 w-full bg-white text-black text-center py-3 border-t border-slate-200 shadow-md">
        <div className="grid grid-cols-7 place-items-center py-3 px-5">
          {navItems.map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors transition-all duration-300 ${
                active === id
                  ? "bg-gradient-to-r from-[#379564] to-[#22573b]"
                  : "hover:bg-slate-100"
              }`}
            >
              <Icon
                className={`w-6 h-6 ${
                  active === id ? "text-white" : "text-[#22573b]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
