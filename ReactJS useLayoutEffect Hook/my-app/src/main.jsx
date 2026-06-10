import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import Test from './Test'
// import Example1 from './Example1'
// import Example2 from './Example2'
import ChatScroll from './chat'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Test /> */}
    {/* <Example2 /> */}
    <ChatScroll />
  </StrictMode>,
)
