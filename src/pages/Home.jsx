import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Mission from "../components/Mission.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Impact from "../components/Impact.jsx";

export default function Home() {
  return (
    <main className="bg-[#021B13] overflow-hidden text-white">

      {/* 🌿 Fixed Premium Navbar */}
      <Navbar />

      {/* 🌍 HERO SECTION */}
      <section className="relative">
        <Hero />
      </section>

      {/* 🌱 MAIN CONTENT */}
      <div className="relative z-10">

        {/* ✨ TOP GRADIENT LINE */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* 🌳 MISSION */}
        <section className="relative">
          <Mission />
        </section>

        {/* ✨ DIVIDER */}
        <div className="max-w-6xl mx-auto h-px bg-white/10" />

        {/* ⚙️ HOW IT WORKS */}
        <section className="relative">
          <HowItWorks />
        </section>

        {/* ✨ DIVIDER */}
        <div className="max-w-6xl mx-auto h-px bg-white/10" />

        {/* 📊 IMPACT */}
        <section className="relative">
          <Impact />
        </section>

      </div>

      {/* 🌿 FOOTER */}
      <footer className="relative border-t border-white/10 bg-[#01140E] px-6 py-16">

        {/* Glow */}
        <div className="absolute w-[300px] h-[300px] bg-green-500/10 blur-[100px] rounded-full bottom-0 right-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold">
              🌱 MemoryRoots
            </h2>

            <p className="text-gray-400 mt-4">
              Creating living memories through trees and nature.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>

            <div className="space-y-2 text-gray-400">
              <p className="hover:text-white transition cursor-pointer">
                Home
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Plant Tree
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Impact
              </p>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>

            <div className="space-y-2 text-gray-400">
              <p className="hover:text-white transition cursor-pointer">
                About
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Contact
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold mb-4">
              Join the Mission 🌍
            </h3>

            <p className="text-gray-400 mb-4">
              Start planting memories and make an impact today.
            </p>

            <button className="bg-green-500 px-5 py-3 rounded-full hover:scale-105 transition">
              Plant a Tree 🌱
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © 2026 MemoryRoots Foundation. All rights reserved.
        </div>
      </footer>
    </main>
  );
}