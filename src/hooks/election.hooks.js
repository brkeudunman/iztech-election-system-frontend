import { useMutation, useQuery } from "react-query";
import { notification } from "antd";
import {
  addElection,
  deleteElection,
  getAllElections,
  getElection,
  updateElection,
} from "../api/election/election.api";

export const useAddElection = (onSuccess) => {
  return useMutation(
    "add-election",
    (data) => {
      return addElection(data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while sending election",
          message: error.message,
        });
      },
    }
  );
};

export const useDeleteElection = (onSuccess, id) => {
  return useMutation(
    "delete-election",
    (data) => {
      return deleteElection(id, data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while deleting election",
          message: error.message,
        });
      },
    }
  );
};

export const useUpdateElection = (onSuccess, id) => {
  return useMutation(
    "update-application",
    (data) => {
      return updateElection(id, data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while updating election",
          message: error.message,
        });
      },
    }
  );
};

export const useGetElection = (id, onSuccess) => {
  return useQuery(
    "get-election",
    () => {
      return getElection(id);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while receiving election",
          message: error.message,
        });
      },
    }
  );
};

export const useGetAllElections = (onSuccess) => {
  return useQuery(
    "get-all-elections",
    () => {
      return getAllElections();
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while receiving elections",
          message: error.message,
        });
      },
    }
  );
};
