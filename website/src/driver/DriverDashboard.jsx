import "./DriverDashboard.css";
import "./Driver.css";

export default function DriverDashboard() {
  return (
    <div className="driver-dashboard-container">
      <h1 className="premium-title">Driver Dashboard</h1>

      <div className="dashboard-grid">

        {/* Today's Jobs */}
        <div className="premium-panel">
          <h2>Today's Jobs</h2>
          <p>No jobs assigned yet.</p>
        </div>

        {/* Earnings */}
        <div className="premium-panel">
          <h2>Earnings</h2>
          <p>£0.00</p>
        </div>

        {/* Recent Activity */}
        <div className="premium-panel">
          <h2>Recent Activity</h2>
          <ul>
            <li>No activity recorded.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
