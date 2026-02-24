import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [isPolitician, setIsPolitician] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Store user temporarily
    const userData = {
      name,
      email,
      role: isPolitician ? "politician" : "citizen",
    };

    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect based on role
    if (isPolitician) {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">

      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="brand-content">
          <img src={logo} alt="CivicBridge Logo" className="logo" />
          <h1>CivicBridge</h1>
          <p>Bridging Citizens and Leaders for Better Governance</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div className="login-card">

          <h2>{isPolitician ? "Politician Login" : "Citizen Login"}</h2>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
          </form>

          {/* Bottom Role Switch */}
          <p className="alt-login">
            {isPolitician
              ? "Are you a Citizen? "
              : "Are you a Politician? "}
            <span onClick={() => setIsPolitician(!isPolitician)}>
              Login here
            </span>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Login;