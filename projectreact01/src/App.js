import React, {useState} from 'react';
import Tweet from './Tweet';
import './App.css';

function App(){ 
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    {name:"tester01", message: "tester01 message"},
    {name:"tester02", message: "tester02 message"}
  ]);

  const sayHello = function() {
    alert("Hello");
    console.log("hello");
  };
  
  const increment = () =>{
    setCount(count + 1);
    setRed(!isRed);
  };

  // const getRecipes = async () => {
  //   const response = await fetch(`https://www.google.com`);
  //   const data = await response.html();
  //   console.log(data);
  // }
  return(
     <div>
       <h1>Hello React</h1>
       
       <hr />
       <Tweet name="tester01" />
       <Tweet name="tester02" />

       <hr />
       <button onClick={sayHello}>Hello</button>

       <hr />
       <h1 className={isRed ? "red": ""}>Change color</h1>
       <button onClick={increment}>Count {count} and change color</button>

       <hr />
       {users.map(user => (
         <Tweet name={user.name} />
       ))}
     </div>
  );
}

export default App;