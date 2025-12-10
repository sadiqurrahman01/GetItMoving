import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppLayout from "./components/AppLayout";

// Public Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import ManAndVanBooking from "./pages/ManAndVanBooking";
import StorageBooking from "./pages/StorageBooking";
import Courier from "./pages/Courier";
import Pricing from "./pages/Pricing";
import Business from "./pages/Business";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancelled from "./pages/PaymentCancelled";

// Auth
import Login from "./auth/Login";
import Register from "./auth/Register";
import DriverLogin from "./driver/DriverLogin";

// Dashboards
import ProtectedRoute from "./utils/ProtectedRoute";
import CustomerDashboard from "./dashboards/customer/CustomerDashboard";
import DriverDashboard from "./driver/DriverDashboard";
import AdminDashboard from "./dashboards/admin/AdminDashboard";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Layout — wraps all public pages */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="man-and-van" element={<ManAndVanBooking />} />
          <Route path="storage" element={<StorageBooking />} />
          <Route path="courier" element={<Courier />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="business" element={<Business />} />

          {/* Auth */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="driver/login" element={<DriverLogin />} />

          {/* Payments */}
          <Route path="payment-success" element={<PaymentSuccess />} />
          <Route path="payment-cancelled" element={<PaymentCancelled />} />
        </Route>

        {/* Dashboards (not inside layout) */}
        <Route
          path="/customer/dashboard"
          element={
            <ProtectedRoute role="customer">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/dashboard"
          element={
            <ProtectedRoute role="driver">
              <DriverDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}
