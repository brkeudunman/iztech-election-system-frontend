import { get, post, del, put } from "../api";

export const getAllCandidates = () => get("candidate");
export const getCandidate = (id) => get(`candidate/${id}`);
export const addCandidate = (id, data) => post(`candidate/${id}`, data);
export const updateCandidate = (id, data) => put(`candidate/${id}`, data);
export const deleteCandidate = (id) => del(`candidate/${id}`);
