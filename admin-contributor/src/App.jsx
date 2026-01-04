import Header from "./admin-components/layout/Header";
import Sidebar from "./admin-components/layout/Sidebar";
import Navbar from "./admin-components/icon-navbar/Navbar";
import Footer from "./admin-components/footer/Footer";
import { useState } from "react";
import Dashboard from "./admin-components/dashboard/Dashboard";
import AddSpecies from "./admin-components/add-species/AddSpecies";
import Analytics from "./admin-components/analytics/Analytics";
import Create from "./admin-components/createQuest/Create";
import Gallery from "./admin-components/gallery/Gallery";
import ContributorRequest from "./admin-components/contributorRequest/ContributorRequest";
import SpeciesTable from "./admin-components/list-species/SpeciesTable";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  return (
    <>
      <div className="container-layout">
        <div className="layout">
          <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
          <div className="flex-1 flex flex-col ">
            <Header />
            <main className="flex-1 overflow-y-auto bg-transparent">
              <div className="p-6 space-y-6 ">
                {currentPage === "dashboard" && <Dashboard />}
                {currentPage === "add" && <AddSpecies />}
                {currentPage === "list" && <SpeciesTable />}
                {currentPage === "analytics" && <Analytics />}
                {currentPage === "create" && <Create />}
                {currentPage === "request" && <ContributorRequest />}
                {currentPage === "gallery" && <Gallery />}
              </div>
              <Footer />
            </main>
          </div>
        </div>

        <div className="block md:hidden py-10">
          <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
      </div>
    </>
  );
}

export default App;
