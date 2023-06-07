import { useMutation } from "react-query";
import { addElectionDate } from "../api/election-date/election-date.api";
import { notification } from "antd";

export const useAddElectionDate = (onSuccess) => {
  return useMutation(
    "add-election-date",
    (data) => {
      return addElectionDate(data);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while adding election date",
          message: error.message,
        });
      },
    }
  );
};
