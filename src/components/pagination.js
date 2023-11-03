import React, { useState, useEffect } from "react";

function Pagination({ items, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={goToPrevPage}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        &larr; {/* Left Arrow */}
      </button>
      <span className="page-number">{currentPage}</span>
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        &rarr; {/* Right Arrow */}
      </button>
    </div>
  );
}

export default Pagination;
