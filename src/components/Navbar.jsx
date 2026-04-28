import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      
      {/* Glass Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center 
        bg-white/10 backdrop-blur-xl border border-white/10 
        rounded-2xl px-6 py-3 shadow-lg">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex w-9 h-9 rounded-full bg-green-500 items-center justify-center text-lg shadow">
            🌱
          </span>
          <h1 className="text-lg font-semibold text-white tracking-wide">
            MemoryRoots
          </h1>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-8 items-center text-sm text-gray-200">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/plant" className="hover:text-white transition">Plant</Link>
          <a href="#" className="hover:text-white transition">Impact</a>
          <a href="#" className="hover:text-white transition">About</a>
        </div>

        {/* CTA BUTTON */}
        <Link
          to="/plant"
          className="bg-green-500 px-5 py-2 rounded-full text-sm font-medium 
          hover:scale-105 hover:bg-green-400 transition"
        >
          Plant a Tree 🌱
        </Link>
      </div>
    </header>
  );
}