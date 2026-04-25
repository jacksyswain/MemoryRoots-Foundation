import { useState } from "react";
import Navbar from "../components/Navbar.jsx";

export default function PlantTree() {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tree request submitted 🌱 (connect backend next)");
  };

  return (
    <>
      <Navbar />
      <div className="bg-light min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-primary">Plant a Memory Tree</h2>

          <input
            type="text"
            placeholder="Loved one's name"
            className="w-full mt-4 p-3 border rounded"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <textarea
            placeholder="Message"
            className="w-full mt-4 p-3 border rounded"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button className="mt-6 bg-accent text-white px-4 py-3 rounded w-full">
            Pay ₹499 & Plant 🌱
          </button>
        </form>
      </div>
    </>
  );
}
