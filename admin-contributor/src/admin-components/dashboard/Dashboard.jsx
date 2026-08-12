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
      
    </div>
  );
}

export default Dashboard;
