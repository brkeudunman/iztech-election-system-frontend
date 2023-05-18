import React, { useEffect, useState } from "react";
import AppRoutes from "./app";
import PublicRoutes from "./public";
import getToken from "../util/get-token";
import { useNavigate } from "react-router-dom";

const ApplicationRoutes = () => {
  const navigate = useNavigate();
  const [userAuthenticationToken, setUserAuthenticationToken] = useState(
    //getToken()
    true
  );
  window.addEventListener("storage", () => {
    setUserAuthenticationToken((prevState) => {
      return getToken();
    });
  });
  useEffect(()=>{
    if(userAuthenticationToken){
      navigate("/app")
    }
  },[])
  console.log(userAuthenticationToken);
  return <>{userAuthenticationToken ? <AppRoutes /> : <PublicRoutes />}</>;
};
export default ApplicationRoutes;
