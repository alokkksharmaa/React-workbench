import {useNavigation} from "react-router-dom"

export default function About () {
  const navigate = useNavigation();
  return(
    <div className="min-h-screen bg-green-400  flex items-center justify-center">
      <h1 className="text-red-300 font-bold">About Me!</h1>

      <div>
        <button onClick={() => navigate(-1)}>Back</button>

        <button onClick={() => navigate("/")}> Home!</button>
      </div>
    </div>
  )
};