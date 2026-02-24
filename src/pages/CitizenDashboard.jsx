import { useNavigate } from "react-router-dom";
import CitizenLayout from "../components/CitizenLayout";

function CitizenDashboard() {
  const navigate = useNavigate();

  return (
    <CitizenLayout>
      <h1>Dashboard</h1>

      <div style={{ marginTop: "40px", display: "flex", gap: "30px" }}>
        <button onClick={() => navigate("/raise-issue")}>
          Raise Issue
        </button>

        <button onClick={() => navigate("/track-issue")}>
          Track Issue
        </button>
      </div>
    </CitizenLayout>
  );
}

export default CitizenDashboard;