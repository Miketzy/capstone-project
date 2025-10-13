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
          className={`px-5 py-2 rounded-xl transition font-medium ${
            activeTab === "vertebrates"
              ? "bg-green-600 text-white shadow-md"
              : "bg-white text-black hover:bg-green-100"
          }`}
        >
          Vertebrates
        </button>

        <button
          onClick={() => setActiveTab("invertebrates")}
          className={`px-5 py-2 rounded-xl transition font-medium ${
            activeTab === "invertebrates"
              ? "bg-green-600 text-white shadow-md"
              : "bg-white text-black hover:bg-green-100"
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
