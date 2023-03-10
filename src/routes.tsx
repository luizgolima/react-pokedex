import { Route, Routes } from "react-router-dom";
import { Error404, Favorites, Home } from "./pages";

const AppRouter = () => (
  <Routes>
    <Route path="*" element={<Error404 />} />
    <Route path="/" element={<Home />}></Route>
    <Route path="/favorites" element={<Favorites />} />
  </Routes>
);

export default AppRouter;
