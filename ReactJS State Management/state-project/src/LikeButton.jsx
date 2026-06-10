//shortcut rfce

import {useState} from 'react'

function LikeButton() {
    const [liked,setLiked] = useState(false);

  return (
    <div>
        <button onClick={()=>setLiked(!liked)}>
            {/* icon windows + . */}
            {liked ? "❤ liked" : "😒 Unliked"} 
        </button>
        
      
    </div>
  )
}

export default LikeButton

