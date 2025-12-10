import { useState } from "react";
import { apiPost } from "../utils/api";

export default function CustomerLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await apiPost("/customers/login", form);

    if (data.token) {
      localStorage.setItem("customerToken", data.token);
      window.location.href = "/customer/dashboard";
    } else {
      setMessage(data.message || "Invalid login");
    }
  };

  return (
    <div className="auth-container">
      <h2>Customer Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
