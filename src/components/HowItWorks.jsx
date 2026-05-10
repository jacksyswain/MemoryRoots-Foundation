import { Link } from "react-router-dom";

import {
  FaPenNib,
  FaTree,
  FaCamera,
  FaLeaf,
  FaHeart,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#021B13] text-white py-36 px-6">

      {/* 🌿 BACKGROUND */}
      <div className="absolute inset-0">

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#021B13] via-[#03291E] to-[#043D2B]" />

        {/* Glow Left */}
        <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-green-500/10 blur-[180px] rounded-full" />

        {/* Glow Right */}
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-emerald-400/10 blur-[160px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:90px_90px]" />

      </div>

      {/* 🌍 CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">

          {/* TAG */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-full">

            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">

              <FaLeaf />

            </div>

            <span className="text-sm text-gray-200">
              How MemoryRoots Works
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] mt-10">

            A Simple Way To <br />

            <span className="text-green-400">
              Create A Living Legacy 🌱
            </span>

          </h2>

          {/* TEXT */}
          <p className="text-gray-300 text-xl leading-relaxed mt-10 max-w-3xl mx-auto">

            MemoryRoots allows you to honor loved ones by planting
            real trees that continue growing for generations while
            helping restore the planet.

          </p>

        </div>

        {/* 🌱 PROCESS SECTION */}
        <div className="relative mt-28">

          {/* TIMELINE */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent -translate-y-1/2" />

          {/* STEPS */}
          <div className="grid lg:grid-cols-3 gap-10 relative z-10">

            {/* STEP 1 */}
            <div className="group relative">

              {/* CARD */}
              <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-4 h-full">

                {/* STEP NUMBER */}
                <div className="absolute -top-6 left-10 w-14 h-14 rounded-full bg-green-500 text-black text-lg font-bold flex items-center justify-center shadow-2xl">
                  01
                </div>

                {/* ICON */}
                <div className="w-24 h-24 rounded-3xl bg-green-500/20 flex items-center justify-center text-green-400 text-5xl mt-6">

                  <FaPenNib />

                </div>

                {/* CONTENT */}
                <h3 className="text-4xl font-bold mt-10">
                  Add A Name ❤️
                </h3>

                <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                  Share your loved one’s name, message,
                  and create a meaningful living tribute.
                </p>

                {/* FEATURES */}
                <div className="space-y-4 mt-10">

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-green-400" />

                    <span className="text-gray-300">
                      Personal memory dedication
                    </span>
                  </div>

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-green-400" />

                    <span className="text-gray-300">
                      Permanent tribute page
                    </span>
                  </div>

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-green-400" />

                    <span className="text-gray-300">
                      Emotional legacy creation
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="group relative">

              <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-4 h-full">

                <div className="absolute -top-6 left-10 w-14 h-14 rounded-full bg-green-500 text-black text-lg font-bold flex items-center justify-center shadow-2xl">
                  02
                </div>

                <div className="w-24 h-24 rounded-3xl bg-green-500/20 flex items-center justify-center text-green-400 text-5xl mt-6">

                  <FaTree />

                </div>

                <h3 className="text-4xl font-bold mt-10">
                  We Plant 🌳
                </h3>

                <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                  Our team plants real trees in verified
                  plantation areas with full transparency.
                </p>

                <div className="space-y-4 mt-10">

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-green-400" />

                    <span className="text-gray-300">
                      Verified plantation locations
                    </span>
                  </div>

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-green-400" />

                    <span className="text-gray-300">
                      Real environmental contribution
                    </span>
                  </div>

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-green-400" />

                    <span className="text-gray-300">
                      Trusted plantation process
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="group relative">

              <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-4 h-full">

                <div className="absolute -top-6 left-10 w-14 h-14 rounded-full bg-green-500 text-black text-lg font-bold flex items-center justify-center shadow-2xl">
                  03
                </div>

                <div className="w-24 h-24 rounded-3xl bg-green-500/20 flex items-center justify-center text-green-400 text-5xl mt-6">

                  <FaCamera />

                </div>

                <h3 className="text-4xl font-bold mt-10">
                  Track Growth 📸
                </h3>

                <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                  Receive updates, plantation photos,
                  and watch your memory tree grow over time.
                </p>

                <div className="space-y-4 mt-10">

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-green-400" />

                    <span className="text-gray-300">
                      Live growth updates
                    </span>
                  </div>

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-green-400" />

                    <span className="text-gray-300">
                      Plantation photo timeline
                    </span>
                  </div>

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-green-400" />

                    <span className="text-gray-300">
                      Permanent memory archive
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 🌍 CTA SECTION */}
        <div className="mt-32 text-center">

          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-12 max-w-5xl mx-auto shadow-2xl">

            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-400 text-4xl">

              🌱

            </div>

            <h3 className="text-5xl font-bold mt-8 leading-tight">

              Every Tree Tells <br />

              A Story Of Love ❤️

            </h3>

            <p className="text-gray-300 text-xl leading-relaxed mt-8 max-w-3xl mx-auto">

              MemoryRoots transforms memories into living forests —
              helping families preserve love while helping nature heal.

            </p>

            {/* BUTTON */}
            <div className="mt-12">

              <Link
                to="/plant"
                className="group inline-flex items-center gap-4 bg-green-500 hover:bg-green-400 transition-all duration-300 px-10 py-5 rounded-full text-xl font-medium shadow-2xl hover:scale-105"
              >
                <span>Start Planting 🌱</span>

                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}