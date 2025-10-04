import Header from "./admin-components/layout/Header";
import Sidebar from "./admin-components/layout/Sidebar";

function App() {
  return (
    <>
      <div className="container-layout">
        <div className="layout">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <Header />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
