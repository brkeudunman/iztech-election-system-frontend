import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppRoutes from "./app";
import PublicRoutes from "./public";
import getToken from "../util/get-token";

const ApplicationRoutes = () => {
  const [userAuthenticationToken, setUserAuthenticationToken] = useState(
    getToken()
  );
  window.addEventListener("storage", () => {
    setUserAuthenticationToken((prevState) => {
      return getToken();
    });
  });
  console.log(userAuthenticationToken);
  return <>{userAuthenticationToken ? <AppRoutes /> : <PublicRoutes />}</>;
};
export default ApplicationRoutes;
