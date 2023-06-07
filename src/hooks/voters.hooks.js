import { useQuery, useMutation } from "react-query";
import {
  addVoter,
  deleteVoter,
  getAllVoters,
  getVoter,
} from "./../api/voter/voter.api";
import { notification } from "antd";

export const useGetVoter = (id, onSuccess) => {
  return useQuery(
    "get-all-voters",
    () => {
      return getVoter(id);
    },
    {
      onSuccess,
      onError: (error) => {
        if (error.status !== 404) {
          notification.error({
            description: "Error while receiving voter",
            message: error.message,
          });
        }
      },
    }
  );
};

export const useGetVoters = (onSuccess) => {
  return useQuery(
    "get-all-voters",
    () => {
      return getAllVoters();
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while receiving voters",
          message: error.message,
        });
      },
    }
  );
};

export const useAddVoter = (onSuccess) => {
  return useMutation(
    "add-voter",
    (data) => {
      return addVoter(data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while sending voter",
          message: error.message,
        });
      },
    }
  );
};

export const useDeleteVoter = (onSuccess, id) => {
  return useMutation(
    "delete-voter",
    (data) => {
      return deleteVoter(id, data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while deleting voter",
          message: error.message,
        });
      },
    }
  );
};
