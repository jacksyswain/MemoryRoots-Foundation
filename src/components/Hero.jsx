export default function Hero() {
  return (
    <section className="bg-primary text-white px-10 py-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Plant a Living Memory 🌱
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Honor your loved ones by planting a tree in their name. Let their memory grow forever.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="/plant" className="bg-accent px-6 py-3 rounded-full text-lg">
            Plant Now
          </a>
          <button className="border border-white px-6 py-3 rounded-full">
            Learn More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" className="rounded-xl h-48 object-cover"/>
        <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6" className="rounded-xl h-48 object-cover"/>
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" className="rounded-xl col-span-2 h-60 object-cover"/>
      </div>
    </section>
  );
}
