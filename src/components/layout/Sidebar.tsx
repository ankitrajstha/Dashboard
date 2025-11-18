const Sidebar = () => {
  return (
    <aside className="w-72 p-6 border-r border-gray-800 text-white flex flex-col items-center">
      <div className="w-24 h-24 rounded-full border-4 border-gray-300 bg-white text-black flex items-center justify-center text-lg font-semibold">
        Logo
      </div>

      <nav className="mt-10 w-full">
        <ul className="space-y-4 text-gray-300">
          <li className="hover:text-white transition-colors cursor-pointer">
            Home
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            Data
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
