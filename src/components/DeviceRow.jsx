import { Link } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"



const DeviceRow = function ({ device }) {

    const { favorites, toggleFavorites, compare, toggleCompare } = useContext(GlobalContext)
    const deviceFav = favorites.includes(device.id)
    const compared = compare.includes(device.id)
    const disabled = !compared && compare.length === 2

    
    return (
        <tr>
            <td><span
                className={`star ${deviceFav ? "active" : ""}`}
                onClick={() => toggleFavorites(device.id)}
            >
                {deviceFav ? "⭐" : "☆"}
            </span>
            </td>
            <td>
                <button
                    className={`compare-btn ${compared ? "active" : ""}`}
                    onClick={(e) =>{ e.stopPropagation(); toggleCompare(device.id)}}
                    disabled={disabled}
                >
                    {compared ? "Rimuovi" : "Confronta"}
                </button>
            </td>
            <td><Link to={`/devices/${device.id}`}> {device.title}</Link></td>
            <td>{device.category}</td>
        </tr>
    )
}

export default DeviceRow