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
            <footer className="bottom-0 left-0  w-full h-80 bg-black text-white text-center py-3 ">
              © 2025 Dav-Or BioExplorer. All rights reserved.
            </footer>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="px-6 block md:hidden">
            <footer className="fixed bottom-0 left-0 z-40 w-full bg-white text-black text-center py-3 ">
              © 2025 Dav-Or BioExplorer. All rights reserved.
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
