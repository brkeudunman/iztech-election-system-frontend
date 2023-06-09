import { download, get, post } from "../api";

export const downloadFile = (id) => {
  return download(`/file/${id}`);
};

export const sendFile = (data) => {
  post("/file", data);
};

export const getFile = (id) => {
  get(`/file/${id}`);
};
