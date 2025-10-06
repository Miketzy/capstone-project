import React from "react";

function HeaderLeftSection() {
  return (
    <>
      <div className="flex items-center space-x-4 block md:hidden">
        <div className="rounded-lg">
          <div
            className="w-8 h-8 bg-gradient-to-r from-[#379564] to-[#22573b] rounded-xl 
    flex items-center justify-center shadow-lg"
          >
            <Zap className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 hidden md:block rounded-lg text-black hover:ng-slate-100 transition-colors cursor-pointer">
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
    </>
  );
}

export default HeaderLeftSection;
