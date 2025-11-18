import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import Searchbox from "../ui/Searchbox";
import Pagination from "./Pagination";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const defaultData: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 4, name: "Bob Brown", email: "bob@example.com", role: "Moderator" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
];

const Table: React.FC = () => {
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "role", header: "Role" },
    ],
    []
  );

  const table = useReactTable({
    data: defaultData,
    columns,
    state: { globalFilter },
    globalFilterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId);

      const stringValue =
        value !== undefined && value !== null ? String(value) : "";

      return stringValue.toLowerCase().includes(filterValue.toLowerCase());
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

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
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 hover:text-black transition-colors"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2 border-b border-gray-300">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          pageIndex={table.getState().pagination.pageIndex}
          pageCount={table.getPageCount()}
          pageSize={table.getState().pagination.pageSize}
          onPageChange={(page) => table.setPageIndex(page)}
          onPageSizeChange={(size) => table.setPageSize(size)}
        />
      </div>
    </div>
  );
};

export default Table;
