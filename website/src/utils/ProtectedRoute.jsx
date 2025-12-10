import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  // Get logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // If no user → redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // If role does not match → block access
  if (role && user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  // Access granted
  return children;
}