//rfce
import {useState, useEffect} from 'react'

function First() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("");

    useEffect(()=>{
        document.title= `Count : ${count}`;//updating the document title
        console.log("component rerendered!");
    },[count,name]); //empty dependency array means this useEffect will run only once when the component mounts
  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
      
    </div>
  )}
  export default First;