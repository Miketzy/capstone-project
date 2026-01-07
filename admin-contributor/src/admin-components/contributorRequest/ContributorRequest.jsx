import React, { useState } from "react";
import RequestTable from "./requestTable/RequestTable";
import RequestPagination from "./requestpagenation/RequestPagination";
import RequesttSearchBar from "./requestsearchbar/RequesttSearchBar";

const requestData = [
  { id: 1, name: "Juan Dela Cruz", species: "Lion", status: "Pending" },
  { id: 2, name: "Maria Santos", species: "Tiger", status: "Pending" },
  { id: 3, name: "Pedro Reyes", species: "Elephant", status: "Approved" },
  { id: 4, name: "Ana Lopez", species: "Eagle", status: "Rejected" },
  { id: 5, name: "Luis Ramos", species: "Shark", status: "Pending" },
  { id: 6, name: "Cathy Villanueva", species: "Frog", status: "Pending" },
  { id: 7, name: "Ramon Cruz", species: "Giraffe", status: "Approved" },
  { id: 8, name: "Liza Moreno", species: "Penguin", status: "Pending" },
  { id: 9, name: "Oscar Dela Rosa", species: "Bear", status: "Rejected" },
  { id: 10, name: "Nina Valdez", species: "Wolf", status: "Pending" },
  { id: 11, name: "Mark Tan", species: "Dolphin", status: "Approved" },
  { id: 12, name: "Ella Rivera", species: "Owl", status: "Pending" },
];

function ContributorRequest() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredItems = requestData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.species.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Search */}
      <RequesttSearchBar search={search} setSearch={setSearch} />

      {/* Table */}
      <RequestTable items={paginatedItems} />

      {/* Pagination */}
      {totalPages > 1 && (
        <RequestPagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default ContributorRequest;
