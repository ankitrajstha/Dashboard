import SideBar from "./Sidebar";
import TopBar from "./Topbar";

const Layout = () => {
  return (
    <>
      <div className="flex h-screen bg-black/90 overflow-hidden">
        <SideBar />
        <div className="flex-1 flex flex-col bg-fuchsia-100">
          <TopBar />
          <main className="flex-1 overflow-y-auto p-6">
            <div>Contentz</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
