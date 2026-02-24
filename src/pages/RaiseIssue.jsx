import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CitizenLayout from "../components/CitizenLayout";

function RaiseIssue() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [areaType, setAreaType] = useState("");
  const [town, setTown] = useState("");
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");

  // STEP 1 → Move to Step 2
  const handleNext = () => {
    if (!areaType || !town) {
      alert("Please select area type and enter town name");
      return;
    }
    setStep(2);
  };

  // FINAL SUBMIT
  const handleSubmit = () => {
    if (!issueType || !description) {
      alert("Please select issue type and describe the issue");
      return;
    }

    // Generate Random Issue ID
    const issueId = "CB-" + Math.floor(100000 + Math.random() * 900000);

    const issueData = {
      issueId,
      areaType,
      town,
      issueType,
      description,
      status: "Submitted"
    };

    // Save to localStorage
    localStorage.setItem(issueId, JSON.stringify(issueData));

    // Navigate to Success Page
    navigate("/issue-success", { state: { issueId } });
  };

  return (
    <CitizenLayout>
      <h2>Raise Issue</h2>

      {/* STEP 1 */}
      {step === 1 && (
        <>
          <select
            value={areaType}
            onChange={(e) => setAreaType(e.target.value)}
          >
            <option value="">Select Rural / Urban</option>
            <option value="Rural">Rural</option>
            <option value="Urban">Urban</option>
          </select>

          <input
            type="text"
            placeholder="Enter Your Town"
            value={town}
            onChange={(e) => setTown(e.target.value)}
          />

          <button onClick={handleNext}>Next</button>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <select
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
          >
            <option value="">Select Issue Type</option>
            <option>Road Damage</option>
            <option>Water Supply</option>
            <option>Electricity Problem</option>
            <option>Garbage Collection</option>
            <option>Drainage Issue</option>
            <option>Street Lights</option>
          </select>

          <textarea
            rows="4"
            placeholder="Describe your issue in detail..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button onClick={handleSubmit}>Report Issue</button>
        </>
      )}
    </CitizenLayout>
  );
}

export default RaiseIssue;