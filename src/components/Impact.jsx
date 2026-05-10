import { Link } from "react-router-dom";

import {
  FaTree,
  FaGlobe,
  FaHeart,
  FaLeaf,
  FaSeedling,
  FaCloud,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-[#021B13] text-white py-36 px-6"
    >

      {/* 🌿 BACKGROUND */}
      <div className="absolute inset-0">

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#043D2B] via-[#03291E] to-[#021B13]" />

        {/* Glow Left */}
        <div className="absolute top-[-250px] right-[-250px] w-[700px] h-[700px] bg-green-500/10 blur-[180px] rounded-full" />

        {/* Glow Right */}
        <div className="absolute bottom-[-250px] left-[-250px] w-[600px] h-[600px] bg-emerald-400/10 blur-[160px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:90px_90px]" />

      </div>

      {/* 🌍 CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-5xl mx-auto">

          {/* BADGE */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-full">

            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">

              <FaSeedling />

            </div>

            <span className="text-sm text-gray-200">
              Environmental & Social Impact
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] mt-10">

            Every Tree Creates <br />

            <span className="text-green-400">
              A Better Future 🌍
            </span>

          </h2>

          {/* TEXT */}
          <p className="text-xl text-gray-300 leading-relaxed mt-10 max-w-4xl mx-auto">

            Every plantation through MemoryRoots contributes to restoring
            forests, reducing climate impact, improving biodiversity,
            and preserving meaningful human memories for generations.

          </p>

        </div>

        {/* 🌱 STATS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-24">

          {/* CARD */}
          <div className="group relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-4">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 blur-[80px] rounded-full" />

            <div className="relative z-10">

              <div className="w-20 h-20 rounded-3xl bg-green-500/20 flex items-center justify-center text-green-400 text-4xl">

                <FaTree />

              </div>

              <h3 className="text-6xl font-bold text-green-400 mt-8">
                10K+
              </h3>

              <p className="text-2xl font-semibold mt-4">
                Trees Planted
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed">
                Thousands of trees planted to restore forests
                and support ecosystems worldwide.
              </p>

            </div>
          </div>

          {/* CARD */}
          <div className="group relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-4">

            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 blur-[80px] rounded-full" />

            <div className="relative z-10">

              <div className="w-20 h-20 rounded-3xl bg-green-500/20 flex items-center justify-center text-green-400 text-4xl">

                <FaHeart />

              </div>

              <h3 className="text-6xl font-bold text-green-400 mt-8">
                5K+
              </h3>

              <p className="text-2xl font-semibold mt-4">
                Families Connected
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed">
                Families preserving memories through
                meaningful living tributes.
              </p>

            </div>
          </div>

          {/* CARD */}
          <div className="group relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-4">

            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />

            <div className="relative z-10">

              <div className="w-20 h-20 rounded-3xl bg-green-500/20 flex items-center justify-center text-green-400 text-4xl">

                <FaGlobe />

              </div>

              <h3 className="text-6xl font-bold text-green-400 mt-8">
                20+
              </h3>

              <p className="text-2xl font-semibold mt-4">
                Cities Covered
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed">
                Plantation initiatives spreading across
                multiple regions and communities.
              </p>

            </div>
          </div>

          {/* CARD */}
          <div className="group relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-4">

            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full" />

            <div className="relative z-10">

              <div className="w-20 h-20 rounded-3xl bg-green-500/20 flex items-center justify-center text-green-400 text-4xl">

                <FaCloud />

              </div>

              <h3 className="text-6xl font-bold text-green-400 mt-8">
                100%
              </h3>

              <p className="text-2xl font-semibold mt-4">
                Transparency
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed">
                Verified plantations, updates,
                and trusted environmental reporting.
              </p>

            </div>
          </div>

        </div>

        {/* 🌍 WHY TREES MATTER */}
        <div className="grid lg:grid-cols-2 gap-20 mt-36 items-center">

          {/* LEFT */}
          <div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-full">

              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">

                <FaLeaf />

              </div>

              <span className="text-sm text-gray-200">
                Why Trees Matter
              </span>
            </div>

            {/* TITLE */}
            <h3 className="text-5xl md:text-6xl font-bold leading-[1.1] mt-10">

              Planting Trees Helps <br />

              <span className="text-green-400">
                Heal The Earth 🌱
              </span>

            </h3>

            {/* TEXT */}
            <p className="text-xl text-gray-300 leading-relaxed mt-10">

              Trees are one of nature’s most powerful tools
              against climate change. They absorb carbon dioxide,
              cool the atmosphere, improve air quality,
              and restore ecosystems.

            </p>

            {/* BENEFITS */}
            <div className="space-y-6 mt-12">

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-xl">

                  🌍

                </div>

                <div>
                  <h4 className="text-2xl font-semibold">
                    Reduce Global Warming
                  </h4>

                  <p className="text-gray-400 mt-3 leading-relaxed">
                    Trees absorb harmful carbon emissions
                    and naturally cool the environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-xl">

                  💨

                </div>

                <div>
                  <h4 className="text-2xl font-semibold">
                    Improve Air Quality
                  </h4>

                  <p className="text-gray-400 mt-3 leading-relaxed">
                    Trees filter pollutants and release oxygen
                    that supports healthier living.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-xl">

                  🐦

                </div>

                <div>
                  <h4 className="text-2xl font-semibold">
                    Protect Biodiversity
                  </h4>

                  <p className="text-gray-400 mt-3 leading-relaxed">
                    Forest ecosystems support wildlife,
                    birds, and natural habitats.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl group">

              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
                className="w-full h-[760px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl w-80">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-3xl">

                  🌱

                </div>

                <div>
                  <h3 className="text-4xl font-bold">
                    1 Tree = Hope
                  </h3>

                  <p className="text-gray-300 mt-2">
                    Every plantation creates a lasting impact.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 🌿 QUOTE */}
        <div className="mt-36">

          <div className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-14 text-center max-w-6xl mx-auto shadow-2xl">

            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-green-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10">

              <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center text-5xl mx-auto">

                🌳

              </div>

              <p className="text-3xl md:text-5xl italic leading-relaxed text-gray-100 mt-10 font-light">

                “The best time to plant a tree was 20 years ago.
                The second best time is now.”

              </p>

            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">

          <Link
            to="/plant"
            className="group inline-flex items-center gap-4 bg-green-500 hover:bg-green-400 transition-all duration-300 px-10 py-5 rounded-full text-xl font-medium shadow-2xl hover:scale-105"
          >
            <FaLeaf />

            <span>Be Part Of The Change 🌱</span>

            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </Link>

          <p className="text-gray-500 mt-6">
            Start creating a greener future today.
          </p>

        </div>

      </div>
    </section>
  );
}