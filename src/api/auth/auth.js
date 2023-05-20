import {post} from "../api";

export const login = (data) => {
  return post("/auth/login", data);
};
