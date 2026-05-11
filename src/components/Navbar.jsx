import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaBars,
  FaTimes,
  FaLeaf,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4">

      {/* 🌍 NAV CONTAINER */}
      <div className="max-w-7xl mx-auto">

        <div
          className={`
            relative overflow-hidden
            transition-all duration-500
            border border-white/10
            backdrop-blur-2xl
            rounded-[1.8rem]
            px-6 lg:px-8 py-4
            flex items-center justify-between
            ${
              scrolled
                ? "bg-black/40 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
                : "bg-white/10"
            }
          `}
        >

          {/* 🌿 GLOW */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 blur-[80px] rounded-full" />

          {/* 🌱 LOGO */}
          <Link
            to="/"
            className="relative z-10 flex items-center gap-4 group"
          >

            {/* ICON */}
            <div className="relative">

              <div className="absolute inset-0 bg-green-500 blur-xl opacity-40 rounded-full group-hover:scale-150 transition duration-500" />

              <div className="relative w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-xl shadow-2xl group-hover:rotate-6 group-hover:scale-110 transition duration-300">

                🌱

              </div>
            </div>

            {/* TEXT */}
            <div>

              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">

                MemoryRoots

              </h1>

              <p className="text-xs text-gray-400 tracking-[0.2em] uppercase">

                Foundation

              </p>
            </div>

          </Link>

          {/* 🌍 DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10 relative z-10">

            {/* ITEM */}
            <Link
              to="/"
              className="group relative text-gray-300 hover:text-white transition text-sm tracking-wide"
            >
              Home

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-green-400 rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* ITEM */}
            <Link
              to="/plant"
              className="group relative text-gray-300 hover:text-white transition text-sm tracking-wide"
            >
              Plant Tree

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-green-400 rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* ITEM */}
            <a
              href="#mission"
              className="group relative text-gray-300 hover:text-white transition text-sm tracking-wide"
            >
              Mission

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-green-400 rounded-full transition-all duration-300 group-hover:w-full" />
            </a>

            {/* ITEM */}
            <a
              href="#impact"
              className="group relative text-gray-300 hover:text-white transition text-sm tracking-wide"
            >
              Impact

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-green-400 rounded-full transition-all duration-300 group-hover:w-full" />
            </a>

            {/* ITEM */}
            <a
              href="#contact"
              className="group relative text-gray-300 hover:text-white transition text-sm tracking-wide"
            >
              Contact

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-green-400 rounded-full transition-all duration-300 group-hover:w-full" />
            </a>

          </nav>

          {/* 🌿 RIGHT */}
          <div className="hidden lg:flex items-center gap-5 relative z-10">

            {/* SOCIALS */}
            <div className="flex items-center gap-3">

              <a className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-green-400 hover:bg-white/10 transition-all duration-300 cursor-pointer">

                <FaYoutube />

              </a>

              <a className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-green-400 hover:bg-white/10 transition-all duration-300 cursor-pointer">

                <FaFacebook />

              </a>

              <a className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-green-400 hover:bg-white/10 transition-all duration-300 cursor-pointer">

                <FaInstagram />

              </a>

            </div>

            {/* CTA */}
            <Link
              to="/plant"
              className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 transition-all duration-300 px-6 py-3 rounded-full text-sm font-medium shadow-2xl hover:scale-105"
            >

              <FaLeaf />

              <span>Plant A Tree</span>

            </Link>

          </div>

          {/* 📱 MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="relative z-10 lg:hidden w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white text-xl"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* 📱 MOBILE MENU */}
        {mobileMenu && (
          <div className="lg:hidden mt-4 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl overflow-hidden relative">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 blur-[80px] rounded-full" />

            <div className="relative z-10 flex flex-col gap-6">

              {/* LINK */}
              <Link
                to="/"
                onClick={() => setMobileMenu(false)}
                className="text-lg text-gray-200 hover:text-green-400 transition"
              >
                Home
              </Link>

              {/* LINK */}
              <Link
                to="/plant"
                onClick={() => setMobileMenu(false)}
                className="text-lg text-gray-200 hover:text-green-400 transition"
              >
                Plant Tree
              </Link>

              {/* LINK */}
              <a
                href="#mission"
                onClick={() => setMobileMenu(false)}
                className="text-lg text-gray-200 hover:text-green-400 transition"
              >
                Mission
              </a>

              {/* LINK */}
              <a
                href="#impact"
                onClick={() => setMobileMenu(false)}
                className="text-lg text-gray-200 hover:text-green-400 transition"
              >
                Impact
              </a>

              {/* LINK */}
              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="text-lg text-gray-200 hover:text-green-400 transition"
              >
                Contact
              </a>

              {/* SOCIALS */}
              <div className="flex gap-4 pt-4 border-t border-white/10">

                <a className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-green-400 transition">

                  <FaYoutube />

                </a>

                <a className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-green-400 transition">

                  <FaFacebook />

                </a>

                <a className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-green-400 transition">

                  <FaInstagram />

                </a>

              </div>

              {/* CTA */}
              <Link
                to="/plant"
                onClick={() => setMobileMenu(false)}
                className="mt-2 inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 transition-all duration-300 px-6 py-4 rounded-2xl text-lg font-medium shadow-2xl"
              >

                <FaLeaf />

                <span>Plant A Tree 🌱</span>

              </Link>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}