import { Link } from "react-router-dom";

import {
  FaTree,
  FaGlobe,
  FaHeart,
  FaLeaf,
  FaSeedling,
  FaCloud,
} from "react-icons/fa";

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative bg-gradient-to-b from-[#043D2B] via-[#03291E] to-[#021B13] text-white py-32 px-6 overflow-hidden"
    >

      {/* 🌿 Glow Effects */}
      <div className="absolute w-[600px] h-[600px] bg-green-500/10 blur-[140px] rounded-full top-[-200px] right-[-200px]" />

      <div className="absolute w-[500px] h-[500px] bg-emerald-400/10 blur-[120px] rounded-full bottom-[-150px] left-[-150px]" />

      {/* 🌍 MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="text-center max-w-4xl mx-auto">

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/20 text-green-300 px-5 py-2 rounded-full text-sm">

            <FaSeedling />

            <span>Environmental Impact</span>
          </div>

          {/* TITLE */}
          <h2 className="text-5xl md:text-6xl font-bold mt-8 leading-tight">
            Every Tree Creates <br />
            A Better Future 🌍
          </h2>

          {/* TEXT */}
          <p className="text-gray-300 mt-8 text-lg leading-relaxed">
            Every tree planted through MemoryRoots contributes to
            restoring nature, reducing global warming, improving air quality,
            and creating a living memory that lasts for generations.
          </p>

        </div>

        {/* 🌱 STATS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {/* CARD */}
          <div className="group bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition duration-300 hover:-translate-y-2 shadow-xl">

            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-3xl">

              <FaTree />

            </div>

            <h3 className="text-5xl font-bold text-green-400 mt-6">
              10K+
            </h3>

            <p className="text-xl font-semibold mt-3">
              Trees Planted
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Thousands of trees planted to restore forests and ecosystems.
            </p>
          </div>

          {/* CARD */}
          <div className="group bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition duration-300 hover:-translate-y-2 shadow-xl">

            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-3xl">

              <FaHeart />

            </div>

            <h3 className="text-5xl font-bold text-green-400 mt-6">
              5K+
            </h3>

            <p className="text-xl font-semibold mt-3">
              Families Connected
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Families preserving memories through living plantations.
            </p>
          </div>

          {/* CARD */}
          <div className="group bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition duration-300 hover:-translate-y-2 shadow-xl">

            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-3xl">

              <FaGlobe />

            </div>

            <h3 className="text-5xl font-bold text-green-400 mt-6">
              20+
            </h3>

            <p className="text-xl font-semibold mt-3">
              Cities Covered
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Plantation initiatives expanding across multiple regions.
            </p>
          </div>

          {/* CARD */}
          <div className="group bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition duration-300 hover:-translate-y-2 shadow-xl">

            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-3xl">

              <FaCloud />

            </div>

            <h3 className="text-5xl font-bold text-green-400 mt-6">
              100%
            </h3>

            <p className="text-xl font-semibold mt-3">
              Transparency
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Verified plantations, live updates, and trusted reporting.
            </p>
          </div>

        </div>

        {/* 🌍 ENVIRONMENTAL IMPACT */}
        <div className="grid lg:grid-cols-2 gap-16 mt-28 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-green-300 px-5 py-2 rounded-full text-sm">

              <FaLeaf />

              <span>Why Trees Matter</span>
            </div>

            <h3 className="text-5xl font-bold mt-8 leading-tight">
              Planting Trees Helps <br />
              Heal the Earth 🌱
            </h3>

            <p className="text-gray-300 mt-8 text-lg leading-relaxed">
              Trees are one of the most powerful natural solutions against
              climate change. They absorb harmful carbon dioxide,
              cool the environment, and support biodiversity.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">

                  🌍

                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Reduce Global Warming
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Trees absorb carbon emissions and help cool the planet.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">

                  💨

                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Improve Air Quality
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Trees naturally filter pollutants and release oxygen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">

                  🐦

                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Protect Ecosystems
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Forests provide shelter and food for wildlife.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group">

            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
                className="w-full h-[650px] object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-5 shadow-xl">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">

                  🌱

                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    1 Tree = Hope
                  </h3>

                  <p className="text-gray-300 text-sm mt-1">
                    Every plantation creates a lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🌿 QUOTE */}
        <div className="mt-28 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 text-center max-w-5xl mx-auto">

          <p className="text-2xl md:text-3xl italic leading-relaxed text-gray-200">
            “The best time to plant a tree was 20 years ago.
            The second best time is now.”
          </p>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">

          <Link
            to="/plant"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:scale-105"
          >
            <FaLeaf />

            <span>Be Part of the Change 🌱</span>
          </Link>

        </div>
      </div>
    </section>
  );
}