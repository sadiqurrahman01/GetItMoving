import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyLogin from "./pages/CompanyLogin";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import CreateJob from "./pages/CreateJob";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/create-job" element={<CreateJob />} />
      </Routes>
    </Router>
  );
}

export default App;