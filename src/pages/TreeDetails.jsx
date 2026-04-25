import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function TreeDetails() {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl font-bold">Tree ID: {id}</h1>
        <p className="mt-4">This page will show tree details (connect backend)</p>
      </div>
    </>
  );
}
