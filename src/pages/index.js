import React, { useEffect, useState } from "react";
import AppRoutes from "./app";
import PublicRoutes from "./public";
import getToken from "../util/get-token";

const ApplicationRoutes = () => {
  const [user, setUser] = useState();

  const [userAuthenticationToken, setUserAuthenticationToken] = useState(
    getToken()
  );

  window.addEventListener("storage", () => {
    setUserAuthenticationToken((prevState) => {
      return getToken();
    });
  });

  useEffect(() => {
    if (userAuthenticationToken) {
      setUser({
        id: window.localStorage.getItem("id"),
        name: window.localStorage.getItem("name"),
        surname: window.localStorage.getItem("surname"),
      });
    }
  }, [userAuthenticationToken]);

  return (
    <>
      {userAuthenticationToken && user ? (
        <AppRoutes user={user} />
      ) : (
        <PublicRoutes />
      )}
    </>
  );
};
export default ApplicationRoutes;
