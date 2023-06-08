import { notification } from "antd";

import {
  addApplication,
  deleteApplication,
  getAllApplications,
  getApplication,
  updateApplication,
} from "./../api/application/application.api";
import { useMutation, useQuery } from "react-query";

export const useAddApplication = (onSuccess) => {
  return useMutation(
    "add-application",
    (data) => {
      return addApplication(data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while sending application",
          message: error.message,
        });
      },
    }
  );
};

export const useDeleteApplication = (onSuccess, id) => {
  return useMutation(
    "delete-application",
    (data) => {
      return deleteApplication(id, data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while deleting application",
          message: error.message,
        });
      },
    }
  );
};

export const useUpdateApplication = (onSuccess, id) => {
  return useMutation(
    "update-application",
    (data) => {
      return updateApplication(id, data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while updating application",
          message: error.message,
        });
      },
    }
  );
};

export const useGetApplication = (id, onSuccess, onError) => {
  return useQuery(
    "get-application",
    () => {
      return getApplication(id);
    },
    {
      onSuccess,
      onError,
    }
  );
};

export const useGetAllApplications = (onSuccess) => {
  return useQuery(
    "get-all-applications",
    () => {
      return getAllApplications();
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while receiving applications",
          message: error.message,
        });
      },
    }
  );
};
