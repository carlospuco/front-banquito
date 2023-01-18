import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error404 from "./pages/Error404"
import HomeATM from "./pages/HomeATM"
import HomeClient from "./pages/HomeClient"
import HomeUser from "./pages/HomeUser"
import Login from "./pages/Login"
import Layout from "./templates/Layout"
import AccountCreateUser from "./pages/AccountCreateUser"
import AccountCreateBank from "./pages/AccountCreateBank"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="user" element={<HomeUser />} />
          <Route path="user/account/new" element={<AccountCreateUser />} />
          <Route path="client" element={<HomeClient />} />
          <Route path="client/account/new" element={<AccountCreateBank />} />
          <Route path="atm" element={<HomeATM />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
