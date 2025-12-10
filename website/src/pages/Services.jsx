import { Link } from "react-router-dom";
import "./Services.css";
import "../driver/Driver.css";

export default function Services() {
  return (
    <div className="services-page">
      <h1 className="premium-title">Our Services</h1>

      <div className="services-grid">
        <div className="premium-panel service-box">
          <h2>Man & Van</h2>
          <p>Flexible same-day and scheduled van services.</p>
          <Link to="/services/man-and-van" className="btn primary">Book Man & Van</Link>
        </div>

        <div className="premium-panel service-box">
          <h2>House & Office Removals</h2>
          <p>Professional relocation teams for any size move.</p>
          <Link to="/pricing" className="btn primary">View Pricing</Link>
        </div>

        <div className="premium-panel service-box">
          <h2>Storage</h2>
          <p>Secure storage from 20–100 sq ft.</p>
          <Link to="/services/storage" className="btn primary">Book Storage</Link>
        </div>

        <div className="premium-panel service-box disabled">
          <h2>Courier Service</h2>
          <p>Coming soon — premium parcel & pallet delivery.</p>
          <Link to="/services/courier" className="btn secondary">Learn More</Link>
        </div>
      </div>
    </div>
  );
}