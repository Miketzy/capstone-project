import React from "react";

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
      </div>
    </>
  );
}

export default Dashboard;
