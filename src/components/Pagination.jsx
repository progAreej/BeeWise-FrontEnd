import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center mt-8 space-x-2">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="py-2 px-4 rounded bg-gray-200 text-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        <FaArrowLeft />
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`py-2 px-4 mx-1 rounded ${currentPage === index + 1 ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="py-2 px-4 rounded bg-gray-200 text-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
