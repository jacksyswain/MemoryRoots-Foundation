export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-b from-[#021B13] to-[#043D2B] text-white py-24 px-6 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full top-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          How It Works 🌱
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-xl mx-auto">
          A simple way to create a living memory that grows forever
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* STEP 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300 text-center">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="text-xl font-semibold">Add a Name</h3>
            <p className="text-gray-300 mt-2">
              Enter your loved one’s name and a heartfelt message
            </p>
          </div>

          {/* STEP 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300 text-center">
            <div className="text-3xl mb-4">🌳</div>
            <h3 className="text-xl font-semibold">We Plant</h3>
            <p className="text-gray-300 mt-2">
              Our team plants a real tree on your behalf
            </p>
          </div>

          {/* STEP 3 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300 text-center">
            <div className="text-3xl mb-4">📸</div>
            <h3 className="text-xl font-semibold">Track Growth</h3>
            <p className="text-gray-300 mt-2">
              Receive updates and watch your tree grow 🌿
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}