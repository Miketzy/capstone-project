import React from "react";

import { Zap, Menu } from "lucide-react";

function HeaderLeftSection() {
  return (
    <>
      <div className="flex items-center space-x-4 block md:hidden">
        <div className="rounded-lg">
          <div
            className="w-8 h-8 bg-gradient-to-r from-[#379564] to-[#22573b] rounded-xl 
    flex items-center justify-center shadow-lg"
          >
            <img
              src="/images/download.jpg" // original image
              alt="user"
              className="w-10 h-10 rounded-full ring-2 ring-blue-500"
              onError={(e) => {
                e.target.onerror = null; // prevent infinite loop
                e.target.src = "/images/unknown.jpg"; // default image
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
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
