import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-[#021B13] text-white overflow-hidden">
      <Navbar />

      <section className="relative pt-40 pb-28 px-6">
        <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-green-500/10 blur-[180px] rounded-full" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

          <div>
            <span className="bg-green-500/20 border border-green-500/20 text-green-300 px-5 py-2 rounded-full text-sm">
              🌱 Our Story
            </span>

            <h1 className="text-6xl font-bold leading-tight mt-8">
              More Than Trees —
              <span className="text-green-400 block mt-2">
                We Preserve Memories
              </span>
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed mt-8">
              MemoryRoots was born from one emotional idea:
              what if memories could continue living through nature?
            </p>

            <p className="text-gray-400 leading-relaxed mt-6 text-lg">
              We wanted to create a platform where people can honor loved ones
              while helping heal the Earth. Every plantation becomes a living
              tribute filled with emotion, remembrance, and hope.
            </p>

            <div className="mt-10 flex gap-5 flex-wrap">
              <Link
                to="/plant"
                className="bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-full text-lg font-medium"
              >
                Start Planting 🌱
              </Link>

              <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
              className="rounded-[2.5rem] h-[750px] w-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}