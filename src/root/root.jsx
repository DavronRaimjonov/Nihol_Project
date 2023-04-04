import { Routes, Route } from "react-router-dom";
import {
  Home,
  NotFound,
  AllUsers,
  MiddleUser,
  Login,
  BuildingControl,
  OrdinaryRooms,
} from "../components";
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
        <Route path="building-control" element={<BuildingControl />} />
        <Route path="building-control/:id" element={<OrdinaryRooms />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
