import { useQuery } from "react-query";
import { getElectionResult } from "../api/election-result/election-result.api";
import { notification } from "antd";

export const useGetElectionResult = (id, onSuccess) => {
  return useQuery(
    "get-election",
    () => {
      return getElectionResult(id);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while receiving election results",
          message: error.message,
        });
      },
    }
  );
};
