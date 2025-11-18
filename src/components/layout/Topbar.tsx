import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

interface TopbarProps {
  onToggleSidebar: () => void;
}

const Topbar = ({ onToggleSidebar }: TopbarProps) => {
  const { pathname } = useLocation();

  return (
    <nav className="h-14 bg-black border-b border-gray-800 px-4 flex items-center justify-between text-white">
      <div className="flex items-center gap-1">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 hover:bg-gray-800 rounded-md"
        >
          <Menu size={24} />
        </button>

        <h1 className="text-lg font-semibold">
          {[
            pathname === "/"
              ? "Home"
              : pathname.replace("/", "").replace(/^./, (c) => c.toUpperCase()),
          ]}
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="w-9 h-9 rounded-full overflow-hidden cursor-pointer">
          <img
            src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=900&auto=format&fit=crop&q=60"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
