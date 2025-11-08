
import UserCard from "./Components/usercard";
import Rajaram from "./assets/rajaram.jpg";
import Maharanapratap from "./assets/maharana.jpg";
import Chhatrapatishivaji from "./assets/shivaji.jpg";

function App() {
  return (
    <div className="container">
      <UserCard
        name="Chhatrapatishivaji"
        desc="desc1"
        img={Chhatrapatishivaji}
        style={{ borderRadius: "10px" }}
      />
      <UserCard
        name="Maharanapratap"
        desc="desc2"
        img={Maharanapratap}
        style={{ borderRadius: "10px" }}
      />
      <UserCard
        name="Rajaram"
        desc="desc3"
        img={Rajaram}
        style={{
          borderRadius: "12px",
          width: "200px",
          height: "350px",
          objectFit: "cover",
          marginBottom: "1rem",
        }}
      />
    </div>
  );
}

export default App;
