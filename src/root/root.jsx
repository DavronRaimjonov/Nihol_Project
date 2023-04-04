import { Routes, Route } from "react-router-dom";
import { Home, NotFound, AllUsers, MiddleUser, Login } from "../components";
import MainLayout from "../layout/main-layout";
import { RequireAuth } from "react-auth-kit";

const Root = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath="/login">
            <MainLayout />
          </RequireAuth>
        }
      >
        <Route index element={<Home />} />
        <Route path="all-users" element={<AllUsers />} />
        <Route path="middle-users" element={<MiddleUser />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
