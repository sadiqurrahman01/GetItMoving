import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Optional: Dashboard Navbar (different from main navbar) */}
      <header style={{ background: "#1a1a1a", padding: "15px", color: "white" }}>
        <h2>Dashboard</h2>
      </header>

      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}