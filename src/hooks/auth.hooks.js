import { useMutation } from "react-query";
import { login } from "../api/auth/auth";
import { notification } from "antd";

export const useLogin = (onSuccess) => {
  return useMutation(
    (userCredentials) => {
      return login(userCredentials);
    },
    {
      mutationKey: "login",
      onSuccess: (response) => {
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("id", response.id);
        window.localStorage.setItem("userRole", response.userRole ?? "");
        window.localStorage.setItem("name", response.name ?? "");
        window.localStorage.setItem("surname", response.surname ?? "");
        window.dispatchEvent(new Event("storage"));
        onSuccess();
      },

      onError: (response) => {
        if (response.status === 404 || response.status === 401) {
          notification.error({
            description: "Email or password is invalid.",
          });
        }

        console.log(response);
      },
    }
  );
};

export const useLogOutUserMe = (onSuccess) => {
  return () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("userRole");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("surname");
    window.dispatchEvent(new Event("storage"));
    onSuccess();
  };
};
