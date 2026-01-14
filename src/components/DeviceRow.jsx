import { Link } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"



const DeviceRow = function({device}) {

        const {favorites, toggleFavorites} = useContext(GlobalContext)
        const deviceFav = favorites.includes(device.id)

    return (
        <tr>
            <td><span 
            className={`star ${deviceFav ? "active" : ""}`} 
            onClick={() => toggleFavorites(device.id)}
            >
                {deviceFav ? "⭐" : "☆"}
                </span></td>
            <td><Link to={`/devices/${device.id}`}> {device.title}</Link></td>
            <td>{device.category}</td>
        </tr>
    )
}

export default DeviceRow