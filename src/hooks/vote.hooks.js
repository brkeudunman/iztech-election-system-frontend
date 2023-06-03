import { notification } from "antd";
import { useMutation, useQuery } from "react-query";
import { addVote, getAllVotes, getVote } from "../api/vote/vote.api";

export const useGetAllVotes = (onSuccess) => {
  return useQuery(
    "get-all-votes",
    () => {
      return getAllVotes();
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while receiving votes",
          message: error.message,
        });
      },
    }
  );
};

export const useGetVote = (onSuccess) => {
  return useQuery(
    "get-vote",
    (id) => {
      return getVote(id);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while receiving vote",
          message: error.message,
        });
      },
    }
  );
};

export const useAddVote = (onSuccess, id) => {
  return useMutation(
    "add-vote",
    (data) => {
      return addVote(id, data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while sending vote",
          message: error.message,
        });
      },
    }
  );
};
