const Topbar = () => {
  return (
    <nav className="h-14 bg-gray-900 border-b border-gray-800 px-6 flex items-center justify-between text-white">
      <div className="flex items-center gap-4">
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
