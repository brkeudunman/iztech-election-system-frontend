import { notification } from "antd";
import { useMutation, useQuery } from "react-query";
import {
  addOrganization,
  deleteOrganization,
  getAllOrganizations,
  getOrganization,
  updateOrganization,
} from "../api/organization/organization.api";

export const useAddOrganization = (onSuccess) => {
  return useMutation(
    "add-organization",
    (data) => {
      return addOrganization(data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while sending organization",
          message: error.message,
        });
      },
    }
  );
};

export const useDeleteOrganization = (onSuccess, id) => {
  return useMutation(
    "delete-organization",
    (data) => {
      return deleteOrganization(id, data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while deleting organization",
          message: error.message,
        });
      },
    }
  );
};

export const useUpdateOrganization = (onSuccess, id) => {
  return useMutation(
    "update-organization",
    (data) => {
      return updateOrganization(id, data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while updating organization",
          message: error.message,
        });
      },
    }
  );
};

export const useGetOrganization = (onSuccess) => {
  return useQuery(
    "get-organization",
    (id) => {
      return getOrganization(id);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while receiving organization",
          message: error.message,
        });
      },
    }
  );
};

export const useGetAllOrganizations = (onSuccess) => {
  return useQuery(
    "get-all-organizations",
    () => {
      return getAllOrganizations();
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while receiving organizations",
          message: error.message,
        });
      },
    }
  );
};
