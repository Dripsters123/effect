import {useState} from "react";
function ToDo(props){
    
const [complete, setComplete] = useState(props.completed);
function handleChange(event){
setComplete(event.target.checked)
}
return (
    <>
<div>
<p>userId: {props.userId}</p>
<p>Id: {props.id}</p>
<p>title: {props.title}</p>
<input type="checkbox" checked={complete} onChange={handleChange}></input>
</div>
    </>
);
}
export default ToDo;