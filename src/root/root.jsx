import { Routes, Route } from "react-router-dom";
import { NotFound, Login } from "../components";
import MainLayout from "../layout/main-layout";
import { RequireAuth } from "react-auth-kit";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "../utils/locale/eng";
import { ru } from "../utils/locale/rus";
import { uzKrill } from "../utils/locale/uzkrill";
import { uzLotin } from "../utils/locale/uzb";
import { useSelector } from "react-redux";
import { path } from "../utils/path";
const Root = () => {
  const { lang } = useSelector((state) => state.locale);
  i18next.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      rus: { translation: ru },
      uzKrill: { translation: uzKrill },
      uzLotin: { translation: uzLotin },
    },
    lng: lang,
    fallbackLng: lang,
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
        {path.map(({ path, id, Componenet }) => (
          <Route key={id} path={path} element={<Componenet />} />
        ))}
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
