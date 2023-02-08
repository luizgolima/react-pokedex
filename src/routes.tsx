import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRouter;
