import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1 className="hero-title">Premium Removals, Man & Van, Storage & Courier</h1>
        <p className="hero-subtitle">
          A luxury-level logistics platform built for customers, drivers and major brands.
        </p>

        <div className="hero-buttons">
          <Link to="/services/man-and-van" className="btn primary">Book Man & Van</Link>
          <Link to="/pricing" className="btn secondary">View Pricing</Link>
        </div>
      </section>

      <section className="hero-services">
        <div className="service-card premium-panel">
          <h2>Man & Van</h2>
          <p>Fast, flexible transportation for small moves and collections.</p>
          <Link to="/services/man-and-van" className="service-link">Book now →</Link>
        </div>

        <div className="service-card premium-panel">
          <h2>House & Office Removals</h2>
          <p>Professional teams for full-scale relocations.</p>
          <Link to="/pricing" className="service-link">View prices →</Link>
        </div>

        <div className="service-card premium-panel">
          <h2>Storage</h2>
          <p>Secure storage with flexible weekly plans.</p>
          <Link to="/services/storage" className="service-link">Book storage →</Link>
        </div>
      </section>
    </div>
  );
}