import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Products from "./Products"
import Laptop from "./Laptop"
import Mobile from "./Mobile"
function User() {
  const { id } = useParams();
  return (
    <h2>User ID: {id}</h2>
  )
}
function NotFound() {
  return (
    <h2>404 Not Found</h2>
  )
}
function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="brand">RouterReact</div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/user/10" className="nav-link">User Profile</Link>
          <Link to="/products" className="nav-link">Products</Link>
        </nav>
      </div>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products" element={<Products />} >
            <Route path="laptop" element={<Laptop />} />
            <Route path="mobile" element={<Mobile />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
