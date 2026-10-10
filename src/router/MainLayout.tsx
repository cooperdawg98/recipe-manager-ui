import { NavLink, Outlet } from "react-router";
import NavigationBar from "../components/navigation/NavigationBar";
import NavigationDrawer from "../components/navigation/NavigationDrawer";
import OnigiriIcon from "../assets/icons/OnigiriIcon";

const MainLayout = () => {
  return (
    <div lang="en">
      <aside>
        <div id="navigation" className="w-full h-14 shadow-lg">
          <div className="hidden lg:flex items-center">
            <NavLink to="/" className="p-4 pt-3">
              <OnigiriIcon additionStyling="hover:underline active:underline decoration-2" />
            </NavLink>
            <NavigationBar />
          </div>
          <div className="flex lg:hidden w-full justify-between items-center">
            <NavLink to="/" className="p-4 pt-3">
              <OnigiriIcon additionStyling="hover:underline active:underline decoration-2" />
            </NavLink>
            <NavigationDrawer />
          </div>
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
