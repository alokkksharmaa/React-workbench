import { useNavigate } from 'react-router-dom';

function Game() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-300 flex flex-col items-center justify-center gap-8">
      <h1 className="text-5xl font-bold">🎮 Game Page!</h1>
      <button 
        onClick={() => navigate(-1)} 
        className="bg-red-500 px-6 py-4 rounded text-white text-2xl"
      >
        ← Go Back
      </button>
      <button 
        onClick={() => navigate('/')} 
        className="bg-blue-500 px-6 py-4 rounded text-white text-2xl"
      >
        Go Home
      </button>
    </div>
  );
}

export default Game;