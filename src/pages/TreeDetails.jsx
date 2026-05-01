import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function TreeDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#021B13] via-[#043D2B] to-[#065F46] text-white overflow-hidden relative">

      {/* 🌿 Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-150px] left-[-150px]" />

      <div className="absolute w-[400px] h-[400px] bg-emerald-400/10 blur-[100px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="relative z-10 pt-32 px-6 pb-20">

        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/20">
              🌱 Living Memory Tree
            </span>

            <h1 className="text-5xl font-bold leading-tight mt-6">
              In Loving Memory <br />
              of Ramesh Swain ❤️
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-lg">
              This tree was planted as a tribute to a beautiful soul.
              A living memory growing forever with nature.
            </p>

            {/* TREE INFO */}
            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                <p className="text-gray-400 text-sm">Tree ID</p>
                <h3 className="text-xl font-semibold mt-1">
                  {id}
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                <p className="text-gray-400 text-sm">Status</p>
                <h3 className="text-xl font-semibold mt-1 text-green-400">
                  Growing 🌿
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                <p className="text-gray-400 text-sm">Planted On</p>
                <h3 className="text-xl font-semibold mt-1">
                  April 2026
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                <p className="text-gray-400 text-sm">Location</p>
                <h3 className="text-xl font-semibold mt-1">
                  Hyderabad 📍
                </h3>
              </div>

            </div>

            {/* MESSAGE */}
            <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Tribute Message 💌
              </h3>

              <p className="text-gray-300 leading-relaxed">
                “You may be gone from our sight, but never from our hearts.
                This tree stands as a living memory of your love and legacy.”
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* MAIN IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
              className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
            />

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">

              <h3 className="font-semibold text-lg">
                🌳 Tree Growth Update
              </h3>

              <p className="text-sm text-gray-300 mt-2">
                Healthy growth observed this month.
              </p>

              <div className="mt-4 w-full bg-white/10 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full w-[70%]" />
              </div>

              <p className="text-xs text-gray-400 mt-2">
                Growth Progress: 70%
              </p>
            </div>
          </div>
        </div>

        {/* GALLERY SECTION */}
        <div className="max-w-7xl mx-auto mt-24">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              Growth Gallery 📸
            </h2>

            <button className="border border-white/20 px-5 py-2 rounded-full hover:bg-white/10 transition">
              View Timeline
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              className="rounded-2xl h-64 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1511497584788-876760111969"
              className="rounded-2xl h-64 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1473773508845-188df298d2d1"
              className="rounded-2xl h-64 w-full object-cover"
            />

          </div>
        </div>
      </div>
    </div>
  );
}