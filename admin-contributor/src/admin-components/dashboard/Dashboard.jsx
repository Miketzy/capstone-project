import React from "react";
import VertebratesCard from "./vertebratesCard/VertebratesCard";

function Dashboard() {
  return (
    <>
      <div>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-black px-5 py-2 rounded-xl hover:bg-green-70 transition">
            Vertebrates
          </button>
          <button className="bg-white text-black px-5 py-2 rounded-xl hover:bg-green-70 transition">
            Invertebrates
          </button>
        </div>
        <VertebratesCard />
      </div>
    </>
  );
}

export default Dashboard;
