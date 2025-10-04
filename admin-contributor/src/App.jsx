import Header from "./admin-components/layout/Header";
import Sidebar from "./admin-components/layout/Sidebar";

function App() {
  return (
    <>
      <div className="container-layout">
        <div className="layout">
          <Sidebar />
          <div className="flex-1 flex flex-col ">
            <Header />
            <footer className="fixed bottom-0 left-0 w-full bg-black text-white text-center py-3 block md:hidden">
              © 2025 Dav-Or BioExplorer. All rights reserved.
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
