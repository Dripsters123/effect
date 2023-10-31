import { useEffect, useState } from "react";
import ToDo from "./ToDo";

function App() {
  const [toDo, setToDo] = useState({});
  
 
  useEffect(() =>{
    async function getToDo(){
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await  response.json();
      setToDo(data);
    };
    getToDo();
  }, []);


  // const toDo = {
  //   userId: 1,
  //   id:1,
  //   title:"delectus aut autem",
  //   completed:false,
  // };

  return (
    <>
    
    <ToDo {...toDo}/>
    </>
   
  );
}

export default App;
