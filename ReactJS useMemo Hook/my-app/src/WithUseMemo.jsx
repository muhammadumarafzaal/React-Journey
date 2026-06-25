import {useState,useMemo} from 'react'

function WithUseMemo() {
    const[count,setCount] = useState(0)
    const[text,setText] = useState("")

    const expensiveCalculation=(num)=>{
        console.log("Expensive calculation is running...")
        let total=0;
        for(let i=0;i<1000000000;i++){
            total+=i;
        }
        return total + num;
    }
    const result=useMemo(()=>expensiveCalculation(count),[count])
  return (
    <div>
        <h2>result: {result}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something..." />
         <p>Count: {count}</p>
    </div>
  )
}

export default WithUseMemo
