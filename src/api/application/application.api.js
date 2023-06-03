import { get, post, del, put } from "../api";

export const getAllApplications = () => get("/application");
export const getApplication = (id) => get(`/application/${id}`);
export const addApplication = (id, data) => post(`/application/${id}`, data);
export const updateApplication = (id, data) => put(`/application/${id}`, data);
export const deleteApplication = (id) => del(`/application/${id}`);
