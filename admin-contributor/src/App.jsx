import Header from "./admin-components/layout/Header";
import Sidebar from "./admin-components/layout/Sidebar";
import Navbar from "./admin-components/icon-navbar/Navbar";
import Footer from "./admin-components/footer/Footer";
import { useState } from "react";
import Dashboard from "./admin-components/dashboard/Dashboard";
import AddSpecies from "./admin-components/add-species/AddSpecies";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  return (
    <>
      <div className="container-layout">
        <div className="layout">
          <Sidebar />
          <div className="flex-1 flex flex-col ">
            <Header />
            <main className="flex-1 overflow-y-auto bg-transparent">
              <div className="p-6 space-y-6 ">
                {currentPage === "dashboard" && <Dashboard />}
                {currentPage === "addspecies" && <AddSpecies />}
              </div>
              <Footer />
            </main>
          </div>
        </div>

        <div className="block md:hidden">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
