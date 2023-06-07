import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./homepage/home";
import PublicLayout from "../../common/layout/public/public.layout";
import Login from "./auth-pages/login";
import Candidates from "./candidates/candidates";
import AddVoter from "./add-voter/add-voter";

const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route exact path="/candidates" element={<Candidates />} />
        <Route exact path="/add-voter" element={<AddVoter />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </PublicLayout>
  );
};
export default PublicRoutes;
