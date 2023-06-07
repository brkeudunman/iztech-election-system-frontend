import { useMutation, useQuery } from "react-query";
import {
  getAllCandidates,
  deleteCandidate,
  updateCandidate,
  getCandidate,
  addCandidate,
} from "./../api/candidate/candidate.api";
import { notification } from "antd";

export const useGetAllCandidates = (onSuccess) => {
  return useQuery(
    "get-all-candidates",
    () => {
      return getAllCandidates();
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while receiving candidates",
          message: error.message,
        });
      },
    }
  );
};

export const useDeleteCandidates = (onSuccess, id) => {
  return useMutation(
    "delete-candiate",
    (data) => {
      return deleteCandidate(id, data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while deleting candidate",
          message: error.message,
        });
      },
    }
  );
};

export const useUpdateCandidate = (onSuccess, id) => {
  return useMutation(
    "update-candidate",
    (data) => {
      return updateCandidate(id, data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while updating candidate",
          message: error.message,
        });
      },
    }
  );
};

export const useGetCandidate = (id, onSuccess) => {
  return useQuery(
    "get-candidate",
    () => {
      return getCandidate(id);
    },
    {
      onSuccess,
      onError: (error) => {
        console.log(error)
        if (error.status !== 404) {
          notification.error({
            description: "Error while receiving candidate",
            message: error.message,
          });
        }
      },
    }
  );
};

export const useAddCandidate = (onSuccess) => {
  return useMutation(
    "add-candidate",
    (data) => {
      return addCandidate(data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while sending candidate",
          message: error.message,
        });
      },
    }
  );
};
