import { Link } from "react-router-dom";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <h2 className="logo">Company Portal</h2>

        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/create-job">Create Job</Link>
        </nav>
      </aside>

      <main className="content">{children}</main>
    </div>
  );
}

export default Layout;