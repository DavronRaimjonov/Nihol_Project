import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Wrapper from "./hooks/wrapper/wrapper";
import "./index.css";
import Root from "./root/root";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Wrapper>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Root />
    </Suspense>
  </Wrapper>
);
