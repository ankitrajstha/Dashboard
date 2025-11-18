import { NavbarItems } from "../../constants/navbar";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-72 p-6 bg-black border-r border-gray-800 
          text-white flex flex-col items-center transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:flex
        `}
      >
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 bg-gray-800 rounded-md"
        >
          <X size={22} />
        </button>

        <div className="w-24 h-24 rounded-full border-4 border-gray-300 bg-white text-black flex items-center justify-center text-lg font-semibold mt-10 lg:mt-0">
          Logo
        </div>

        <nav className="mt-10 w-full">
          <ul className="space-y-4 text-gray-300">
            {NavbarItems.map((navbarItem) => {
              const Icon = navbarItem.icon;
              return (
                <li
                  className="p-4 hover:text-black hover:bg-white rounded-2xl transition-colors cursor-pointer"
                  key={navbarItem.id}
                >
                  <div className="flex items-center gap-4">
                    <Icon size={24} strokeWidth={1.8} />
                    {navbarItem.label}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
