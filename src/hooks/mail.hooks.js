import { useQuery } from "react-query";
import { sendAnnoucementMail } from "../api/mail/mail";
import { notification } from "antd";

export const useSendElectionAnnouncement = (onSuccess, receiver, subject) => {
  return useQuery(
    ["get-election-announcement", receiver, subject],
    (receiver, subject) => {
      return sendAnnoucementMail(receiver, subject);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: "Error while sending election announcement",
          message: error.message,
        });
      },
    }
  );
};
