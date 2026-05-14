import Navbar from "../components/Navbar";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLeaf,
  FaArrowRight,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#021B13] text-white overflow-hidden">
      <Navbar />

      <section className="relative pt-40 pb-32 px-6 overflow-hidden">

        {/* 🌿 BACKGROUND */}
        <div className="absolute inset-0">

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#021B13] via-[#03291E] to-[#043D2B]" />

          {/* Glow */}
          <div className="absolute top-[-250px] left-[-250px] w-[700px] h-[700px] bg-green-500/10 blur-[180px] rounded-full" />

          <div className="absolute bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-emerald-400/10 blur-[180px] rounded-full" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
            linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:90px_90px]"
          />
        </div>

        {/* 🌍 CONTAINER */}
        <div className="relative z-10 max-w-7xl mx-auto">

          {/* HERO */}
          <div className="text-center max-w-4xl mx-auto">

            {/* BADGE */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-full">

              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">

                <FaLeaf />

              </div>

              <span className="text-sm text-gray-200">
                Contact MemoryRoots Foundation
              </span>

            </div>

            {/* TITLE */}
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mt-10">

              Let’s Grow Hope <br />

              <span className="text-green-400">
                Together 🌍
              </span>

            </h1>

            {/* TEXT */}
            <p className="text-xl text-gray-300 leading-relaxed mt-10 max-w-3xl mx-auto">

              Whether you want to plant memories, volunteer,
              collaborate, or support our environmental mission —
              we’d love to hear from you.

            </p>
          </div>

          {/* 🌱 MAIN GRID */}
          <div className="grid lg:grid-cols-2 gap-16 mt-24">

            {/* LEFT SIDE */}
            <div>

              {/* CONTACT CARDS */}
              <div className="space-y-8">

                {/* EMAIL */}
                <div className="group relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-2">

                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 blur-[80px] rounded-full" />

                  <div className="relative z-10 flex items-start gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">

                      <FaEnvelope />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        Email Support
                      </h3>

                      <p className="text-gray-400 mt-3 leading-relaxed">
                        For support, collaborations, partnerships,
                        and general inquiries.
                      </p>

                      <p className="text-green-400 mt-5 text-lg font-medium">
                        hello@memoryroots.org
                      </p>

                    </div>
                  </div>
                </div>

                {/* PHONE */}
                <div className="group relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-2">

                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />

                  <div className="relative z-10 flex items-start gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">

                      <FaPhoneAlt />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        Call Us
                      </h3>

                      <p className="text-gray-400 mt-3 leading-relaxed">
                        Available for plantation support,
                        CSR partnerships, and NGO collaborations.
                      </p>

                      <p className="text-green-400 mt-5 text-lg font-medium">
                        +91 98765 43210
                      </p>

                    </div>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="group relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-2">

                  <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full" />

                  <div className="relative z-10 flex items-start gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">

                      <FaMapMarkerAlt />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        Our Location
                      </h3>

                      <p className="text-gray-400 mt-3 leading-relaxed">
                        MemoryRoots Foundation Headquarters.
                      </p>

                      <p className="text-green-400 mt-5 text-lg font-medium">
                        Hyderabad, India
                      </p>

                    </div>
                  </div>
                </div>

              </div>

              {/* 🌍 SOCIAL SECTION */}
              <div className="relative overflow-hidden mt-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">

                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 blur-[80px] rounded-full" />

                <div className="relative z-10">

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">

                      <FaGlobe />

                    </div>

                    <div>

                      <h3 className="text-3xl font-bold">
                        Follow Our Journey 🌱
                      </h3>

                      <p className="text-gray-400 mt-2">
                        Watch real plantations and impact stories.
                      </p>

                    </div>
                  </div>

                  {/* SOCIAL ICONS */}
                  <div className="flex gap-5 mt-10">

                    <a className="group w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:text-red-400 hover:bg-white/15 transition-all duration-300 cursor-pointer">

                      <FaYoutube className="group-hover:scale-110 transition" />

                    </a>

                    <a className="group w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:text-blue-400 hover:bg-white/15 transition-all duration-300 cursor-pointer">

                      <FaFacebook className="group-hover:scale-110 transition" />

                    </a>

                    <a className="group w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:text-pink-400 hover:bg-white/15 transition-all duration-300 cursor-pointer">

                      <FaInstagram className="group-hover:scale-110 transition" />

                    </a>

                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 blur-[90px] rounded-full" />

              <div className="relative z-10">

                {/* TITLE */}
                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">

                    <FaHandsHelping />

                  </div>

                  <div>

                    <h2 className="text-4xl font-bold">
                      Send A Message ✨
                    </h2>

                    <p className="text-gray-400 mt-2">
                      Let’s create something meaningful together.
                    </p>

                  </div>
                </div>

                {/* FORM */}
                <form className="space-y-6 mt-10">

                  <div>
                    <label className="block text-gray-300 mb-3">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-3">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-3">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="Write a subject"
                      className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-3">
                      Message
                    </label>

                    <textarea
                      rows="7"
                      placeholder="Write your message..."
                      className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 transition resize-none"
                    />
                  </div>

                  {/* BUTTON */}
                  <button className="group inline-flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-400 transition-all duration-300 py-5 rounded-2xl text-lg font-medium shadow-2xl hover:scale-[1.02]">

                    <span>Send Message 🌱</span>

                    <FaArrowRight className="group-hover:translate-x-1 transition" />

                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* 🌿 BOTTOM CTA */}
          <div className="mt-28">

            <div className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-14 text-center max-w-6xl mx-auto shadow-2xl">

              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-green-500/10 blur-[120px] rounded-full" />

              <div className="relative z-10">

                <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center text-5xl mx-auto">

                  🌱

                </div>

                <h2 className="text-5xl font-bold leading-tight mt-10">

                  Together We Can <br />

                  Heal The Planet 🌍

                </h2>

                <p className="text-xl text-gray-300 leading-relaxed mt-8 max-w-3xl mx-auto">

                  MemoryRoots is more than a platform —
                  it’s a mission to preserve memories while restoring nature.

                </p>

                <button className="mt-12 bg-green-500 hover:bg-green-400 transition-all duration-300 px-10 py-5 rounded-full text-xl font-medium shadow-2xl hover:scale-105">

                  Join The Mission 🌱

                </button>

              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}