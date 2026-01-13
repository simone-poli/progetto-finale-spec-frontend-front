import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function SingleDevicePage() {

    const { id } = useParams()
    const { getDeviceById } = useContext(GlobalContext)
    
    const [singleDevice, setSingleDevice] = useState(null)

    useEffect(() => {
        getDeviceById(id).then(setSingleDevice)
    },[])

    console.log(singleDevice)

    if (!singleDevice) {
        return (
            <h2>Device does not exist</h2>
        )
    }

    return (
        <div className="task-details-container">
            <h1>Device Details</h1>

            <div className="task-details-section">
                <label>Title</label>
                <p>{singleDevice.title}</p>
            </div>

            <div className="task-details-section">
                <label>Category</label>
                <p>{singleDevice.category}</p>
            </div>

            <div className="task-details-section">
                <label>Brand</label>
                <p>{singleDevice.brand}</p>
            </div>

            <div className="task-details-section">
                <label>Price</label>
                <p>{singleDevice.price}€</p>
            </div>

            <div className="task-details-section">
                <label>Ram</label>
                <p>{singleDevice.ram}</p>
            </div>

            <div className="task-details-section">
                <label>Storage</label>
                <p>{singleDevice.storage}</p>
            </div>
        </div>
    )
}
