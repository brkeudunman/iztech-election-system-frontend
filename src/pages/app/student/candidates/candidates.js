import React from "react";
import { useGetAllCandidates } from "../../../../hooks/candidate.hooks";

const Candidates = () => {
  const { data: candidates } = useGetAllCandidates();
  console.log(candidates)
  return <div>Candidates</div>;
};

export default Candidates;
