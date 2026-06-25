import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import WithOutUseMemo from './WithOutUseMemo'
// import WithUseMemo from './WithUseMemo'
import Parent from './Parent'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <WithOutUseMemo /> */}
    {/* <WithUseMemo /> */}
    <Parent />

  </StrictMode>,
)
