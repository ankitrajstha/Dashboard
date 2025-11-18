import React from "react";

interface PaginationProps {
  pageIndex: number;
  pageCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  pageSizeOptions?: number[];
}

const Pagination: React.FC<PaginationProps> = ({
  pageIndex,
  pageCount,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 20, 50],
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (pageCount <= 7) {
      for (let i = 1; i <= pageCount; i++) pages.push(i);
    } else {
      if (pageIndex + 1 <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", pageCount);
      } else if (pageIndex + 1 >= pageCount - 3) {
        pages.push(
          1,
          "...",
          pageCount - 4,
          pageCount - 3,
          pageCount - 2,
          pageCount - 1,
          pageCount
        );
      } else {
        pages.push(
          1,
          "...",
          pageIndex,
          pageIndex + 1,
          pageIndex + 2,
          "...",
          pageCount
        );
      }
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-2">

      <div className="flex items-center gap-2">
        <span className="text-white">Rows per page:</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1 bg-white text-black"
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>


      <div className="flex items-center gap-2 flex-wrap justify-center">
        <button
          onClick={() => onPageChange(pageIndex - 1)}
          disabled={pageIndex === 0}
          className="px-3 py-1 rounded hover:bg-white hover:text-black cursor-pointer disabled:opacity-50"
        >
          Prev
        </button>

        {pages.map((page, idx) =>
          typeof page === "number" ? (
            <button
              key={idx}
              onClick={() => onPageChange(page - 1)}
              className={`px-3 py-1 rounded hover:bg-gray-200 hover:text-black ${
                pageIndex + 1 === page
                  ? "bg-white text-black font-semibold"
                  : "bg-gray-800 text-white"
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={idx} className="px-2 py-1 text-white">
              {page}
            </span>
          )
        )}

        <button
          onClick={() => onPageChange(pageIndex + 1)}
          disabled={pageIndex === pageCount - 1}
          className="px-3 py-1 rounded hover:bg-white hover:text-black cursor-pointer disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
