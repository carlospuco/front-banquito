import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./pages/Error404";
import HomeATM from "./pages/HomeATM";
import HomeClient from "./pages/HomeClient";
import HomeUser from "./pages/UserPages/HomeUser";
import Login from "./pages/Login";
import Layout from "./templates/Layout";
import { Location } from "./pages/UserPages/Locations/Location";
import AccountStatement from "./pages/UserPages/AccountStatement/AccountStatementPage";
import Branch from "./pages/ClientPages/Branches/Branch"
import AccountCreateUser from "./pages/AccountCreateUser";
import TransferUser from "./pages/TransferUser";
import TransferBank from "./pages/TransferBank";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Login />} />
          {userRoutes.map((route) => (
            <Route
              key={route.path}
              path={`usuario/${route.path}`}
              element={route.element}
            />
          ))}
          <Route path="cliente" element={<HomeClient />} />
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
    element: <AccountCreateUser />,
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
    path: "sucursales",
    element: <Branch />
  }
]

export default App;
