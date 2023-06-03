import { get, post, del, put } from "../api";

export const getAllOrganizations = () => get("/organization");
export const getOrganization = (id) => get(`/organization/${id}`);
export const addOrganization = (id, data) => post(`/organization/${id}`, data);
export const updateOrganization = (id, data) => put(`/organization/${id}`, data);
export const deleteOrganization = (id) => del(`/organization/${id}`);
