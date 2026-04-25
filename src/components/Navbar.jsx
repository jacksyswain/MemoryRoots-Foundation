import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <span className="inline-flex w-8 h-8 rounded-full bg-accent items-center justify-center">🌱</span>
        <h1 className="text-xl font-semibold">MemoryRoots</h1>
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/plant">Plant</Link>
        <button className="bg-accent px-4 py-2 rounded-full">
          Plant a Tree
        </button>
      </div>
    </nav>
  );
}
