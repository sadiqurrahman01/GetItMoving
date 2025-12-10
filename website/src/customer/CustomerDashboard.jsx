import "./CustomerDashboard.css";
import "./Customer.css";

export default function CustomerDashboard() {
  return (
    <div className="customer-dashboard-container">
      <h1 className="premium-title">Customer Dashboard</h1>

      <div className="dashboard-grid">
        <div className="premium-panel">
          <h2>Your Bookings</h2>
          <p>No active bookings.</p>
        </div>

        <div className="premium-panel">
          <h2>Past Jobs</h2>
          <p>You have no previous jobs yet.</p>
        </div>

        <div className="premium-panel">
          <h2>Payment Methods</h2>
          <p>Manage your cards and payments.</p>
        </div>

        <div className="premium-panel">
          <h2>Account Settings</h2>
          <p>Update your profile and contact details.</p>
        </div>
      </div>
    </div>
  );
}