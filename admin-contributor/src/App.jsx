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
          </div>
        </div>

        <div className="flex flex-col">
          <footer className="w-full bg-black text-white text-center py-10 px-6 ">
            © 2025 Dav-Or BioExplorer. All rights reserved.
          </footer>
          <footer className="w-full bg-black text-white text-center py-3 ">
            © 2025 Dav-Or BioExplorer. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
