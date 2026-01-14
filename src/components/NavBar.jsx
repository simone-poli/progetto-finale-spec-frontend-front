import { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"

export function Navbar() {
    const { compare } = useContext(GlobalContext)
    return (
        <nav className="navbar">
            <Link to="/favorites">
                <button className="favorites-btn">Preferiti</button>
            </Link>
            <Link to="/compare">
                <button className="favorites-btn" disabled={compare.length !==2}>Confronta</button>
            </Link>
        </nav>
    )
}
