import React, { useState } from "react";
import VertebratesCard from "./vertebratesCard/VertebratesCard";
import InvertebratesCard from "./invertebratesCard/InvertebratesCard";
import ContributorTable from "./contributorTable/ContributorTable";
import DashboardStat from "./dashboardStat/DashboardStat";
import AreaChartCard from "./AreaChartCard/AreaChartCard";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("vertebrates"); // default active

  return (
    <div className="flex flex-col gap-5">
      {/* Buttons */}
      

      {/* Cards */}
      <div>
        {activeTab === "vertebrates" && <VertebratesCard />}
        {activeTab === "invertebrates" && <InvertebratesCard />}
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5">
          <DashboardStat />
        </div>

        <div className="flex-1 p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <AreaChartCard />
        </div>
      </div>

      {/**In the Contributor Table, you can see whether a contributor is active or not. */}

      <ContributorTable />
    </div>
  );
}

export default Dashboard;
