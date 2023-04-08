import { Routes, Route } from "react-router-dom";
import {
  Home,
  NotFound,
  AllUsers,
  MiddleUser,
  Login,
  BuildingControl,
} from "../components";
import MainLayout from "../layout/main-layout";
import { RequireAuth } from "react-auth-kit";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "../utils/locale/eng";
import { ru } from "../utils/locale/rus";
import { uzKrill } from "../utils/locale/uzkrill";
import { uzLotin } from "../utils/locale/uzb";
const Root = () => {
  i18next.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      rus: { translation: ru },
      uzKrill: { translation: uzKrill },
      uzLotin: { translation: uzLotin },
    },
    lng: "en",
    fallbackLng: "en",
  });
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
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
