import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          GetItMoving
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/services" className={`nav-link ${isActive("/services")}`}>
          Services
        </Link>

        <Link to="/pricing" className={`nav-link ${isActive("/pricing")}`}>
          Pricing
        </Link>

        <Link to="/business" className={`nav-link ${isActive("/business")}`}>
          Business
        </Link>

        <Link to="/man-and-van" className={`nav-link ${isActive("/man-and-van")}`}>
          Man & Van
        </Link>

        <Link to="/storage" className={`nav-link ${isActive("/storage")}`}>
          Storage
        </Link>

        <Link to="/courier" className={`nav-link ${isActive("/courier")}`}>
          Courier
        </Link>

        <Link to="/login" className={`nav-btn ${isActive("/login")}`}>
          Login
        </Link>

        <Link to="/register" className={`nav-btn ${isActive("/register")}`}>
          Register
        </Link>
      </div>
    </nav>
  );
}
