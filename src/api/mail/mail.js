import { getMail } from "../api";

export const sendAnnoucementMail = (subject, receiver) => {
  return getMail(
    `/email/send-announce?receiver=${receiver}&subject=${subject}`,
    subject,
    receiver
  );
};
export const sendApplicationStatus = (subject, receiver) => {
  return getMail(
    `/email/send-application-status?receiver=${receiver}&subject=${subject}`
  );
};
export const sendCandidatesMail = (subject, receiver) => {
  return getMail(
    `/email/send-candidates-mail?receiver=${receiver}&subject=${subject}`
  );
};
