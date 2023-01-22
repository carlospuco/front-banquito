import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./pages/ErrorPages/Error404";
import HomeATM from "./pages/ATMPages/HomeATM";
import HomeClient from "./pages/ClientPages/HomeClient";
import HomeUser from "./pages/UserPages/HomeUser";
import Login from "./pages/Login";
import Layout from "./template/Layout";
import { Location } from "./pages/UserPages/Locations/Location";
import { ThemeProvider } from "@mui/material";
import theme from "./style/Theme";
import { useState } from "react";
import AccountCreateUser from "./pages/AccountCreate/AccountCreateUser";
import TransferUser from "./pages/TransferUser";
import TransferBank from "./pages/TransferBank";
import AccountCreateBank from "./pages/AccountCreate/AccountCreateBank";
import AccountStatement from "./pages/UserPages/AccountStatement/AccountStatementPage";
import Branch from "./pages/ClientPages/Branches/Branch"

const App = () => {

  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout isLogged={true} user={{}} />}>
          <Route index element={<Login />} />
          {userRoutes.map((route) => (
            <Route
              key={route.path}
              path={`usuario/${route.path}`}
              element={route.element}
            />
          ))}
          {clientRoutes.map((route) => (
            <Route
              key={route.path}
              path={`cliente/${route.path}`}
              element={route.element}
            />
          ))}
          <Route path="cajero" element={<HomeATM />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
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
