import { post } from "../api";

export const addFile = (data) => {
  post("/file", data);
};
