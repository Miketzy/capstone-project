import { Bell, Filter, Inbox, Menu, Plus, Search, Sun } from "lucide-react";
import React from "react";

function Header() {
  return (
    <>
      <div className="bg-white backdrop-blur-xl border-b border-slate-200/50 px-6 py-4">
        <div className="flex items-center justify-between">
          {/*Left Section */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg text-black hover:ng-slate-100 transition-colors cursor-pointer">
              <Menu className="w-5 h-5 " />
            </button>

            <div className="hidden md:block">
              <h1 className="text-2xl font-black bg-gradient-to-r from-[#379564] to-[#22573b] bg-clip-text">
                <strong>Dashboard</strong>
              </h1>
              <p className="text-sm bg-gradient-to-r from-[#379564] to-[#22573b] bg-clip-text">
                Wellcome, Michael! we’re glad to have you here{" "}
              </p>
            </div>
          </div>

          {/*Center */}

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
              <input
                type="text"
                placeholder="Search Anything"
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl 
             bg-gradient-to-r from-[#379564] to-[#22573b] 
             text-white placeholder-slate-200
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition-all"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5
                 text-white hover:text-slate-600"
              >
                <Filter />
              </button>
            </div>
          </div>
          {/* Right */}

          <div className="flex items-center space-x-3">
            {/* toggle */}
            <button className="p-2.5 rounded xl text-slate-600 hover:bg-slate-100 transition-colors">
              <Sun className="w-5 h-5 " />
            </button>

            {/* Notification */}
            <button className="relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Inbox */}
            <button className="relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
              <Inbox className="w-5 h-5" />
              <span className="absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
