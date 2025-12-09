// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          <span className="logo-main">GetIt</span>
          <span className="logo-sub">Moving</span>
        </Link>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/fleet">Fleet</NavLink>
        <NavLink to="/quote">Get a Quote</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <div className="nav-right">
        <Link to="/login" className="btn ghost">Login</Link>
        <Link to="/register" className="btn solid">Register</Link>
      </div>
    </header>
  );
}