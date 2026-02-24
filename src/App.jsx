import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import CitizenDashboard from "./pages/CitizenDashboard";
import RaiseIssue from "./pages/RaiseIssue";
import TrackIssue from "./pages/TrackIssue";
import IssueSuccess from "./pages/IssueSuccess";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>

        {/* Default Page → Login */}
        <Route path="/" element={<Login />} />

        {/* Optional Register */}
        <Route path="/register" element={<Register />} />

        {/* Citizen Flow */}
        <Route path="/dashboard" element={<CitizenDashboard />} />
        <Route path="/raise-issue" element={<RaiseIssue />} />
        <Route path="/track-issue" element={<TrackIssue />} />
        <Route path="/issue-success" element={<IssueSuccess />} />

        {/* Politician/Admin Flow */}
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;