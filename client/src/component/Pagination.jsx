import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <main className="pagination flex flex-row justify-center gap-3 mb-4">
      {pageNumbers.map((number) => (
        <div key={number}>
          <button
            className={`page-item w-12 h-12 flex flex-row justify-center items-center rounded-lg shadow-md shadow-stone-400  ${
              currentPage === number
                ? "bg-[#6065ff] text-white font-extrabold"
                : "bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out hover:scale-110"
            }`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        </div>
      ))}
    </main>
  );
};
export default Pagination;
