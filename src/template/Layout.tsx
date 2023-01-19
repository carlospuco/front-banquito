import { Outlet } from "react-router-dom";
import Topnav from "../components/molecules/Topnav";

interface TopnavProps {
  isLogged: boolean;
}

const Layout = ({ isLogged }: TopnavProps) => {
  return (
    <>
      <Topnav isLogged={isLogged} />
      <Outlet />
    </>
  );
};

export default Layout;
