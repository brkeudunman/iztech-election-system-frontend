import { post } from "../api";
export const getFile = (id) => {
  post(`/file/${id}`);
};

export const sendFile = (data) => {
  post("/file", data);
};
