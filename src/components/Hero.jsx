import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#021B13] via-[#043D2B] to-[#065F46] text-white overflow-hidden flex items-center">

      {/* 🌿 Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-emerald-400/10 blur-[100px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* 🌐 Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Plant a Living <br />
            Memory 🌱
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            Honor your loved ones by planting a tree in their name.
            A living tribute that grows with time and nature.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <Link
              to="/plant"
              className="bg-green-500 px-6 py-3 rounded-full text-lg hover:scale-105 transition"
            >
              Plant Now
            </Link>

            <button className="border border-white/40 px-6 py-3 rounded-full hover:bg-white/10 transition">
              Learn More
            </button>
          </div>

          {/* 📊 Stats */}
          <div className="flex gap-10 mt-12 text-sm">
            <div>
              <h3 className="text-2xl font-bold">10K+</h3>
              <p className="text-gray-400">Trees Planted</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">5K+</h3>
              <p className="text-gray-400">Families</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">20+</h3>
              <p className="text-gray-400">Cities</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* 🌟 Glass Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">

            <h2 className="text-lg font-semibold mb-4">
              🌱 Live Tree Updates
            </h2>

            <div className="space-y-4">

              <div className="bg-white/10 p-4 rounded-xl">
                <h3 className="font-semibold">Ramesh Swain</h3>
                <p className="text-sm text-gray-300">
                  Hyderabad • Planted April 2026
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                <h3 className="font-semibold">Anita Devi</h3>
                <p className="text-sm text-gray-300">
                  Bangalore • Growing 🌿
                </p>
              </div>

            </div>
          </div>

          {/* 🌿 Floating Images */}
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            className="absolute -top-10 -right-10 w-40 h-40 object-cover rounded-xl shadow-lg hidden md:block"
          />

          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
            className="absolute -bottom-10 -left-10 w-40 h-40 object-cover rounded-xl shadow-lg hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}