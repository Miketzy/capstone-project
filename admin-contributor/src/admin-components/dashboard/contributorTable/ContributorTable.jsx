import React, { useState, useMemo } from "react";
import ContributorPagination from "./ContributorPagination";

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

function ContributorTable({ entriesPerPage = 5 }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter by status + search (memoized so it only recomputes when inputs change)
  const filteredContributors = useMemo(() => {
    return contributors.filter((c) => {
      const matchesStatus =
        activeFilter === "All" || c.status === activeFilter;
      const matchesSearch = c.name
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  // Pagination logic
  const totalPages = Math.max(
    1,
    Math.ceil(filteredContributors.length / entriesPerPage)
  );
  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentContributors = useMemo(
    () => filteredContributors.slice(startIndex, startIndex + entriesPerPage),
    [filteredContributors, startIndex, entriesPerPage]
  );

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Tabs + Search */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
        <div className="flex gap-3" role="tablist" aria-label="Filter contributors by status">
          {["All", "Active", "Inactive"].map((filter) => (
            <button
              key={filter}
              role="tab"
              aria-pressed={activeFilter === filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-green-600 text-white"
                  : "bg-white border hover:bg-green-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name..."
          aria-label="Search contributors by name"
          className="px-3 py-2 border rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-4 py-2 text-left">Name</th>
              <th scope="col" className="px-4 py-2 text-left">Role</th>
              <th scope="col" className="px-4 py-2 text-left">Status</th>
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

      {/* Results count */}
      {filteredContributors.length > 0 && (
        <p className="text-sm text-gray-500 text-center sm:text-left">
          Showing {startIndex + 1}-
          {Math.min(startIndex + entriesPerPage, filteredContributors.length)}{" "}
          of {filteredContributors.length} contributors
        </p>
      )}

      {/* Pagination Component */}
      {totalPages > 1 && (
        <ContributorPagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default ContributorTable;