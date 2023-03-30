import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux";
import { ConfigProvider } from "antd";
import ru_RU from "antd/locale/ru_RU";
const Wrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <ConfigProvider locale={ru_RU}>
        <Provider store={store}>{children}</Provider>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default Wrapper;
