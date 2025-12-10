import "./Pricing.css";
import "../driver/Driver.css";

export default function Pricing() {
  return (
    <div className="page">
      <h1 className="premium-title">Pricing</h1>

      <div className="pricing-grid">
        <div className="premium-panel">
          <h2>Man & Van</h2>
          <ul>
            <li>£80 – Up to 2 hours</li>
            <li>£150 – Half day</li>
            <li>£280 – Full day</li>
          </ul>
        </div>

        <div className="premium-panel">
          <h2>House Removals</h2>
          <ul>
            <li>£400 – 1–2 bed</li>
            <li>£700 – 3–4 bed</li>
            <li>£1000+ – 5+ bed</li>
          </ul>
        </div>

        <div className="premium-panel">
          <h2>Storage</h2>
          <ul>
            <li>£25/week – 20 sq ft</li>
            <li>£50/week – 50 sq ft</li>
            <li>£90/week – 100 sq ft</li>
          </ul>
        </div>
      </div>

      <h1 className="premium-title" style={{ marginTop: "3rem" }}>
        Business Plans
      </h1>

      <div className="pricing-grid">
        <div className="premium-panel">
          <h2>Starter</h2>
          <p>£199/month</p>
        </div>

        <div className="premium-panel">
          <h2>Growth</h2>
          <p>£499/month</p>
        </div>

        <div className="premium-panel">
          <h2>Enterprise</h2>
          <p>£999/month</p>
        </div>
      </div>
    </div>
  );
}