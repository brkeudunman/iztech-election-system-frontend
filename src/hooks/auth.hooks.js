import { useMutation } from "react-query";
import { post } from "../api/api";
import { login } from "../api/auth/auth";

export const useLogin = (onSuccess) => {
  return useMutation((userCredentials)=>{
    return login(userCredentials);
  },
  {
    mutationKey:"login",
    onSuccess: (response) => {
      console.log(response);
      onSuccess();
    },
    onError: (err) => {
      console.log(err);
    }
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
