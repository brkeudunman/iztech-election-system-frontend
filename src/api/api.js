import axios from "axios";
import getToken from "../util/get-token";

const config = {
    apiUrl:process.env.REACT_APP_API_URL
}

export const get = async (location) => {
  const token = getToken();
  return axios
    .get(
      `${config.apiUrl}${location}`,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : null
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error.response ? error.response.data : error;
    });
};

export const post = async (location, body) => {
  const token = getToken();
  return axios
    .post(
      `${config.apiUrl}${location}`,
      body,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : null
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error.response ? error.response.data : error;
    });
};

export const put = async (location, body) => {
  const token = getToken();
  return axios
    .put(
      `${config.apiUrl}${location}`,
      body,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : null
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error.response ? error.response.data : error;
    });
};

export const del = async (location) => {
  const token = getToken();
  return axios
    .delete(
      `${config.apiUrl}${location}`,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : null
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error.response ? error.response.data : error;
    });
};
