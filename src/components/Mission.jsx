import { Link } from "react-router-dom";

import {
  FaLeaf,
  FaGlobe,
  FaTree,
  FaHeart,
  FaSeedling,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-[#021B13] text-white py-36 px-6"
    >

      {/* 🌿 BACKGROUND */}
      <div className="absolute inset-0">

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021B13] via-[#03291E] to-[#043D2B]" />

        {/* Glow Right */}
        <div className="absolute top-[-250px] right-[-250px] w-[700px] h-[700px] bg-green-500/10 blur-[180px] rounded-full" />

        {/* Glow Left */}
        <div className="absolute bottom-[-250px] left-[-250px] w-[600px] h-[600px] bg-emerald-400/10 blur-[160px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:90px_90px]" />

      </div>

      {/* 🌍 CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

        {/* 🌳 LEFT IMAGE SIDE */}
        <div className="relative">

          {/* MAIN IMAGE */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl group">

            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
              className="w-full h-[760px] object-cover group-hover:scale-105 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          </div>

          {/* FLOATING CARD 1 */}
          <div className="absolute top-10 -left-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl w-72">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">

                <FaTree />

              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  10,000+
                </h3>

                <p className="text-gray-300 mt-1">
                  Trees Growing Worldwide
                </p>
              </div>

            </div>
          </div>

          {/* FLOATING CARD 2 */}
          <div className="absolute bottom-10 -right-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl w-72">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">

                <FaHeart />

              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Living Memories
                </h3>

                <p className="text-gray-300 mt-1">
                  Forever Connected Through Nature
                </p>
              </div>

            </div>
          </div>

          {/* FLOATING MINI BADGE */}
          <div className="absolute bottom-40 left-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 text-sm text-gray-200">

            🌱 Healing Nature Through Memories

          </div>

        </div>

        {/* ✨ RIGHT CONTENT */}
        <div>

          {/* BADGE */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-full">

            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">

              <FaSeedling />

            </div>

            <span className="text-sm text-gray-200">
              Our Mission & Vision
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] mt-10">

            Planting Trees, <br />

            <span className="text-green-400">
              Preserving Memories 🌍
            </span>

          </h2>

          {/* TEXT */}
          <p className="text-xl text-gray-300 leading-relaxed mt-10">

            MemoryRoots was created to connect emotion,
            remembrance, and environmental healing together
            through meaningful tree plantations.

          </p>

          <p className="text-gray-400 leading-relaxed mt-6 text-lg">

            Every year, forests disappear while climate change continues
            to rise. We wanted to build something deeply meaningful —
            where people could honor loved ones while helping restore nature.

          </p>

          <p className="text-gray-400 leading-relaxed mt-6 text-lg">

            Every tree planted through MemoryRoots becomes
            a living memory, a growing legacy, and a symbol of love
            that continues for generations.

          </p>

          {/* 🌱 FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12">

            {/* CARD */}
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-7 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 shadow-xl">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[70px] rounded-full" />

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">

                  <FaLeaf />

                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Real Plantation
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Verified tree plantations with transparent updates and tracking.
                </p>

                <div className="mt-6 flex items-center gap-3 text-gray-300">

                  <FaCheckCircle className="text-green-400" />

                  <span>Verified Locations</span>
                </div>

              </div>
            </div>

            {/* CARD */}
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-7 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 shadow-xl">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[70px] rounded-full" />

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">

                  <FaGlobe />

                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Climate Impact
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Helping reduce carbon emissions and restore ecosystems.
                </p>

                <div className="mt-6 flex items-center gap-3 text-gray-300">

                  <FaCheckCircle className="text-green-400" />

                  <span>Environmental Healing</span>
                </div>

              </div>
            </div>

          </div>

          {/* 🌿 QUOTE */}
          <div className="relative overflow-hidden mt-14 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 blur-[80px] rounded-full" />

            <div className="relative z-10">

              <div className="text-5xl">
                🌱
              </div>

              <p className="text-2xl italic leading-relaxed text-gray-200 mt-6">

                “A tree planted in memory becomes more than nature —
                it becomes a living tribute that grows forever.”

              </p>

            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-5 mt-14">

            <Link
              to="/plant"
              className="group inline-flex items-center gap-4 bg-green-500 hover:bg-green-400 transition-all duration-300 px-10 py-5 rounded-full text-xl font-medium shadow-2xl hover:scale-105"
            >
              <span>Start Your Memory 🌱</span>

              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </Link>

            <button className="border border-white/20 hover:bg-white/10 transition px-10 py-5 rounded-full text-xl">

              Learn More

            </button>

          </div>

        </div>
      </div>
    </section>
  );
}