import { useMutation } from "react-query";
import { login } from "../api/auth/auth";
import { notification } from "antd";

export const useLogin = (onSuccess) => {
  return useMutation((userCredentials)=>{
    return login(userCredentials);
  },
  {
    mutationKey: "login",
    onSuccess: (response) => {
      window.localStorage.setItem("token", response.token);
      window.localStorage.setItem("id", response.id);
      window.localStorage.setItem("userRole", response.userRole ?? "");
      window.dispatchEvent(new Event("storage"));
      onSuccess();
    },
    onError: (response) => {
      notification.error({
        message: "Error: " + response.status,
        description: response.message,
      });
    },
  }
  )  
}

export const useLogOutUserMe = (onSuccess) => {
  return () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("userRole");
    window.dispatchEvent(new Event("storage"));
    onSuccess();
  };
};
