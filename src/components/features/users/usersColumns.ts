import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "./users.types";

export const userColumns: ColumnDef<User>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "username", header: "Username" },
  { accessorKey: "email", header: "Email" },
  {
    accessorFn: (row) => `${row.address.street}, ${row.address.city}`,
    id: "address",
    header: "Address",
  },
  {
    accessorFn: (row) => `${row.address.geo.lat}, ${row.address.geo.lng}`,
    id: "geo",
    header: "Geo",
  },
  { accessorKey: "phone", header: "Phone" },
  { accessorKey: "website", header: "Website" },
];
