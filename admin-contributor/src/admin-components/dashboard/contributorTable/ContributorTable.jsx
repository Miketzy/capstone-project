import React, { useState } from "react";

const contributors = [
  { id: 1, name: "Juan Dela Cruz", role: "Developer", status: "Active" },
  { id: 2, name: "Maria Santos", role: "Designer", status: "Inactive" },
  { id: 3, name: "Pedro Reyes", role: "QA Tester", status: "Active" },
  { id: 4, name: "Ana Lopez", role: "Content Writer", status: "Inactive" },
  { id: 5, name: "Luis Ramos", role: "Developer", status: "Active" },
  { id: 6, name: "Cathy Villanueva", role: "Designer", status: "Inactive" },
  { id: 7, name: "Mark Tan", role: "QA Tester", status: "Active" },
  { id: 8, name: "Elaine Cruz", role: "Content Writer", status: "Inactive" },
  { id: 9, name: "Jorge Santos", role: "Developer", status: "Active" },
  { id: 10, name: "Anna Reyes", role: "Designer", status: "Inactive" },
  { id: 11, name: "Miguel Lopez", role: "QA Tester", status: "Active" },
  {
    id: 12,
    name: "Sophia Dela Cruz",
    role: "Content Writer",
    status: "Inactive",
  },
];

function ContributorTable() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  // Filter contributors based on tab
  const filteredContributors =
    activeFilter === "All"
      ? contributors
      : contributors.filter((c) => c.status === activeFilter);

  // Pagination logic
  const totalPages = Math.ceil(filteredContributors.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentContributors = filteredContributors.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Navigation / Tabs */}
      <div className="flex gap-3 mb-4 justify-center">
        {["All", "Active", "Inactive"].map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setCurrentPage(1); // reset page on filter change
            }}
            className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer ${
              activeFilter === filter
                ? "bg-gradient-to-r from-[#379564] to-[#22573b] text-white shadow-md"
                : "bg-white hover:bg-gradient-to-r hover:from-[#379564] hover:to-[#22573b] hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentContributors.map((contributor) => (
              <tr
                key={contributor.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-2">{contributor.name}</td>
                <td className="px-4 py-2">{contributor.role}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 text-sm rounded-full font-medium ${
                      contributor.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {contributor.status}
                  </span>
                </td>
              </tr>
            ))}
            {currentContributors.length === 0 && (
              <tr>
                <td colSpan="3" className="px-4 py-4 text-center text-gray-500">
                  No contributors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-md font-medium cursor-pointer border transition ${
                currentPage === i + 1
                  ? "bg-gradient-to-r from-[#379564] to-[#22573b] text-white shadow-md"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContributorTable;
