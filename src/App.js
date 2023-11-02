import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import Comment from "./Comment";

function App() {
  const [toDo, setToDo] = useState({});
  const [loading, setLoading] = useState(true);
 
  useEffect(() =>{
    async function getToDo(){
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await  response.json();
      setToDo(data);
      setLoading(false);
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
    <Comment />
    {loading ? <p>Loading...</p> : <ToDo {...toDo}/>}
    </>
   
  );
}

export default App;
