import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import DeviceRow from "../components/DeviceRow"


export default function DeviceList() {

    const {devices} = useContext(GlobalContext)
    console.log(devices)

    return (
        <>
        <div className="list-devices">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        devices.map(device => (
                            <DeviceRow key={device.id} device={device} />
                        ))
                    }
                </tbody>
            </table>

        </div>
        </>
    )
}