function RequestPagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="flex justify-end gap-2 mt-4 flex-wrap">
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        className="px-3 py-1 border rounded"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 border rounded ${
            currentPage === i + 1 ? "bg-green-500 text-white" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        className="px-3 py-1 border rounded"
      >
        Next
      </button>
    </div>
  );
}

export default RequestPagination;
