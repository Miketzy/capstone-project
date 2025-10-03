import React from "react";
import { Zap } from "lucide-react";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-layout">
            <div className="logo">
              <Zap className="Zap-layout" />
            </div>

            {/*Conditional Rendering*/}
            <div>
              <h1 className="title-layout">Nexus</h1>
              <p className="title-paragraph">Admin Panel</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
