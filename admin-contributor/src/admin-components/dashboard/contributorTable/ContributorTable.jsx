import React, { useState } from "react";
import ContributorPaginattion from "./ContributorPaginattion";

const contributors = [
  { id: 1, name: "Juan Dela Cruz", role: "Contributor", status: "Active" },
  { id: 2, name: "Maria Santos", role: "Contributor", status: "Inactive" },
  { id: 3, name: "Pedro Reyes", role: "Contributor", status: "Active" },
  { id: 4, name: "Ana Lopez", role: "Contributor", status: "Inactive" },
  { id: 5, name: "Luis Ramos", role: "Contributor", status: "Active" },
  { id: 6, name: "Cathy Villanueva", role: "Contributor", status: "Inactive" },
  { id: 7, name: "Mark Tan", role: "Contributor", status: "Active" },
  { id: 8, name: "Elaine Cruz", role: "Contributor", status: "Inactive" },
  { id: 9, name: "Jorge Santos", role: "Contributor", status: "Active" },
  { id: 10, name: "Anna Reyes", role: "Contributor", status: "Inactive" },
  { id: 11, name: "Miguel Lopez", role: "Contributor", status: "Active" },
  {
    id: 12,
    name: "Sophia Dela Cruz",
    role: "Contributor",
    status: "Inactive",
  },
];

function ContributorTable() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;

  // Filter
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
      {/* Tabs */}
      <div className="flex gap-3 justify-center">
        {["All", "Active", "Inactive"].map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeFilter === filter
                ? "bg-green-600 text-white"
                : "bg-white border hover:bg-green-100"
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
            {currentContributors.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="px-4 py-2">{c.name}</td>
                <td className="px-4 py-2">{c.role}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      c.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}

            {currentContributors.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No contributors found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Component */}
      {totalPages > 1 && (
        <ContributorPaginattion
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default ContributorTable;
