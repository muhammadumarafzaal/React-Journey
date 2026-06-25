import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Test from './Test'
import Counter from './Counter'
import Form from './Form'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Test />
    <Counter /> */}
    <Form />
  </StrictMode>,
)
