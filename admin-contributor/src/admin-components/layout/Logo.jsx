import React from "react";
import { Zap } from "lucide-react";

function Logo() {
  return (
    <>
      <div className="logo-layout">
        <div className="logo">
          <Zap className="Zap-layout" />
        </div>

        {/*Conditional Rendering*/}
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#379564] to-[#22573b] bg-clip-text ">
            <strong>Dav-Or BioExplorer</strong>
          </h1>
          <p className="text-xs bg-gradient-to-r from-[#379564] to-[#22573b] bg-clip-text ">
            Admin Panel
          </p>
        </div>
      </div>
    </>
  );
}

export default Logo;
