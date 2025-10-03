import { Menu } from "lucide-react";
import React from "react";

function Header() {
  return (
    <>
      <div className="bg-[#35e291] backdrop-blur-xl border-b border-slate-200/50 px-6 py-4">
        <div className="flex items-center justify-between">
          {/*Left Section */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg text-white hover:ng-slate-100 transition-colors cursor-pointer">
              <Menu className="w-5 h-5 " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
