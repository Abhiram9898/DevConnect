import React from 'react';
import Button from './ui/button'; // ✅ Correct import

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (   
    <div className="flex justify-center mt-10 gap-4 items-center">
      <Button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      <span className="text-gray-700 dark:text-white font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
