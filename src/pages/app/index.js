import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./student/homepage/home";
import AppLayout from "../../common/layout/app/app.layout";
import Candidates from "./student/candidates/candidates";
import VotePage from "./student/vote/vote";
import CandidateshipPage from "./student/candidateship/candidateship";

const AppRoutes = ({ user }) => {
  return (
    <AppLayout user={user}>
      <Routes>
        <Route exact path="/app" element={<Homepage user={user} />} />
        <Route exact path="/app/calendar" element={<Homepage user={user} />} />
        <Route exact path="/app/candidates" element={<Candidates />} />
        <Route
          exact
          path="/app/candidateship"
          element={<CandidateshipPage user={user} />}
        />
        <Route exact path="/app/results" element={<Homepage user={user} />} />
        <Route exact path="/app/vote" element={<VotePage user={user} />} />
        <Route exact path="*" element={<Navigate to={"/app"} />} />
      </Routes>
    </AppLayout>
  );
};

export default AppRoutes;
