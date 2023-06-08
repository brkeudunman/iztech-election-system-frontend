import axios from "axios";
import getToken from "../util/get-token";
const { REACT_APP_API_URL } = process.env;


export const get = async (location) => {
  const token = getToken();
  return axios
    .get(
      `${REACT_APP_API_URL}${location}`,
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
      `${REACT_APP_API_URL}${location}`,
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
      `${REACT_APP_API_URL}${location}`,
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
      `${REACT_APP_API_URL}${location}`,
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
