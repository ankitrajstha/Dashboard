import { Menu } from "lucide-react";

interface TopbarProps {
  onToggleSidebar: () => void;
}

const Topbar = ({ onToggleSidebar }: TopbarProps) => {
  return (
    <nav className="h-14 bg-black border-b border-gray-800 px-4 flex items-center justify-between text-white">
      <div className="flex items-center gap-1">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 hover:bg-gray-800 rounded-md"
        >
          <Menu size={24} />
        </button>

        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer">
          <div className="w-5 h-5 text-gray-300" />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
