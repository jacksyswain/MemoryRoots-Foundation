import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4">

      {/* 🌿 NAV CONTAINER */}
      <div className="max-w-7xl mx-auto">

        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 
          rounded-2xl shadow-2xl px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition">
              🌱
            </div>

            <div>
              <h1 className="text-lg md:text-xl font-bold text-white tracking-wide">
                MemoryRoots
              </h1>

              <p className="text-xs text-gray-400">
                Foundation
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">

            <Link
              to="/"
              className="text-gray-300 hover:text-white transition relative group"
            >
              Home

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/plant"
              className="text-gray-300 hover:text-white transition relative group"
            >
              Plant Tree

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full" />
            </Link>

            <a
              href="#impact"
              className="text-gray-300 hover:text-white transition relative group"
            >
              Impact

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#mission"
              className="text-gray-300 hover:text-white transition relative group"
            >
              Our Mission

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full" />
            </a>

          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4">

            {/* SOCIALS */}
            <div className="flex items-center gap-3 text-gray-300">

              <a className="hover:text-green-400 transition cursor-pointer">
                <FaYoutube />
              </a>

              <a className="hover:text-green-400 transition cursor-pointer">
                <FaFacebook />
              </a>

              <a className="hover:text-green-400 transition cursor-pointer">
                <FaInstagram />
              </a>

            </div>

            {/* CTA */}
            <Link
              to="/plant"
              className="bg-green-500 hover:bg-green-400 
              text-white px-5 py-2.5 rounded-full text-sm font-medium
              transition hover:scale-105 shadow-lg"
            >
              Plant a Tree 🌱
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white text-2xl"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* 📱 MOBILE MENU */}
        {mobileMenu && (
          <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-xl">

            <div className="flex flex-col gap-5 text-gray-200">

              <Link
                to="/"
                className="hover:text-green-400 transition"
                onClick={() => setMobileMenu(false)}
              >
                Home
              </Link>

              <Link
                to="/plant"
                className="hover:text-green-400 transition"
                onClick={() => setMobileMenu(false)}
              >
                Plant Tree
              </Link>

              <a
                href="#impact"
                className="hover:text-green-400 transition"
                onClick={() => setMobileMenu(false)}
              >
                Impact
              </a>

              <a
                href="#mission"
                className="hover:text-green-400 transition"
                onClick={() => setMobileMenu(false)}
              >
                Our Mission
              </a>

              {/* SOCIALS */}
              <div className="flex gap-5 text-xl pt-4 border-t border-white/10">

                <a className="hover:text-green-400 transition cursor-pointer">
                  <FaYoutube />
                </a>

                <a className="hover:text-green-400 transition cursor-pointer">
                  <FaFacebook />
                </a>

                <a className="hover:text-green-400 transition cursor-pointer">
                  <FaInstagram />
                </a>

              </div>

              {/* CTA */}
              <Link
                to="/plant"
                className="mt-4 bg-green-500 hover:bg-green-400 
                text-center py-3 rounded-xl font-medium transition"
                onClick={() => setMobileMenu(false)}
              >
                Plant a Tree 🌱
              </Link>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}