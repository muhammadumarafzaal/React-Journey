import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// // import App from './App.jsx'
// // import ToggleTest from './ToggleTest'
// import Users from './Users'
import LoginForm from './LoginForm'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ToggleTest /> */}
    {/* <Users /> */}
    <LoginForm />
  </StrictMode>,
)
