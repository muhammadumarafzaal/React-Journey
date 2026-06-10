//shortcut rfce

import {useState} from 'react'
// multiple states
function InputExample() {
    const [name,setName] = useState("");
 
  return (
    <div>
        <input type="text" value={name} placeholder=''  onChange={(e)=> setName(e.target.value)}/>
        <p>Hello , {name || "Guest"}</p>
      
    </div>
  )
}

export default InputExample

