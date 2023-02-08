import { Route, Routes } from "react-router-dom";
import { Error404, Home } from "./pages";

const AppRouter = () => (
  <Routes>
    <Route path="*" element={<Error404 />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRouter;
