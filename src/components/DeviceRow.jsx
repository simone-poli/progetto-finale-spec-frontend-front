import { Link } from "react-router-dom"



const DeviceRow = function({device}) {
    return (
        <tr>
            <td><Link to={`/devices/${device.id}`}> {device.title}</Link></td>
            <td>{device.category}</td>
        </tr>
    )
}

export default DeviceRow