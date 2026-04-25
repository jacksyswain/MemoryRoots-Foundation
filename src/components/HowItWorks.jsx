export default function HowItWorks() {
  return (
    <section className="bg-primary text-white px-10 py-20">
      <h2 className="text-3xl font-bold text-center">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="text-center">
          <h3 className="text-xl font-semibold">1. Add a Name</h3>
          <p className="text-gray-300 mt-2">Enter your loved one’s name and message</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">2. We Plant</h3>
          <p className="text-gray-300 mt-2">We plant a real tree on your behalf</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">3. Track</h3>
          <p className="text-gray-300 mt-2">Get updates and see growth</p>
        </div>
      </div>
    </section>
  );
}
