import { get, post, del, put } from "../api";

export const getAllPersonnels = () => get("/personnel");
export const getPersonnel = (id) => get(`/personnel/${id}`);
export const addPersonnel = (data) => post(`/personnel`, data);
export const updatePersonnel = (id, data) => put(`/personnel/${id}`, data);
export const deletePersonnel = (id) => del(`/personnel/${id}`);
