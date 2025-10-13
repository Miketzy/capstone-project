import React, { useState } from "react";
import VertebratesCard from "./vertebratesCard/VertebratesCard";
import InvertebratesCard from "./invertebratesCard/InvertebratesCard";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("vertebrates"); // default active

  return (
    <div className="flex flex-col gap-5">
      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setActiveTab("vertebrates")}
          className={`px-5 py-2 rounded-xl transition font-medium bg-white ${
            activeTab === "vertebrates"
              ? "bg-gradient-to-r from-[#379564] to-[#22573b] text-white shadow-md"
              : "hover:bg-gradient-to-r hover:from-[#379564] hover:to-[#22573b] hover:text-white"
          }`}
        >
          Vertebrates
        </button>

        <button
          onClick={() => setActiveTab("invertebrates")}
          className={`px-5 py-2 rounded-xl transition font-medium bg-white ${
            activeTab === "invertebrates"
              ? "bg-gradient-to-r from-[#379564] to-[#22573b] text-white shadow-md"
              : "hover:bg-gradient-to-r hover:from-[#379564] hover:to-[#22573b] hover:text-white"
          }`}
        >
          Invertebrates
        </button>
      </div>

      {/* Cards */}
      <div>
        {activeTab === "vertebrates" && <VertebratesCard />}
        {activeTab === "invertebrates" && <InvertebratesCard />}
      </div>
    </div>
  );
}

export default Dashboard;
