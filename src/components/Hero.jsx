import { Link } from "react-router-dom";

import {
  FaLeaf,
  FaTree,
  FaGlobe,
  FaHeart,
  FaArrowRight,
  FaPlay,
  FaCheckCircle,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#021B13] text-white">

      {/* 🌿 BACKGROUND */}
      <div className="absolute inset-0">

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021B13] via-[#03291E] to-[#065F46]" />

        {/* Glow 1 */}
        <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-green-500/20 blur-[180px] rounded-full" />

        {/* Glow 2 */}
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-emerald-400/10 blur-[140px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:90px_90px]" />

      </div>

      {/* 🌍 CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            {/* TOP BADGE */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-full">

              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <FaLeaf />
              </div>

              <span className="text-sm text-gray-200">
                Creating Living Memories Through Nature
              </span>
            </div>

            {/* TITLE */}
            <h1 className="mt-10 text-5xl md:text-7xl font-bold leading-[1] tracking-tight">

              Plant A

              <span className="block text-green-400 mt-2">
                Living Memory
              </span>

              <span className="block mt-2">
                That Grows Forever 🌱
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-2xl">

              Honor your loved ones with a real tree planted in their name.
              A beautiful tribute that preserves memories while helping heal
              the Earth for future generations.

            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-400" />

                <span className="text-gray-300">
                  Verified Tree Plantation
                </span>
              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-400" />

                <span className="text-gray-300">
                  Live Growth Updates
                </span>
              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-400" />

                <span className="text-gray-300">
                  Permanent Memory Page
                </span>
              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-400" />

                <span className="text-gray-300">
                  Climate Positive Impact
                </span>
              </div>

            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-5 mt-12">

              <Link
                to="/plant"
                className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 transition-all duration-300 px-8 py-4 rounded-full text-lg font-medium shadow-2xl hover:scale-105"
              >
                <span>Plant A Tree 🌱</span>

                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </Link>

              <button className="inline-flex items-center gap-3 border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-full text-lg">

                <FaPlay />

                <span>Watch Our Story</span>
              </button>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-20">

              <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6">

                <h3 className="text-5xl font-bold text-green-400">
                  10K+
                </h3>

                <p className="text-gray-400 mt-3">
                  Trees Planted
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6">

                <h3 className="text-5xl font-bold text-green-400">
                  5K+
                </h3>

                <p className="text-gray-400 mt-3">
                  Families Connected
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6">

                <h3 className="text-5xl font-bold text-green-400">
                  20+
                </h3>

                <p className="text-gray-400 mt-3">
                  Cities Covered
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl group">

              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
                className="w-full h-[760px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            </div>

            {/* FLOATING CARD 1 */}
            <div className="absolute top-8 -left-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl w-80">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">

                  🌱

                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Live Tree Updates
                  </h3>

                  <p className="text-gray-300 text-sm mt-1">
                    Real plantation tracking
                  </p>
                </div>
              </div>

              <div className="space-y-4 mt-6">

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

            {/* FLOATING CARD 2 */}
            <div className="absolute bottom-10 -right-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl w-80">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-3xl">

                  🌍

                </div>

                <div>
                  <h3 className="text-4xl font-bold">
                    22kg
                  </h3>

                  <p className="text-gray-300 mt-1">
                    CO₂ absorbed yearly by one tree
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}