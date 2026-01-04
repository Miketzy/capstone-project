import React, { useState } from "react";
import SearchBar from "./searchbar/Searchbar";
import Filters from "./filter/Filters";
import SearchBar from "./table/Table";
import Table from "./table/Table";
import Paginations from "./pagination/Paginations";

const speciesData = [
  {
    id: 1,
    name: "Lion",
    classification: "Mammal",
    category: "Carnivore",
    status: "Vulnerable",
  },
  {
    id: 2,
    name: "Tiger",
    classification: "Mammal",
    category: "Carnivore",
    status: "Endangered",
  },
  {
    id: 3,
    name: "Elephant",
    classification: "Mammal",
    category: "Herbivore",
    status: "Endangered",
  },
  {
    id: 4,
    name: "Eagle",
    classification: "Bird",
    category: "Predator",
    status: "Least Concern",
  },
  {
    id: 5,
    name: "Shark",
    classification: "Fish",
    category: "Predator",
    status: "Vulnerable",
  },
  {
    id: 6,
    name: "Frog",
    classification: "Amphibian",
    category: "Insectivore",
    status: "Least Concern",
  },
  {
    id: 7,
    name: "Penguin",
    classification: "Bird",
    category: "Carnivore",
    status: "Near Threatened",
  },
  {
    id: 8,
    name: "Crocodile",
    classification: "Reptile",
    category: "Predator",
    status: "Least Concern",
  },
  {
    id: 9,
    name: "Giraffe",
    classification: "Mammal",
    category: "Herbivore",
    status: "Vulnerable",
  },
  {
    id: 10,
    name: "Panda",
    classification: "Mammal",
    category: "Herbivore",
    status: "Vulnerable",
  },
  {
    id: 11,
    name: "Kangaroo",
    classification: "Mammal",
    category: "Herbivore",
    status: "Least Concern",
  },
  {
    id: 12,
    name: "Cheetah",
    classification: "Mammal",
    category: "Carnivore",
    status: "Vulnerable",
  },
];

function SpeciesTable() {
  const [search, setSearch] = useState("");
  const [filterClassification, setFilterClassification] =
    useState("All Species");
  const [filterCategory, setFilterCategory] = useState("All Categories");
  const [filterStatus, setFilterStatus] = useState("All Statuses");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // Filter items
  const filteredItems = speciesData.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterClassification === "All Species" ||
        item.classification === filterClassification) &&
      (filterCategory === "All Categories" ||
        item.category === filterCategory) &&
      (filterStatus === "All Statuses" || item.status === filterStatus)
    );
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <SearchBar search={search} setSearch={setSearch} />
        <Filters
          filterClassification={filterClassification}
          setFilterClassification={setFilterClassification}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
      </div>

      {/* Table */}
      <Table
        items={paginatedItems}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />

      {/* Pagination */}
      <Paginations
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default SpeciesTable;
