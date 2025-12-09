import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">GetItMoving</h2>

      <nav>
        <Link to="/dashboard" className={pathname === "/dashboard" ? "active" : ""}>Dashboard</Link>
        <Link to="/jobs" className={pathname === "/jobs" ? "active" : ""}>Jobs</Link>
        <Link to="/create-job" className={pathname === "/create-job" ? "active" : ""}>Create Job</Link>
        <Link to="/settings" className={pathname === "/settings" ? "active" : ""}>Settings</Link>
      </nav>

      <div className="sidebar-bottom">
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}

export default Sidebar;