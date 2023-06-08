import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./student/homepage/home";
import AppLayout from "../../common/layout/app/app.layout";
import Candidates from "./student/candidates/candidates";
import VotePage from "./student/vote/vote";
import CandidateshipPage from "./student/candidateship/candidateship";
import Calendar from "./student/calendar/calendar";
import Results from "./student/results/results";
import ElectionStaff from "./student/election-staff/election-staff";
import AssignPersonelPage from "./student/assign-personnel/assign-personnel";

const AppRoutes = ({ user }) => {
  return (
    <AppLayout user={user}>
      <Routes>
        <Route exact path="/app" element={<Homepage user={user} />} />
        <Route exact path="/app/calendar" element={<Calendar user={user} />} />
        <Route exact path="/app/candidates" element={<Candidates />} />
        <Route
          exact
          path="/app/candidateship"
          element={<CandidateshipPage user={user} />}
        />
        <Route exact path="/app/results" element={<Results />} />
        <Route exact path="/app/staff" element={<ElectionStaff />} />
        <Route exact path="/app/assign-personnel" element={<AssignPersonelPage />} />
        <Route exact path="/app/vote" element={<VotePage user={user} />} />
        <Route exact path="*" element={<Navigate to={"/app"} />} />
      </Routes>
    </AppLayout>
  );
};

export default AppRoutes;
