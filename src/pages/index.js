import React, { useEffect, useState } from "react";
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

  return <>{true ? <AppRoutes /> : <PublicRoutes />}</>;
};
export default ApplicationRoutes;
