import {useEffect, useState} from "react";
function Comment(){
const [comment, setComment] = useState({});
const [loading, setLoading] = useState(true);

useEffect(() =>{
    async function getcomment(){
      const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
      const data = await  response.json();
      setComment(data);
      setLoading(false);
    };
    getcomment();
    
  }, []);

    return(
        <>
    <p>postId: {comment.postId}</p>
    <p>Id: {comment.id}</p>
    <p>name: {comment.name}</p>
    <p>email: {comment.email}</p>
    <p>body: {comment.body}</p>
        </>
    )
}
export default Comment;