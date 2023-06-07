import { post } from "../api";

export const addElectionDate = (data) => {
  return post("/election-date", data);
};
