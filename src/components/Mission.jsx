export default function Mission() {
  return (
    <section className="relative bg-gradient-to-b from-[#021B13] to-[#043D2B] text-white py-24 px-6 overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full top-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE SIDE */}
        <div className="relative">
          
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
            className="rounded-2xl shadow-xl"
          />

          {/* Floating Glass Card */}
          <div className="absolute bottom-[-20px] left-6 bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-xl">
            🌱 Growing Memories Since 2026
          </div>

        </div>

        {/* TEXT SIDE */}
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Our Mission 🌍
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            We are on a mission to reduce global warming by planting trees 
            and building emotional connections between people and nature.
          </p>

          <p className="mt-4 text-gray-400">
            Every tree we plant represents a life, a memory, and a legacy 
            that continues to grow with time.
          </p>

          {/* Highlights */}
          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-green-400">✔</span>
              <p>Real trees planted with verified locations</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-400">✔</span>
              <p>Transparent tracking & updates</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-400">✔</span>
              <p>Creating a global memory forest 🌳</p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/plant"
              className="bg-green-500 px-6 py-3 rounded-full text-lg hover:scale-105 transition inline-block"
            >
              Start Your Memory 🌱
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}