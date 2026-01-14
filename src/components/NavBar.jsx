import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/favorites">
                <button className="favorites-btn">Preferiti</button>
            </Link>
        </nav>
    )
}
