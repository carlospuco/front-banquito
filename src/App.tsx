import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./pages/Error404";
import HomeATM from "./pages/HomeATM";
import HomeClient from "./pages/HomeClient";
import HomeUser from "./pages/UserPages/HomeUser";
import Login from "./pages/Login";
import Layout from "./templates/Layout";
import { Location } from "./pages/UserPages/Locations/Location";
import AccountCreateUser from "./pages/AccountCreate/AccountCreateUser";
import TransferUser from "./pages/TransferUser";
import TransferBank from "./pages/TransferBank";
import AccountCreateBank from "./pages/AccountCreate/AccountCreateBank";
import AccountStatement from "./pages/UserPages/AccountStatement/AccountStatementPage";
import Branch from "./pages/ClientPages/Branches/Branch"
import Loader from "./components/molecules/LoadMolecule";
import { AccountBalance } from '@mui/icons-material';
import { AssociatedServiceParam } from "./components/organisms/AssocietesServicesParam/AssociatedServiceParam";

const App = () => {
  return (
      <div>
        <AssociatedServiceParam/>
      </div>
  );
};

const userRoutes = [
  {
    path: "",
    element: <HomeUser />,
  },
  {
    path: "ubicaciones",
    element: <Location />,
  },
  {
    path: "cuenta/crear",
    element: <AccountCreateBank />,
  },
  {
      path: "cuenta/estado",
    element: <AccountStatement />,
  },
  {
    path: "transaccion/transferUsuario",
    element: <TransferUser />,
  },
  {
    path: "transaccion/transferBanco",
    element: <TransferBank />,
  }
];

const clientRoutes = [
  {
      path: "",
    element: <HomeUser />,
  },
  {
    path: "cuenta/crear",
    element: <AccountCreateUser />,
  },
  {
    path: "sucursales",
    element: <Branch />
  }
]

export default App;
