import { useState } from "react";
import { apiPost } from "../utils/api";

export default function CustomerRegister() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await apiPost("/customers/register", form);

    if (data.token) {
      localStorage.setItem("customerToken", data.token);
      window.location.href = "/customer/dashboard";
    } else {
      setMessage(data.message || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Customer Registration</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
