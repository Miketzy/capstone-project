import React, { useState } from "react";
import VertebratesCard from "./vertebratesCard/VertebratesCard";
import InvertebratesCard from "./invertebratesCard/InvertebratesCard";
import ContributorTable from "./contributorTable/ContributorTable";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("vertebrates"); // default active

  return (
    <div className="flex flex-col gap-5">
      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setActiveTab("vertebrates")}
          className={`px-5 py-2 rounded-xl transition font-medium bg-white cursor-pointer ${
            activeTab === "vertebrates"
              ? "bg-gradient-to-r from-[#379564] to-[#22573b] text-white shadow-md"
              : "hover:bg-gradient-to-r hover:from-[#379564] hover:to-[#22573b] hover:text-white"
          }`}
        >
          Vertebrates
        </button>

        <button
          onClick={() => setActiveTab("invertebrates")}
          className={`px-5 py-2 rounded-xl transition font-medium bg-white cursor-pointer ${
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

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex-1 p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h1 className="text-xl font-bold">Analytics</h1>
        </div>

        <div className="flex-1 p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h1 className="text-xl font-bold">Analytics</h1>
        </div>
      </div>

      {/**In the Contributor Table, you can see whether a contributor is active or not. */}
      <div>
        <ContributorTable />
      </div>
    </div>
  );
}

export default Dashboard;
