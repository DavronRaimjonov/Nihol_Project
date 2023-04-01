import { Routes, Route } from "react-router-dom";
import { Home, NotFound, AllUsers, MiddleUser, Login } from "../components";
import PrivateRoot from "../hooks/private-root/private-root";
import MainLayout from "../layout/main-layout";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<PrivateRoot />}>
          <Route path="all-users" element={<AllUsers />} />
          <Route path="middle-users" element={<MiddleUser />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
