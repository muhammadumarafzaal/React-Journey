import { useNavigate } from "react-router-dom"//it a hook
function Home() {
    const navigate = useNavigate();
    const goToAbout = () => {
        navigate("/about")
    }
    return (
        <div className="card">
            <h2>Welcome to Home</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                This is a modern React application demonstrating advanced routing techniques.
            </p>
            <button className="btn-primary" onClick={goToAbout}>Explore More</button>
        </div>
    )
}
export default Home