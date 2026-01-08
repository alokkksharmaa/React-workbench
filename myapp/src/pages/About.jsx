import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-indigo-200 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-semibold">About Page</h1>
        <p className="text-xl">Alok</p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition"
          >
            ← Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
