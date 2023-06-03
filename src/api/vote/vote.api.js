import { get, post } from "../api";

export const getAllVotes = () => get("/vote");
export const getVote = (id) => get(`/vote/${id}`);
export const addVote = (id, data) => post(`/vote/${id}`, data);
