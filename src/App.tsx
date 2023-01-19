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

const App = () => {

  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout isLogged={isLogged} user={user} />}>
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
    </ThemeProvider>
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
];

export default App;
