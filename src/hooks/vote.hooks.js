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

export const useGetVote = (id, onSuccess, onError) => {
  return useQuery(
    "get-vote",
    () => {
      return getVote(id);
    },
    {
      onSuccess,
      onError,
    }
  );
};

export const useAddVote = (onSuccess) => {
  return useMutation(
    "add-vote",
    (data) => {
      return addVote(data);
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
