import { useLocation, useNavigate } from "react-router-dom";
import CitizenLayout from "../components/CitizenLayout";

function IssueSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const issueId = location.state?.issueId;

  return (
    <CitizenLayout>
      <h2 style={{ color: "green" }}>✔ Issue Reported Successfully</h2>

      <p style={{ marginTop: "20px" }}>
        Your Issue ID:
      </p>

      <h3 style={{ marginBottom: "30px" }}>{issueId}</h3>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </CitizenLayout>
  );
}

export default IssueSuccess;