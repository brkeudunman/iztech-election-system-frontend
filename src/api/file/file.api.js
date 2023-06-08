import { get, post } from "../api";

export const getFile = (id) => {
  get(`/file/${id}`);
};

export const sendFile = (data) => {
  post("/file", data);
};

export const getCoverLetter = (path) => {
  get(`/file/cover-letter/${path}`)
}