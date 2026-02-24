import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#0d1b2a",
      padding: "15px 0",
      color: "white"
    }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>CivicBridge</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link to="/complaint" style={{ color: "white", textDecoration: "none" }}>Complaint</Link>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;