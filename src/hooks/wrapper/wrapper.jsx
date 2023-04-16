import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux";
import { ConfigProvider } from "antd";
import ru_RU from "antd/locale/ru_RU";
import { AuthProvider } from "react-auth-kit";

const Wrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <ConfigProvider locale={ru_RU}>
        <AuthProvider
          authType={"cookie"}
          authName={"_auth"}
          cookieDomain={window.location.hostname}
          cookieSecure={window.location.protocol === "https:"}
        >
          <Provider store={store}>{children}</Provider>
        </AuthProvider>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default Wrapper;
