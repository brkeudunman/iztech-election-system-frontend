import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./homepage/home";
import PublicLayout from "../../common/layout/public/public.layout";
import Login from "./auth-pages/login";

const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </PublicLayout>
  );
};
export default PublicRoutes;
