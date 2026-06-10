//rfce
import {useState, useEffect} from 'react'

function Timer() {
    const [seconds,setSeconds]=useState(0);
    

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds((prev)=>prev+1);
        },1000);
        return ()=>{
            clearInterval(interval); //cleanup to avoid memory leaks
            console.log("Timer Cleaned Up");
        }
       },[]);
  return (
    <div>
        <h2>Seconds : {seconds}</h2>
        
      
    </div>
  )}
  export default Timer;