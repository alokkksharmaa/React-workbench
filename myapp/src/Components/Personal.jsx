var name = "Alok Sharma";
const branch = "CSE";
const RegstrationNo = 12317981;
var email = "aloksharma1097@gmail.com";

//  Mark -- used for highlighting the text
function Display() {
  return (
    <p>
      Hi , My Name is <b>{name}</b> from <mark>{branch}</mark> having Regstration No:{" "}
      <i>{RegstrationNo}</i> and Email is: <u>{ email}</u>
    </p>
  );
}

export default Display;
