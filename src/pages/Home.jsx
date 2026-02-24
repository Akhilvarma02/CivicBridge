function Home() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Welcome to CivicBridge
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Connecting citizens with governance for better communities.
      </p>

      <button style={{
        padding: "12px 20px",
        background: "#1b263b",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}>
        Raise a Complaint
      </button>
    </div>
  );
}

export default Home;