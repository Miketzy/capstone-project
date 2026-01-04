function RequestPagination({ currentPage, totalPages, setCurrentPage }) {
  const maxVisiblePages = 10;

  // Calculate start and end of page window
  let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-end gap-2 mt-4 flex-wrap">
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        className="px-3 py-1 border rounded"
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-3 py-1 border rounded ${
            currentPage === page ? "bg-green-500 text-white" : ""
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        className="px-3 py-1 border rounded"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default RequestPagination;
