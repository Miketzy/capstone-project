import Header from "./admin-components/layout/Header";
import Sidebar from "./admin-components/layout/Sidebar";
import Navbar from "./admin-components/icon-navbar/Navbar";
import Footer from "./admin-components/footer/Footer";
import { useState } from "react";

function App() {
  const [sidebarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  return (
    <>
      <div className="container-layout">
        <div className="layout">
          <Sidebar
            collapsed={sidebarCollapsed}
            onToggle={() => setSideBarCollapsed(!sidebarCollapsed)}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
          <div className="flex-1 flex flex-col ">
            <Header />
            <main>
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
