//shortcut rfce

import {useState} from 'react'

function ToggleText() {
    const [isVisible,setIsVisible] = useState(false);

  return (
    <div>
        <button onClick={()=>setIsVisible(!isVisible)}>
            {isVisible ? "Hide Text" : "Show Text"} 
        </button>
        {isVisible && <p> hi my name is umar how you are feeeling.</p>}
      
    </div>
  )
}

export default ToggleText

