import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Mission from "../components/Mission.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Impact from "../components/Impact.jsx";

export default function Home() {
  return (
    <main className="bg-[#021B13] overflow-hidden text-white">

      {/* 🌿 NAVBAR */}
      <Navbar />

      {/* 🌍 HERO */}
      <Hero />

      {/* ✨ DIVIDER */}
      <div className="max-w-7xl mx-auto h-px bg-white/10" />

      {/* 🌱 OUR VISION */}
      <section className="relative py-28 px-6">

        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
              className="rounded-3xl shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4">
              🌱 Building a Global Memory Forest
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/20">
              🌍 Our Vision
            </span>

            <h2 className="text-5xl font-bold leading-tight mt-6">
              Why We Started <br />
              MemoryRoots
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              MemoryRoots Foundation was created to connect emotion,
              remembrance, and environmental impact together.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Every year, millions of trees disappear while global warming
              continues to rise. We wanted to build a platform where
              people can honor their loved ones while also healing the Earth.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              A tree planted in memory becomes more than just a plant —
              it becomes a living legacy that grows forever.
            </p>

          </div>
        </div>
      </section>

      {/* ✨ DIVIDER */}
      <div className="max-w-7xl mx-auto h-px bg-white/10" />

      {/* 🌳 WHY TREES MATTER */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-[#021B13] to-[#043D2B]">

        <div className="max-w-7xl mx-auto text-center">

          <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/20">
            🌱 Save Nature
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Why Planting Trees Matters
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Trees absorb carbon dioxide, reduce pollution, improve air quality,
            support wildlife, and help fight climate change.
          </p>

          {/* BENEFITS */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="text-5xl">🌍</div>

              <h3 className="text-2xl font-semibold mt-5">
                Reduce Global Warming
              </h3>

              <p className="text-gray-400 mt-4">
                Trees absorb harmful carbon emissions and cool the planet.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="text-5xl">💨</div>

              <h3 className="text-2xl font-semibold mt-5">
                Improve Air Quality
              </h3>

              <p className="text-gray-400 mt-4">
                Trees produce oxygen and reduce harmful pollutants.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="text-5xl">🐦</div>

              <h3 className="text-2xl font-semibold mt-5">
                Protect Ecosystems
              </h3>

              <p className="text-gray-400 mt-4">
                Forests support wildlife and preserve biodiversity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ✨ DIVIDER */}
      <div className="max-w-7xl mx-auto h-px bg-white/10" />

      {/* 🌳 EXISTING COMPONENTS */}
      <Mission />

      <div className="max-w-7xl mx-auto h-px bg-white/10" />

      <HowItWorks />

      <div className="max-w-7xl mx-auto h-px bg-white/10" />

      {/* 📸 TRACK YOUR TREE */}
      <section className="relative py-28 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* CONTENT */}
          <div>

            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/20">
              📸 Live Tracking
            </span>

            <h2 className="text-5xl font-bold mt-6 leading-tight">
              Track Your <br />
              Plantation Journey
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Once your tree is planted, you’ll receive updates,
              growth photos, and plantation details.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  📍
                </div>

                <p>Verified plantation location</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  📸
                </div>

                <p>Real growth photos & updates</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  🌱
                </div>

                <p>Permanent memory page</p>
              </div>

            </div>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ✨ DIVIDER */}
      <div className="max-w-7xl mx-auto h-px bg-white/10" />

      {/* 📊 IMPACT */}
      <Impact />

      {/* 🌿 FOOTER */}
      <footer className="relative border-t border-white/10 bg-[#01140E] px-6 py-20">

        <div className="absolute w-[300px] h-[300px] bg-green-500/10 blur-[100px] rounded-full bottom-0 right-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold">
              🌱 MemoryRoots
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Creating living memories through trees and nature.
              Together, we can build a greener future.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6 text-xl">

              <a className="bg-white/10 p-3 rounded-full hover:bg-green-500 transition cursor-pointer">
                <FaYoutube />
              </a>

              <a className="bg-white/10 p-3 rounded-full hover:bg-green-500 transition cursor-pointer">
                <FaFacebook />
              </a>

              <a className="bg-white/10 p-3 rounded-full hover:bg-green-500 transition cursor-pointer">
                <FaInstagram />
              </a>

              <a className="bg-white/10 p-3 rounded-full hover:bg-green-500 transition cursor-pointer">
                <FaEnvelope />
              </a>

            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Platform
            </h3>

            <div className="space-y-3 text-gray-400">
              <p className="hover:text-white transition cursor-pointer">
                Home
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Plant Tree
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Track Tree
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Impact
              </p>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Company
            </h3>

            <div className="space-y-3 text-gray-400">
              <p className="hover:text-white transition cursor-pointer">
                About Us
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Contact
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Terms & Conditions
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>

            <h3 className="font-semibold text-lg mb-5">
              Join Our Mission 🌍
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Start planting memories and help us heal the planet.
            </p>

            <button className="mt-6 bg-green-500 px-6 py-3 rounded-full hover:scale-105 transition">
              Plant a Tree 🌱
            </button>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="relative z-10 mt-16 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © 2026 MemoryRoots Foundation. All rights reserved.
        </div>
      </footer>
    </main>
  );
}