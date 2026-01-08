import { useNavigate } from "react-router-dom";

export default function Game() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-200 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">🎮 Game Page!</h1>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition"
          >🏠 Home
        </button>
      </div>
    </div>
)};
