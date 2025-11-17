// function App() {
  //   class Parent{
  //     show(){
  //       return "Parent Class Method";
  //     }
  //   }
  //   class Child extends Parent{
  //     show(){
  //       super.show();
  //       return "Child Class Method";
  //     }
  //   }
  //   var ob = new Child();
  //   return (
  //     <>
  //     <h1>Output</h1>
  //     <p>{ob.show()}</p>
  //     </>
  //   )
  // }
  
  // -------- USE OF Function -------
  
  // function App() {
  //   class ABC {
  //     display() {
  //       return "This method contains ABC class";
  //     }
  //   }
  
  //   class XYZ extends ABC {
  //     display() {
  //       return super.display() + " and extended by XYZ";
  //     }
  //   }
  //   var obj = new XYZ();
  
  //   return (
  //     <>
  //       <p>{obj.display()}</p>
  //     </>
  //   );
  // }
  // export default App;
  
  //  ---------ARROW FUNCTION-----------
  // const sum = (a, b) => a + b;
  // const square = (x) => x * x;
  
  // function App() {
  //   const add = (a, b) => a + b;
  //   const sub = (a, b) => a - b;
  //   const mul = (a, b) => a * b;
  //   const div = (a, b) => a / b;
  //   const sqr = (x) => x * x;
  
  //   const a = 10;
  //   const b = 5;
  
  //   return (
  //     <>
  //       <p>Addition: {add(a, b)}</p>
  //       <p>Subtraction: {sub(a, b)}</p>
  //       <p>Multiplication: {mul(a, b)}</p>
  //       <p>Division: {div(a, b)}</p>
  //       <p>Square of {a}: {sqr(a)}</p>
  //       <p>Square of {b}: {sqr(b)}</p>
  //     </>
  //   );
  // }
  
  
  // export default App;
  
  // function App(){
  
  // const age=[20,17,24,34,45];
  // const adult=age.filter(n => n >= 18);
  
  //   return (
  
  //     <>
  //     <p>{adult+" "}</p>
  //     </>
  //   )
  // }
  
  // export default App
  
  //Use of Arrow Function
  
  // function App(){
  //   const addAndMultiply1 =  (a,b) => (c,d) => (a+b) * (c+d);
  //   const result  = (a,b) => (c) => (d) =>  (a+b) *c/d;
  
  //   return(
  //     <>
  //     <p>{addAndMultiply1(5,7) (8,6)}</p>
  //     <p>{result(2,3)(9) (12)}</p>
  //     </>
  //   )
  // }
  // export default App
  
  // function App(){
  //   const array1 = [3,45,6,24,57,2];
  //   const result =  array1.every(x=>x>0);
  //     return (
  //       <>
  //       <p>The Value of Result: {result.toString()}</p>
  //       </>
  //     )
  // }
  // export default App
  
  // function App() {
  
  // const age = [19, 20, 18, 43];
  // const result1 = age.every((x) => x >= 18);
  // const marks = [28, 29, 26, 27, 7, 16];
  // const result2 = marks.every((y) => y >= 15);
  
  // Find Keyword USE
  // const str = ["Ram", "Shyam", "Raghav", "Rohny", "Vishal", "Ravi"];
  // const result1 = str.find((x) => x == "Shyam");
  
  //   const students= [
  //     {id: 1, name:"Ram", age:25},
  //     {id: 2, name:"Shyam", age:35},
  //     {id: 3, name:"Ravi", age:15},
  //     {id: 4, name:"Vishan", age:28}
  // ]
  
  // const adult = students.find(student => student.age >= 18);
  
  // students.forEach(student=>{
  //   console.log(`${student.name} is ${student.age} years old`);
  //   });
  
  // const friends = [
  //   { name: "Amit's",   Reg: 1234432, branch: "CSE" },
  //   { name: "Ram's",    Reg: 1324536, branch: "ME" },
  //   { name: "Shyam's",  Reg: 1124352, branch: "CIVIL" },
  //   { name: "Ravi's",   Reg: 1233243, branch: "IT" },
  //   { name: "Raghav's", Reg: 1233242, branch: "ECE" },
  //   { name: "Aman's",   Reg: 1232552, branch: "ELECTRICAL" },
  // ];
  
  // friends.forEach((friends) => {
  //   console.log(
  //     `${friends.name} Regstration No is: ${friends.Reg} and branch is: ${friends.branch}`
  //   );
  // });
  
  // const letters = Array.from("React");
  // const nubers =  Array.from {(length : 105), (_, )
  
  // const numbers = [23,65,3,47,5,7];
  // const reversed =  [...numbers].reverse();
  
  // const letters = ['a', 'b', 'c' , 'd', 'e'];
  // const reverse =  [...letters].reverse();
  
  // const num1 = [1,2,3,4,5,6];
  // const num2 = [7,8,9,10,11,12];
  // const newArray =  [200,...num1,300, 301,...num2];
  // const revArr  =  [...newArray].reverse();
  // const num1 = [2,23,24,56,32,87];
  // const reve1 =  [...letters].concat();
  
  // const mix =  [...numbers, ...letters];
  // const mix = letters.concat(...numbers);
  
  // var name = ["Raju", "Naman", "ravi" , "mohan","Naman", "Ravi" ,"Mohan","Naman", "Ravi" ];
  // var uniquename = Array.from(new Set(name));
  // uniquename.sort();
  
  // return (
  //   <>
  //   {/* <p> The Value of Result: {result1.toString()}</p>
  //   <p> The Value of Result: {result2.toString()}</p> */}
  //   {/*
  //   <p>The name in the list is: {result1.toString()}</p> */}
  
  //   {/*
  //   <p>First Adult Student: {adult?adult.name: "None found"} </p>
  //   <p>First Student Id: {adult?adult.id: "None found"} </p> */}
  
  //   {/* <h4>The Values in the Array are:</h4>
  //   {/* <ul>
  //     {letters.map((ch, i) => (
  //       <li key={i}>{ch}</li>
  //     ))}
  //   </ul> */}
  // {/* </>  */}
  //
  //     <p>The Original Array: {numbers.join(" , ")}</p>
  //     <p>The Reversed Array: {reversed.join(" , ")}</p>
  
  //     <p>Array Before reversing: {letters.join(",")}</p>
  //     <p>Array after reversing: {reverse.join(" , ")}</p>
  
  //     <p>The Merged Array & Characters: {mix.join(" , ")}</p>
  
  //     <p>The Original Array: {newArray.join("|")}</p>
  
  //     <p>The Reversed Array: {revArr.join("|")}</p>
  
  //     {uniquename.map(num => (
  //       <p key= {num} > {num}</p>
  //     ))}
  //       </>
  
  //   );
  // }
  
  // import { PI,add, sub, mul, div, rem } from "./math";
  // function App() {
  //   // const data = [43, 65, 300];
  //   // const [x = 30, y = 100, z = 433] = data;
  
  //   return (
  //     <>
  //       <p> The Sum of two Number is: {add(24, 56)} </p>;
  //       <p> The sub of two Number is: {sub(24, 56)} </p>;
  //       <p> The Mul of two Number is: {mul(24, 56)} </p>;
  //       <p> The Div of two Number is: {div(24, 56)} </p>;
  //       <p> The Rem of two Number is: {rem(24, 56)} </p>
  
  //     </>
  //   );
  // }
  
  // import Greeting from "./Greetings";
  // GGretings
  // function App() {
  //   return(
  //   <>
  
  //     <p>Hello</p>
  //     <Greeting />
  
  //   </>
  // )}
  
  // export default App;
  // import Footer from './footer';
  // import Display from './personal';
  
  // function App() {
  //   return (
  //     <>
  //       <Display/>
  //     </>
  //   );
  // }
  
  // import "./App.css";
  // import Header from "./header";
  // import Footer from "./footer";
  // export default App;
  
  // function App() {
  //   return (
  //     <>
  //       <Header />
  //       <Footer />
  //     </>
  //   );
  // }
  
  // import Login from './Login';

  function App() {
    return (
      <>
        <Calculator/>
      </>
    );
  }
  
  export default App;
  

  

  
  function Footer() {
    return   <p><b>&copy;</b>Hello I am Footer</p>
  }