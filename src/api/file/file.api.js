import { post } from "../api";

export const sendFile = (data) => {
  post("/file", data);
};
