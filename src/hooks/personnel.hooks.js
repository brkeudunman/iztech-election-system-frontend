import { notification } from "antd";
import {
  addPersonnel,
  deletePersonnel,
  getAllPersonnels,
  getPersonnel,
  getPersonnelTypes,
  updatePersonnel,
} from "../api/personnel/personnel.api";
import { useMutation, useQuery } from "react-query";

export const useGetPersonnel = (id, onSuccess) => {
  return useQuery(
    "get-personnel",
    () => {
      return getPersonnel(id);
    },
    {
      onSuccess,
      onError: (error) => {
        if (error.status !== 404) {
          notification.error({
            description: "Error while receiving personnel",
            message: error.message,
          });
        }
      },
    }
  );
};

export const useGetPersonnels = (onSuccess) => {
  return useQuery(
    "get-all-personnels",
    () => {
      return getAllPersonnels();
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while receiving all personnels",
          message: error.message,
        });
      },
    }
  );
};

export const useGetPersonnelTypes = (onSuccess) => {
  return useQuery(
    "get-all-types",
    () => {
      return getPersonnelTypes();
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while receiving personnel types",
          message: error.message,
        });
      },
    }
  );
};

export const useAddPersonnel = (onSuccess) => {
  return useMutation(
    "add-personnel",
    (data) => {
      return addPersonnel(data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while sending personnel",
          message: error.message,
        });
      },
    }
  );
};

export const useDeletePersonnel = (onSuccess, id) => {
  return useMutation(
    "delete-personnel",
    (data) => {
      return deletePersonnel(id, data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while deleting personnel",
          message: error.message,
        });
      },
    }
  );
};

export const useUpdatePersonnel = (onSuccess, id) => {
  return useMutation(
    "update-personnel",
    (data) => {
      return updatePersonnel(id, data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while updating personnel",
          message: error.message,
        });
      },
    }
  );
};
