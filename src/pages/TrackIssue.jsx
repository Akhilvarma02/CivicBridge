import { useState } from "react";
import CitizenLayout from "../components/CitizenLayout";

function TrackIssue() {
  const [issueId, setIssueId] = useState("");
  const [issueData, setIssueData] = useState(null);

  const handleTrack = () => {
    const data = localStorage.getItem(issueId);

    if (data) {
      setIssueData(JSON.parse(data));
    } else {
      alert("Issue Not Found");
    }
  };

  return (
    <CitizenLayout>
      <h2>Track Issue</h2>

      <input
        type="text"
        placeholder="Enter Issue ID"
        value={issueId}
        onChange={(e) => setIssueId(e.target.value)}
      />

      <button onClick={handleTrack}>Track</button>

      {issueData && (
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px"
        }}>
          <div>Submitted</div>
          <div>In Review</div>
          <div>Resolved</div>
        </div>
      )}
    </CitizenLayout>
  );
}

export default TrackIssue;