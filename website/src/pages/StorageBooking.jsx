import { useState } from "react";
import "./StorageBooking.css";
import "../driver/Driver.css";

export default function StorageBooking() {
  const [form, setForm] = useState({
    size: "20",
    startDate: "",
    weeks: "4",
    notes: ""
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert("Storage booking captured — Stripe integration coming.");
  };

  return (
    <div className="page">
      <h1 className="premium-title">Book Storage</h1>

      <form className="premium-panel storage-form" onSubmit={submit}>
        <select name="size" className="premium-input" onChange={update}>
          <option value="20">20 sq ft</option>
          <option value="50">50 sq ft</option>
          <option value="100">100 sq ft</option>
        </select>

        <input type="date" name="startDate" className="premium-input" onChange={update} required />
        <select name="weeks" className="premium-input" onChange={update}>
          <option value="4">4 weeks</option>
          <option value="8">8 weeks</option>
          <option value="12">12 weeks</option>
        </select>

        <textarea name="notes" className="premium-input" onChange={update} rows="3" placeholder="Extra notes" />

        <button className="premium-button">Continue to Payment</button>
      </form>
    </div>
  );
}