import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import Searchbox from "../ui/Searchbox";
import Pagination from "./Pagination";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  isError?: boolean;
}

const Table = <T,>({
  data,
  columns,
  isLoading = false,
  isError = false,
}: TableProps<T>) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, pagination },
    onPaginationChange: setPagination,
    globalFilterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId);
      return String(value || "")
        .toLowerCase()
        .includes(String(filterValue).toLowerCase());
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data.</div>;

  if (!data.length) return <div>No data available.</div>;

  const hasFilteredResults = table.getFilteredRowModel().rows.length > 0;

  return (
    <div className="p-4">
      <Searchbox onSetGlobalFilter={setGlobalFilter} />

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100 text-black">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-left p-2 border-b border-gray-300"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {hasFilteredResults ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50 hover:text-black transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-2 border-b border-gray-300">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="p-4 text-center text-gray-500"
                >
                  No results found for "{globalFilter}".
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {hasFilteredResults && (
          <Pagination
            pageIndex={pagination.pageIndex}
            pageCount={table.getPageCount()}
            pageSize={pagination.pageSize}
            onPageChange={(page) =>
              setPagination((prev) => ({ ...prev, pageIndex: page }))
            }
            onPageSizeChange={(size) =>
              setPagination({ pageIndex: 0, pageSize: size })
            }
          />
        )}
      </div>
    </div>
  );
};

export default Table;
