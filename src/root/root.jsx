import { Routes, Route } from "react-router-dom";
import { NotFound, Login } from "../components";
import MainLayout from "../layout/main-layout";
import { RequireAuth } from "react-auth-kit";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { useSelector } from "react-redux";
import { path } from "../utils/path";
import { En, Ru, UzKrill, UzLotin } from "../utils/locale";

const Root = () => {
  const { lang } = useSelector((state) => state.locale);
  i18next.use(initReactI18next).init({
    resources: {
      en: { translation: En },
      rus: { translation: Ru },
      uzKrill: { translation: UzKrill },
      uzLotin: { translation: UzLotin },
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
        {path.map(({ path, Componenet, id, hasChild = false, children }) =>
          !hasChild ? (
            <Route path={path} key={id} element={<Componenet />} />
          ) : (
            <Route key={id} path={path} element={<Componenet />}>
              {children.map(
                ({ path, Componenet, id, hasChild = false, children }) => (
                  <Route path={path} key={id} element={<Componenet />} />
                )
              )}
            </Route>
          )
        )}
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
