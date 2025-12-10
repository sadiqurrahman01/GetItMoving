import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DriverRegister.css";
import "./Driver.css";

export default function DriverRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    vehicleType: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later: connect to backend
    navigate("/driver/login");
  };

  return (
    <div className="driver-register-container">
      <div className="premium-panel register-box">
        <h1 className="premium-title">Driver Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            className="premium-input"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Email"
            type="email"
            className="premium-input"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            placeholder="Password"
            type="password"
            className="premium-input"
            onChange={handleChange}
            required
          />

          <select
            name="vehicleType"
            className="premium-input"
            onChange={handleChange}
            required
          >
            <option value="">Select Vehicle Type</option>
            <option value="small-van">Small Van</option>
            <option value="medium-van">Medium Van</option>
            <option value="large-van">Large Van</option>
          </select>

          <button type="submit" className="premium-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}