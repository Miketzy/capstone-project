import { useState, lazy, Suspense } from "react";
import Header from "./admin-components/layout/Header";
import Sidebar from "./admin-components/layout/Sidebar";
import Navbar from "./admin-components/icon-navbar/Navbar";
import Footer from "./admin-components/footer/Footer";

// Lazy-loaded para hindi lahat ng pages ma-bundle/ma-load agad sa unang render.
// Mas mabilis ang initial load, lalo na kung malaki yung Dashboard/Analytics/Gallery.
const Dashboard = lazy(() => import("./admin-components/dashboard/Dashboard"));
const AddSpecies = lazy(() => import("./admin-components/add-species/AddSpecies"));
const SpeciesTable = lazy(() => import("./admin-components/list-species/SpeciesTable"));
const Analytics = lazy(() => import("./admin-components/analytics/Analytics"));
const Create = lazy(() => import("./admin-components/createQuest/Create"));
const ContributorRequest = lazy(() =>
  import("./admin-components/contributorRequest/ContributorRequest")
);
const Gallery = lazy(() => import("./admin-components/gallery/Gallery"));

// Central config: dito mo idadagdag ang bagong page sa isang lugar lang,
// hindi na kailangan mag-add ng bagong `{currentPage === "x" && <X />}` line sa JSX.
const PAGES = {
  dashboard: Dashboard,
  add: AddSpecies,
  list: SpeciesTable,
  analytics: Analytics,
  create: Create,
  request: ContributorRequest,
  gallery: Gallery,
};

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  // Fallback kung may typo o invalid key sa currentPage, hindi babagsak ang UI.
  const ActivePage = PAGES[currentPage] ?? Dashboard;

  return (
    <div className="container-layout">
      <div className="layout">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 overflow-y-auto bg-transparent">
            <div className="p-6 space-y-6">
              <Suspense fallback={<PageLoader />}>
                <ActivePage />
              </Suspense>
            </div>
            <Footer />
          </main>
        </div>
      </div>

      <div className="block md:hidden py-10">
        <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
}

function PageLoader() {
  return (
    <div className="flex items-center justify-center py-20 text-sm text-gray-400">
      Loading...
    </div>
  );
}

export default App;
