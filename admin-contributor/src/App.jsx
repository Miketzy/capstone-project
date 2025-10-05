import { Home } from "lucide-react";
import Header from "./admin-components/layout/Header";
import Sidebar from "./admin-components/layout/Sidebar";

function App() {
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
          <div className="fixed bottom-0 left-0 z-40 w-full bg-white text-black text-center py-3 border-t border-slate-200 shadow-md">
            <div className="grid grid-cols-7 place-items-center py-3 px-5">
              <button className="relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
                <Home className="w-6 h-6 text-[#22573b]" />
              </button>
              <button className="relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
                <Home className="w-6 h-6 text-[#22573b]" />
              </button>
              <button className="relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
                <Home className="w-6 h-6 text-[#22573b]" />
              </button>
              <button className="relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
                <Home className="w-6 h-6 text-[#22573b]" />
              </button>
              <button className="relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
                <Home className="w-6 h-6 text-[#22573b]" />
              </button>
              <button className="relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
                <Home className="w-6 h-6 text-[#22573b]" />
              </button>
              <button className="relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
                <Home className="w-6 h-6 text-[#22573b]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
