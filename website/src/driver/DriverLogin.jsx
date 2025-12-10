import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DriverLogin.css";
import "./Driver.css";

export default function DriverLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later we will connect backend authentication
    navigate("/driver/dashboard");
  };

  return (
    <div className="driver-login-container">
      <div className="premium-panel login-box">
        <h1 className="premium-title">Driver Portal</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="premium-input"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="premium-input"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="premium-button">
            Login
          </button>
        </form>

        <p className="login-register-text">
          Don't have an account?{" "}
          <span onClick={() => navigate("/driver/register")}>
            Register now
          </span>
        </p>
      </div>
    </div>
  );
}