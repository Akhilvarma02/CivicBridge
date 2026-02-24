import logo from "../assets/logo.png";

function CitizenLayout({ children }) {
  return (
    <div className="main-layout">
      <div className="left-panel">
        <img src={logo} alt="logo" className="side-logo" />
        <h2>CivicBridge</h2>
        <p>Bridging Citizens and Leaders</p>
      </div>

      <div className="right-panel">
        <div className="content-card">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CitizenLayout;