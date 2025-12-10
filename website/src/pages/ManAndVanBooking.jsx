import { useState } from "react";
import "./ManAndVanBooking.css";
import "../driver/Driver.css";

export default function ManAndVanBooking() {
  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    hours: "2",
    notes: ""
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert("Booking captured — Stripe integration coming next.");
  };

  return (
    <div className="page">
      <h1 className="premium-title">Book Man & Van</h1>

      <form className="premium-panel booking-form" onSubmit={submit}>
        <input name="pickup" placeholder="Pickup Address" className="premium-input" onChange={update} required />
        <input name="dropoff" placeholder="Drop-off Address" className="premium-input" onChange={update} required />
        <input name="date" type="date" className="premium-input" onChange={update} required />
        <input name="time" type="time" className="premium-input" onChange={update} required />

        <select name="hours" className="premium-input" onChange={update}>
          <option value="2">Up to 2 hours</option>
          <option value="4">Half day (4 hours)</option>
          <option value="8">Full day (8 hours)</option>
        </select>

        <textarea
          name="notes"
          className="premium-input"
          rows="3"
          placeholder="Extra notes"
          onChange={update}
        />

        <button className="premium-button">Continue to Payment</button>
      </form>
    </div>
  );
}