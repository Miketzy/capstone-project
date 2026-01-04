import React from "react";

function Paginations({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="flex justify-end items-center gap-2 mt-4">
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        className="px-3 py-1 border rounded-md hover:bg-gray-100"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 border rounded-md ${
            currentPage === i + 1
              ? "bg-green-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        className="px-3 py-1 border rounded-md hover:bg-gray-100"
      >
        Next
      </button>
    </div>
  );
}

export default Paginations;
