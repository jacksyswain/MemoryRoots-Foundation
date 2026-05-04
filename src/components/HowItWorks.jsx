import { Link } from "react-router-dom";

import {
  FaPenNib,
  FaTree,
  FaCamera,
  FaLeaf,
  FaHeart,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-b from-[#021B13] via-[#03291E] to-[#043D2B] text-white py-32 px-6 overflow-hidden">

      {/* 🌿 Glow Effects */}
      <div className="absolute w-[600px] h-[600px] bg-green-500/10 blur-[140px] rounded-full top-[-200px] left-[-200px]" />

      <div className="absolute w-[500px] h-[500px] bg-emerald-400/10 blur-[120px] rounded-full bottom-[-150px] right-[-150px]" />

      {/* 🌍 CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/20 text-green-300 px-5 py-2 rounded-full text-sm">

            <FaLeaf />

            <span>How MemoryRoots Works</span>
          </div>

          {/* TITLE */}
          <h2 className="text-5xl md:text-6xl font-bold mt-8 leading-tight">
            A Simple Way To <br />
            Create A Living Memory 🌱
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 mt-8 text-lg leading-relaxed">
            Plant a real tree in memory of someone you love and
            follow its journey as it grows with nature.
          </p>

        </div>

        {/* 🌱 PROCESS TIMELINE */}
        <div className="relative mt-24">

          {/* LINE */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2" />

          {/* STEPS */}
          <div className="grid lg:grid-cols-3 gap-10 relative z-10">

            {/* STEP 1 */}
            <div className="group relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:bg-white/15 transition duration-500 hover:-translate-y-3 shadow-xl">

              {/* STEP NUMBER */}
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-green-500 text-black font-bold flex items-center justify-center shadow-lg">
                01
              </div>

              {/* ICON */}
              <div className="w-20 h-20 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-4xl mt-4">

                <FaPenNib />

              </div>

              {/* CONTENT */}
              <h3 className="text-3xl font-bold mt-8">
                Add a Name ❤️
              </h3>

              <p className="text-gray-300 mt-5 leading-relaxed">
                Enter your loved one’s name, tribute message,
                and plantation preferences.
              </p>

              {/* FEATURES */}
              <div className="space-y-3 mt-8">

                <div className="flex items-center gap-3 text-gray-300">
                  <FaHeart className="text-green-400" />

                  <span>Personal tribute message</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <FaLeaf className="text-green-400" />

                  <span>Dedicated memory tree</span>
                </div>

              </div>
            </div>

            {/* STEP 2 */}
            <div className="group relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:bg-white/15 transition duration-500 hover:-translate-y-3 shadow-xl">

              {/* STEP NUMBER */}
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-green-500 text-black font-bold flex items-center justify-center shadow-lg">
                02
              </div>

              {/* ICON */}
              <div className="w-20 h-20 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-4xl mt-4">

                <FaTree />

              </div>

              {/* CONTENT */}
              <h3 className="text-3xl font-bold mt-8">
                We Plant 🌳
              </h3>

              <p className="text-gray-300 mt-5 leading-relaxed">
                Our team plants a real tree in verified plantation
                locations with complete transparency.
              </p>

              {/* FEATURES */}
              <div className="space-y-3 mt-8">

                <div className="flex items-center gap-3 text-gray-300">
                  <FaGlobe className="text-green-400" />

                  <span>Verified locations</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <FaLeaf className="text-green-400" />

                  <span>Environmental contribution</span>
                </div>

              </div>
            </div>

            {/* STEP 3 */}
            <div className="group relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:bg-white/15 transition duration-500 hover:-translate-y-3 shadow-xl">

              {/* STEP NUMBER */}
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-green-500 text-black font-bold flex items-center justify-center shadow-lg">
                03
              </div>

              {/* ICON */}
              <div className="w-20 h-20 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-4xl mt-4">

                <FaCamera />

              </div>

              {/* CONTENT */}
              <h3 className="text-3xl font-bold mt-8">
                Track Growth 📸
              </h3>

              <p className="text-gray-300 mt-5 leading-relaxed">
                Receive growth photos, updates, and monitor your
                memory tree as it grows over time.
              </p>

              {/* FEATURES */}
              <div className="space-y-3 mt-8">

                <div className="flex items-center gap-3 text-gray-300">
                  <FaCamera className="text-green-400" />

                  <span>Photo updates</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <FaLeaf className="text-green-400" />

                  <span>Permanent digital memory page</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 🌍 WHY IT MATTERS */}
        <div className="grid lg:grid-cols-2 gap-16 mt-32 items-center">

          {/* LEFT IMAGE */}
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
                    Memories That Grow
                  </h3>

                  <p className="text-gray-300 text-sm mt-1">
                    A living tribute for generations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-green-300 px-5 py-2 rounded-full text-sm">

              <FaLeaf />

              <span>Why This Matters</span>
            </div>

            <h3 className="text-5xl font-bold mt-8 leading-tight">
              More Than Just <br />
              Planting Trees 🌍
            </h3>

            <p className="text-gray-300 mt-8 text-lg leading-relaxed">
              MemoryRoots was built to connect people emotionally
              while helping restore nature and fight climate change.
            </p>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Every tree planted becomes a symbol of remembrance,
              hope, healing, and environmental responsibility.
            </p>

            {/* BENEFITS */}
            <div className="space-y-5 mt-10">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  🌍
                </div>

                <div>
                  <h4 className="text-xl font-semibold">
                    Fight Climate Change
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Trees naturally absorb carbon emissions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  ❤️
                </div>

                <div>
                  <h4 className="text-xl font-semibold">
                    Preserve Memories
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Keep your loved ones connected with nature.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-10">

              <Link
                to="/plant"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:scale-105"
              >
                <span>Start Planting 🌱</span>

                <FaArrowRight />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}