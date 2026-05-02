import { useState } from "react";
import {
  FaLeaf,
  FaMapMarkerAlt,
  FaCamera,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";

import Navbar from "../components/Navbar.jsx";

export default function PlantTree() {
  const [form, setForm] = useState({
    name: "",
    message: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("🌱 Memory Tree Request Submitted Successfully");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#021B13] via-[#043D2B] to-[#065F46] text-white overflow-hidden relative">

      {/* 🌿 Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-150px] left-[-150px]" />

      <div className="absolute w-[400px] h-[400px] bg-emerald-400/10 blur-[100px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE */}
      <div className="relative z-10 pt-32 px-6 pb-20">

        {/* HERO */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/20">
              🌱 Create a Living Legacy
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-6">
              Plant a Tree <br />
              In Their Memory ❤️
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
              Honor your loved ones by planting a real tree that
              continues to grow for generations.
            </p>

            {/* QUOTE */}
            <div className="mt-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <p className="italic text-gray-300 leading-relaxed">
                “A tree planted in memory becomes more than nature —
                it becomes a living tribute that never fades.”
              </p>
            </div>

            {/* FEATURES */}
            <div className="mt-10 grid gap-5">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-green-400">
                  <FaLeaf />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Real Tree Plantation
                  </h3>

                  <p className="text-sm text-gray-400">
                    Trees planted with verified locations
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-green-400">
                  <FaCamera />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Growth Updates
                  </h3>

                  <p className="text-sm text-gray-400">
                    Receive plantation photos & updates
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-green-400">
                  <FaGlobe />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Environmental Impact
                  </h3>

                  <p className="text-sm text-gray-400">
                    Help reduce global warming
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold mb-2">
              🌱 Plant a Memory Tree
            </h2>

            <p className="text-gray-300 mb-8">
              Create a permanent memory that grows with nature.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* NAME */}
              <div>
                <label className="text-sm text-gray-300">
                  Loved One’s Name
                </label>

                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full mt-2 bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-green-400"
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm text-gray-300">
                  Tribute Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Write a heartfelt message..."
                  className="w-full mt-2 bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-green-400"
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="text-sm text-gray-300">
                  Preferred Location
                </label>

                <input
                  type="text"
                  placeholder="City / State"
                  className="w-full mt-2 bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-green-400"
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                />
              </div>

              {/* PLAN */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">
                      Memory Tree Plan 🌳
                    </h3>

                    <p className="text-sm text-gray-400">
                      Includes plantation, tracking & updates
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-green-400">
                    ₹499
                  </h2>
                </div>
              </div>

              {/* BUTTON */}
              <button className="w-full bg-green-500 hover:bg-green-400 transition py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-[1.02]">
                Pay & Plant 🌱
              </button>

            </form>
          </div>
        </div>

        {/* 🌍 WHY TREES MATTER */}
        <div className="max-w-7xl mx-auto mt-32">

          <div className="text-center">
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/20">
              🌍 Why Trees Matter
            </span>

            <h2 className="text-5xl font-bold mt-6">
              Planting Trees Helps Heal the Planet
            </h2>

            <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
              Trees absorb carbon dioxide, improve air quality,
              reduce heat, protect wildlife, and fight climate change.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="text-5xl">🌍</div>

              <h3 className="text-2xl font-semibold mt-5">
                Fight Global Warming
              </h3>

              <p className="text-gray-400 mt-4">
                Trees absorb carbon emissions and cool the Earth.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="text-5xl">💨</div>

              <h3 className="text-2xl font-semibold mt-5">
                Cleaner Air
              </h3>

              <p className="text-gray-400 mt-4">
                Trees improve oxygen and reduce pollution.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="text-5xl">❤️</div>

              <h3 className="text-2xl font-semibold mt-5">
                Living Legacy
              </h3>

              <p className="text-gray-400 mt-4">
                Keep memories alive through nature.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}