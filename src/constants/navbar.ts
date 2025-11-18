import { House, HardDrive } from "lucide-react";

export interface NavbarItems {
  id: string;
  label: string;
  icon: React.ElementType;
  path: string;
}

export const NavbarItems: NavbarItems[] = [
  { id: "home", label: "Home", icon: House, path: "/" },
  { id: "data", label: "Data", icon: HardDrive, path: "/data" },
];
