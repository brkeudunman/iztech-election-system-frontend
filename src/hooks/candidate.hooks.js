import { useQuery } from "react-query";
import { getAllCandidates } from "./../api/candidate/candidate.api";
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
