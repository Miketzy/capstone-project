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
import Header from "./admin-components/layout/Header";
import Sidebar from "./admin-components/layout/Sidebar";
import { useState } from "react";
import Navbar from "./admin-components/icon-navbar/Navbar";

function App() {
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
      <div className="container-layout">
        <div className="layout">
          <Sidebar />
          <div className="flex-1 flex flex-col ">
            <Header />
            <footer className="w-full bg-black text-white text-center py-3 ">
              © 2025 Dav-Or BioExplorer. All rights reserved.
            </footer>
          </div>
        </div>

        <div className="block md:hidden">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
