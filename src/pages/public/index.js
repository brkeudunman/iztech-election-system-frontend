import { Route, Routes } from "react-router-dom";
import Home from "./homepage/home";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};
export default PublicRoutes;
