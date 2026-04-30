import { useState } from "react";
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

      {/* PAGE CONTENT */}
      <div className="relative z-10 pt-32 px-6 pb-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/20">
              🌱 Create a Living Memory
            </span>

            <h1 className="text-5xl font-bold leading-tight mt-6">
              Plant a Tree <br />
              For Someone You Love ❤️
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-lg">
              Honor your loved ones with a real tree planted in their memory.
              A tribute that grows forever with nature.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  🌳
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
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  📸
                </div>

                <div>
                  <h3 className="font-semibold">
                    Growth Updates
                  </h3>

                  <p className="text-sm text-gray-400">
                    Receive photos and growth updates
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  🌍
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

          {/* RIGHT FORM */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold mb-2">
              🌱 Plant a Memory Tree
            </h2>

            <p className="text-gray-300 mb-8">
              Fill in the details below to create a living tribute
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
                      Includes plantation & updates
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-green-400">
                    ₹499
                  </h2>
                </div>
              </div>

              {/* BUTTON */}
              <button
                className="w-full bg-green-500 hover:bg-green-400 transition py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-[1.02]"
              >
                Pay & Plant 🌱
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}