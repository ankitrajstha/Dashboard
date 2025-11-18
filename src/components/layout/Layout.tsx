import { useState } from "react";
import SideBar from "./Sidebar";
import TopBar from "./Topbar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <SideBar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div className="flex-1 flex flex-col">
          <TopBar onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
          <main className="flex-1 overflow-y-auto p-6 bg-black">
            <div>Contentz</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
