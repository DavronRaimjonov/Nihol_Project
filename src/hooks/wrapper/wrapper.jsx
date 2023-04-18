import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux";
import { ConfigProvider } from "antd";
import ru_RU from "antd/locale/ru_RU";
import { AuthProvider } from "react-auth-kit";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const Wrapper = ({ children }) => {
  const client = new QueryClient();
  return (
    <BrowserRouter>
      <ConfigProvider locale={ru_RU}>
        <AuthProvider
          authType={"cookie"}
          authName={"_auth"}
          cookieDomain={window.location.hostname}
          cookieSecure={window.location.protocol === "https:"}
        >
          <QueryClientProvider client={client}>
            <ReactQueryDevtools />
            <Provider store={store}>{children}</Provider>
          </QueryClientProvider>
        </AuthProvider>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default Wrapper;
