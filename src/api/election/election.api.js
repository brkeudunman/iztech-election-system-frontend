import { get, post, del, put } from "../api";

export const getAllElections = () => get("/election");
export const getElection = (id) => get(`/election/${id}`);
export const addElection =  (data) => post(`/election`, data);
export const updateElection = (id, data) => put(`/election/${id}`, data);
export const deleteElection = (id) => del(`/election/${id}`);
