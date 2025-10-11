import UserProfile from "./UserProfile";
import Logo from "./Logo";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
  return (
    <>
      <div className="sidebar hidden md:flex sticky top-0 z-40">
        <div className="sidebar-logo">
          <Logo />
        </div>

        {/*Navigation display a dynamic menu*/}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <SidebarMenu />
        </nav>

        {/*user profile*/}
        <div className="p-4 border-t border-slate-200/50">
          <UserProfile />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
