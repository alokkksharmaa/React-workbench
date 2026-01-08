import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-500">
      <h1 className="text-3xl font-bold">Welcome Home Page</h1>

      <div>
        <button onClick={() => navigate("/game")}>Game</button>

        <button onClick={() => navigate("/about")}> About Me!</button>
      </div>
    </div>
  );
}
