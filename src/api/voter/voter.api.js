import { get, post, del } from "../api";

export const getAllVoters = () => get("/voter");
export const getVoter = (id) => get(`/voter/${id}`);
export const addVoter = (id, data) => post(`/voter/${id}`, data);
export const deleteVoter = (id) => del(`/voter/${id}`);
