import { Link, useLocation } from "react-router-dom";
import "./Layout.css";

function Layout({ children }) {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Jobs", path: "/jobs" },
    { name: "Create Job", path: "/create-job" },
  ];

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2 className="logo">Get It Moving</h2>

        <nav>
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="content">{children}</main>
    </div>
  );
}

export default Layout;