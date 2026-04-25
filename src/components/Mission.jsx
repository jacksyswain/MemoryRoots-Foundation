export default function Mission() {
  return (
    <section className="bg-white px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
      <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" className="rounded-xl"/>
      <div>
        <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
        <p className="mt-4 text-gray-600">
          We aim to reduce global warming by planting trees and creating emotional connections between people and nature.
        </p>
        <p className="mt-4 text-gray-600">
          Every tree planted is a memory that lives forever.
        </p>
      </div>
    </section>
  );
}
