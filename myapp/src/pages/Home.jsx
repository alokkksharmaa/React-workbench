import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-300 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">
          🏠 Welcome Home!
        </h1>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/about")}
            className="px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition"
          >
            😎About Me!
          </button>

          <button
            onClick={() => navigate("/game")}
            className="px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition"
          >
            🎮 Game Page!
          </button>
        </div>
      </div>
    </div>
  );
}
