import { Link, Outlet } from "react-router-dom";//Outlet for nested routes
function Products() {
    return (
        <div className="card">
            <h2>Our Products</h2>
            <nav className="products-nav">
                <Link to="mobile" >Mobiles</Link>
                <Link to="laptop" >Laptops</Link>
            </nav>
            <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.5rem' }}>
                <Outlet />
            </div>
        </div>
    )
}
export default Products;