import { Link } from "react-router-dom";

import {
  FaLeaf,
  FaTree,
  FaGlobe,
  FaHeart,
  FaArrowRight,
  FaPlay,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#021B13] via-[#03291E] to-[#065F46] text-white overflow-hidden flex items-center">

      {/* 🌿 GLOW EFFECTS */}
      <div className="absolute w-[700px] h-[700px] bg-green-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px]" />

      <div className="absolute w-[500px] h-[500px] bg-emerald-400/10 blur-[140px] rounded-full bottom-[-150px] right-[-150px]" />

      {/* 🌱 GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* 🌍 MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/20 text-green-300 px-5 py-2 rounded-full text-sm">

            <FaLeaf />

            <span>Plant a Living Legacy</span>
          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mt-8">

            Plant A <br />

            <span className="text-green-400">
              Living Memory
            </span>

            <br />

            For Someone You Love ❤️
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-2xl">
            Honor your loved ones by planting a real tree in their name.
            Create a living tribute that continues to grow for generations
            while helping heal the planet.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="/plant"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-full text-lg font-medium shadow-2xl hover:scale-105"
            >
              <span>Plant Now 🌱</span>

              <FaArrowRight />
            </Link>

            <button className="inline-flex items-center gap-3 border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-full text-lg">

              <FaPlay />

              <span>Watch Story</span>
            </button>

          </div>

          {/* 🌍 STATS */}
          <div className="grid grid-cols-3 gap-6 mt-16">

            {/* CARD */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-5">

              <h3 className="text-4xl font-bold text-green-400">
                10K+
              </h3>

              <p className="text-gray-400 mt-2">
                Trees Planted
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-5">

              <h3 className="text-4xl font-bold text-green-400">
                5K+
              </h3>

              <p className="text-gray-400 mt-2">
                Families Connected
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-5">

              <h3 className="text-4xl font-bold text-green-400">
                20+
              </h3>

              <p className="text-gray-400 mt-2">
                Cities Covered
              </p>
            </div>

          </div>

          {/* 🌱 MINI FEATURES */}
          <div className="flex flex-wrap gap-6 mt-12 text-gray-300">

            <div className="flex items-center gap-2">

              <FaTree className="text-green-400" />

              <span>Verified Plantations</span>
            </div>

            <div className="flex items-center gap-2">

              <FaHeart className="text-green-400" />

              <span>Living Tributes</span>
            </div>

            <div className="flex items-center gap-2">

              <FaGlobe className="text-green-400" />

              <span>Environmental Impact</span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* MAIN IMAGE */}
          <div className="relative group">

            <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
                className="w-full h-[700px] object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-[2rem]" />
          </div>

          {/* 🌱 FLOATING CARD TOP */}
          <div className="absolute top-8 -left-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-2xl w-72">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">

                🌱

              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Live Tree Updates
                </h3>

                <p className="text-gray-300 text-sm mt-1">
                  Verified plantation tracking
                </p>
              </div>
            </div>

            {/* ITEMS */}
            <div className="space-y-4 mt-5">

              <div className="bg-white/10 rounded-2xl p-4">

                <h4 className="font-semibold">
                  Ramesh Swain
                </h4>

                <p className="text-sm text-gray-300 mt-1">
                  Hyderabad • Growing 🌿
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-4">

                <h4 className="font-semibold">
                  Anita Devi
                </h4>

                <p className="text-sm text-gray-300 mt-1">
                  Bangalore • Planted April 2026
                </p>
              </div>
            </div>
          </div>

          {/* 🌍 FLOATING CARD BOTTOM */}
          <div className="absolute bottom-10 -right-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl w-72">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-3xl">

                🌍

              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  1 Tree
                </h3>

                <p className="text-gray-300 mt-1">
                  Can absorb up to 22kg CO₂ yearly
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}