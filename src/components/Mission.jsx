import { Link } from "react-router-dom";

import {
  FaLeaf,
  FaGlobe,
  FaTree,
  FaHeart,
  FaSeedling,
} from "react-icons/fa";

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative bg-gradient-to-b from-[#021B13] via-[#03291E] to-[#043D2B] text-white py-32 px-6 overflow-hidden"
    >

      {/* 🌿 Glow Effects */}
      <div className="absolute w-[600px] h-[600px] bg-green-500/10 blur-[140px] rounded-full top-[-200px] right-[-200px]" />

      <div className="absolute w-[400px] h-[400px] bg-emerald-400/10 blur-[120px] rounded-full bottom-[-100px] left-[-100px]" />

      {/* 🌍 MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* 🌳 IMAGE SECTION */}
        <div className="relative group">

          {/* MAIN IMAGE */}
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
              className="w-full h-[650px] object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          {/* FLOATING CARD 1 */}
          <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl px-5 py-4 shadow-xl">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <FaTree />
              </div>

              <div>
                <h3 className="font-semibold">
                  10,000+ Trees
                </h3>

                <p className="text-sm text-gray-300">
                  Growing Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* FLOATING CARD 2 */}
          <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl px-5 py-4 shadow-xl">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <FaHeart />
              </div>

              <div>
                <h3 className="font-semibold">
                  Living Memories
                </h3>

                <p className="text-sm text-gray-300">
                  Forever Connected
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ✨ TEXT SECTION */}
        <div>

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/20 text-green-300 px-5 py-2 rounded-full text-sm">

            <FaSeedling />

            <span>Our Mission & Purpose</span>
          </div>

          {/* TITLE */}
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mt-8">
            Planting Trees, <br />
            Preserving Memories 🌍
          </h2>

          {/* TEXT */}
          <p className="mt-8 text-gray-300 text-lg leading-relaxed">
            MemoryRoots Foundation was created with one purpose —
            to connect emotion, remembrance, and environmental healing together.
          </p>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Every year, forests disappear while global warming continues to rise.
            We wanted to create something meaningful where people can honor
            loved ones while helping heal the Earth.
          </p>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Every tree planted through our platform becomes a living memory,
            a growing legacy, and a symbol of love that never fades.
          </p>

          {/* 🌱 FEATURES */}
          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            {/* CARD */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition">

              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-lg">
                <FaLeaf />
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Real Plantation
              </h3>

              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                Verified tree plantations with transparent updates.
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition">

              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-lg">
                <FaGlobe />
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Climate Impact
              </h3>

              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                Helping reduce carbon emissions and global warming.
              </p>
            </div>

          </div>

          {/* 🌿 QUOTE */}
          <div className="mt-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6">

            <p className="text-gray-300 italic leading-relaxed">
              “A tree planted in memory becomes more than nature —
              it becomes a living tribute that grows forever.”
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/plant"
              className="bg-green-500 hover:bg-green-400 transition px-7 py-4 rounded-full text-lg font-medium shadow-lg hover:scale-105"
            >
              Start Your Memory 🌱
            </Link>

            <button className="border border-white/20 hover:bg-white/10 transition px-7 py-4 rounded-full text-lg">
              Learn More
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}