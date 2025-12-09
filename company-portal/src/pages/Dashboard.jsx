import Layout from "../layout/Layout";
import "./Dashboard.css";

function Dashboard() {
  return (
    <Layout>
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card">Total Jobs: 124</div>
        <div className="card">Active Drivers: 41</div>
        <div className="card">Pending Jobs: 9</div>
      </div>
    </Layout>
  );
}

export default Dashboard;