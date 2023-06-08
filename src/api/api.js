import axios from "axios";
import getToken from "../util/get-token";
import { notification } from "antd";
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
export const getMail = async (location, subject, receiver) => {
  const token = getToken();
  return axios
    .get(
      `${REACT_APP_API_URL}${location}`,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
            data: { subject: subject, receiver: receiver },
          }
        : null
    )
    .then((response) => {
      notification.success({
        message: "Success!",
        description: "Announcement Successfully Sent ",
      });
      return response;
    })
    .catch((error) => {
      notification.error({
        message: "Failure!",
        description: error.response?.data.message,
      });
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
