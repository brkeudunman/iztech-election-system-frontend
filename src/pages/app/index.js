import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./homepage/home";
import AppLayout from "../../common/layout/app/app.layout";

const AppRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route exact path="/app" element={<Homepage />} />
        <Route exact path="/" element={<Navigate to={"/app"} />} />
      </Routes>
    </AppLayout>
  );
};

export default AppRoutes;
