import { useQuery } from "react-query";
import { getAllVoters, getVoter } from "./../api/voter/voter.api";
import { notification } from "antd";

export const useGetVoter = (onSuccess) => {
  return useQuery(
    "get-all-voters",
    (id) => {
      return getVoter(id);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while receiving voter",
          message: error.message,
        });
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
