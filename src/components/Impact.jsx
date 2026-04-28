export default function Impact() {
  return (
    <section className="relative bg-gradient-to-b from-[#043D2B] to-[#021B13] text-white py-24 px-6 overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full bottom-[-100px] left-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold">
          Our Impact 🌍
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Every tree planted is a step towards a greener future
        </p>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {/* CARD */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-4xl font-bold text-green-400">10K+</h3>
            <p className="text-gray-300 mt-2">Trees Planted</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-4xl font-bold text-green-400">5K+</h3>
            <p className="text-gray-300 mt-2">Families Impacted</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-4xl font-bold text-green-400">20+</h3>
            <p className="text-gray-300 mt-2">Cities Covered</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-4xl font-bold text-green-400">100%</h3>
            <p className="text-gray-300 mt-2">Transparency</p>
          </div>

        </div>

        {/* Optional CTA */}
        <div className="mt-16">
          <a
            href="/plant"
            className="bg-green-500 px-6 py-3 rounded-full text-lg hover:scale-105 transition inline-block"
          >
            Be Part of the Change 🌱
          </a>
        </div>

      </div>
    </section>
  );
}