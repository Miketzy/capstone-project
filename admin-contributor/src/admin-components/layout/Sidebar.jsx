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

        {/*Navigation display a dynamic menu*/}
        <nav className="navigation-container"></nav>

        {/*user profile*/}
        <div className="userprofile-container">
          <div className="user-profile">
            <img src="" alt="user" className="user-image" />
            <div className="flex-1 min-2-0">
              <div className="flex-1 min-2-0">
                <p className="user-name">Michael John G. Margate</p>
                <p className="administration">Administration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
