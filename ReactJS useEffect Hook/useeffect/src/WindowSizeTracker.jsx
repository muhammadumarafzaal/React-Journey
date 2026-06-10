import {useState, useEffect} from 'react'
function WindowSizeTracker() {
    const [width,setWidth]=useState(window.innerWidth);
    

    useEffect(()=>{
        const handleResize=()=>{
            setWidth(window.innerWidth);
        }
        //adding event listener we use useEffect
        window.addEventListener('resize',handleResize);
        //clear function
        return ()=>{
             window.removeEventListener('resize',handleResize);
                console.log("Cleanup for WindowSizeTracker");

        }

        
       },[]);
  return (
    <div>
        <h2>Window width Tracker</h2>
        <p>Current Width :{width}px</p>
        
      
    </div>
  )}
  export default WindowSizeTracker;