import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function SingleDevicePage() {

    const { id } = useParams()
    const { devices } = useContext(GlobalContext)
    const navigate = useNavigate()
    const device = devices.find(d => d.id === parseInt(id))

    if (!device) {
        return (
            <h2>Device does not exist</h2>
        )
    }

    return (
        <div className="task-details-container">
            <h1>Device Details</h1>

            <div className="task-details-section">
                <label>Title</label>
                <p>{device.title}</p>
            </div>

            <div className="task-details-section">
                <label>Category</label>
                <p>{device.category}</p>
            </div>

            <div className="task-details-section">
                <label>Brand</label>
                <p>{device.brand}</p>
            </div>

            <div className="task-details-section">
                <label>Price</label>
                <p>{device.price}€</p>
            </div>

            <div className="task-details-section">
                <label>Ram</label>
                <p>{device.ram}</p>
            </div>

            <div className="task-details-section">
                <label>Storage</label>
                <p>{device.storage}</p>
            </div>
        </div>
    )
}
