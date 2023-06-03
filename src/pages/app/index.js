import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./student/homepage/home";
import AppLayout from "../../common/layout/app/app.layout";
import Candidates from "./student/candidates/candidates";

const AppRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route exact path="/app" element={<Homepage />} />
        <Route exact path="/calendar" element={<Homepage />} />
        <Route exact path="/candidates" element={<Candidates />} />
        <Route exact path="/candidateship" element={<Homepage />} />
        <Route exact path="/results" element={<Homepage />} />
        <Route exact path="/vote" element={<Homepage />} />
        <Route exact path="*" element={<Navigate to={"/app"} />} />
      </Routes>
    </AppLayout>
  );
};

export default AppRoutes;
