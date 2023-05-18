export const useLogOutUserMe = (onSuccess) => {
  return () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("userRole");
    window.dispatchEvent(new Event("storage"));
    onSuccess();
  };
};
