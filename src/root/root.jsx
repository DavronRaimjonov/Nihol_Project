import { Routes, Route } from "react-router-dom";
import { Home, NotFound } from "../components";
import MainLayout from "../layout/main-layout";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
